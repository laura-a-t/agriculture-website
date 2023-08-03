#!/bin/bash

if [[ $# -lt 1 ]]
then
    >&2 echo "Usage: $0 {run|help} [-v]"
    exit -1
fi

command="$1"
shift

case "${command}" in
    run)
        export LC_ALL=en_US.utf8
        export LANG=en_US.utf8
        gunicorn backend.main:app -w 4 --max-requests 10 --timeout 120 --graceful-timeout 120 -b 0.0.0.0:8080 -k uvicorn.workers.UvicornWorker
        ;;
    help)
        echo "This is the entry-point script for the agriculture-website backend"
        echo
        echo "Example uses:"
        echo "  docker run <image-name> help"
        echo "  docker run <image-name> run"
        ;;
    *)
        >&2 echo "Unknown command: ${command}"
        >&2 echo "Usage: $0 {run|help} [-v]"
        exit -2
esac
