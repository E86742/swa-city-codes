import flask
from flask import request, jsonify, Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
from api.apiv1 import apiv1
import json

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app)  # comment this on deployment
api = Api(app)

@app.route("/", methods=['GET'], defaults={'path': ''})
def home():
    return ''

def serve(path):
    return send_from_directory(app.static_folder, 'index.html')

api.add_resource(apiv1, '/apiv1')

@app.route('/apiv1/', methods=['GET'])
def api_all():
    return 'test'
# app.run()
