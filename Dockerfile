FROM python:3.9-slim

# Configure timezone
ENV TZ=Europe/Amsterdam
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone


# Upgrade pip, install gunicorn
RUN pip3 install --upgrade pip
RUN pip3 install gunicorn

# Set default logging level
ENV LOG_LEVEL=INFO

# Copy application
WORKDIR /agriculture-website
COPY backend ./backend

# Install PIP dependencies
COPY backend/requirements.txt .
RUN pip3 install --upgrade -r requirements.txt

EXPOSE 8080

# Command to run
WORKDIR /agriculture-website
CMD gunicorn backend.main:app -w 4 --max-requests 10 --timeout 120 --graceful-timeout 120 -b 0.0.0.0:8080 -k uvicorn.workers.UvicornWorker
