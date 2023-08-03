import logging
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from google.oauth2 import service_account
from googleapiclient.discovery import build
from email.mime.text import MIMEText

from backend.util import configure_logging, get_config

SCOPES = ['https://www.googleapis.com/auth/gmail.send']
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
    sender_email = "your_email@gmail.com"  # Replace with your Gmail address
    service_account_file = "path/to/your/service-account-key.json"

    subject = email_data.subject
    message = f"Name: {email_data.name}\nEmail: {email_data.email}\n\n{email_data.message}"

    msg = MIMEText(message)
    msg['From'] = sender_email
    msg['To'] = sender_email  # Send the email to yourself
    msg['Subject'] = subject

    try:
        credentials = service_account.Credentials.from_service_account_file(service_account_file, scopes=SCOPES)
        service = build('gmail', 'v1', credentials=credentials)

        message = {'raw': msg.as_string()}
        service.users().messages().send(userId='me', body=message).execute()

        return {"message": "Email sent successfully!"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to send email: {str(e)}")

@app.get("/")
def index():
    return "App is running"
