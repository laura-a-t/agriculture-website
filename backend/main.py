import logging
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import smtplib
import ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from backend.util import configure_logging, get_config

LOGGER = logging.getLogger(__name__)

configure_logging()
app = FastAPI()
config = get_config()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class EmailData(BaseModel):
    name: str
    email: str
    subject: str
    message: str


@app.post("/send_email/")
async def send_email(email_data: EmailData):
    LOGGER.info(f"Received post request for {email_data}")

    # Email details
    email = config['email']
    password = config['password']
    subject = email_data.subject
    message_text = f"Name: {email_data.name}\nEmail: {email_data.email}\nSubject: {email_data.subject}\n\n{email_data.message}"

    # Set up the SMTP server
    smtp_server = "smtp.gmail.com"
    port = 587
    server = smtplib.SMTP(smtp_server, port)
    try:
        # Connect to the SMTP server
        context = ssl.create_default_context()
        server.starttls(context=context)

        # Log in with the sender's email and password
        server.login(email, password)

        # Create the email message
        message = MIMEMultipart()
        message["From"] = email
        message["To"] = email
        message["Subject"] = subject

        # Attach the body to the message
        message.attach(MIMEText(message_text, "plain"))

        # Send the email
        server.sendmail(email, email, message.as_string())

        LOGGER.info("Email sent successfully!")
        return {"message": "Email sent successfully"}

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")

    finally:
        # Disconnect from the SMTP server
        server.quit()


@app.get("/")
def index():
    return "App is running"
