#!/bin/bash

export FLASK_APP=app.py
export FLASK_ENV=production

./.data/venv/bin/python -m flask run --host=0.0.0.0 --port=$PORT
