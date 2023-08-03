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
COPY entrypoint.sh .
COPY config.json .
COPY credentials.json .
RUN chmod +x /agriculture-website/entrypoint.sh

# Install PIP dependencies
COPY backend/requirements.txt .
RUN pip3 install --upgrade -r requirements.txt

EXPOSE 8080

# Command to run
WORKDIR /agriculture-website
ENTRYPOINT ["/agriculture-website/entrypoint.sh"]
CMD ["help"]
