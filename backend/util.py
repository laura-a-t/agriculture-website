import logging


def configure_logging():
    log_format = '%(asctime)s %(levelname)-8s %(filename)s:%(lineno)d - %(message)s'
    date_format = '%Y-%m-%d %H:%M:%S'
    logging.basicConfig(level=logging.DEBUG, format=log_format, datefmt=date_format)
    logging.getLogger("requests").setLevel(logging.WARNING)
