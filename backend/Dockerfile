FROM python:3.9-slim

WORKDIR /api-flask

COPY ./requirements.txt /api-flask/

RUN pip install --no-cache-dir -r requirements.txt

COPY api.py /api-flask/
COPY firestore /api-flask/firestore

EXPOSE 5000

CMD ["gunicorn", "-b", "0.0.0.0:5000", "api:app"]