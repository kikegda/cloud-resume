from flask import Flask
from firestore.firestore import add_visit, get_visits
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route('/')
def hello_world():
    add_visit()
    return 'Hello, World!'

@app.route('/visits')
def visits():
    return get_visits()