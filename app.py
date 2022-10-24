from flask import Flask, send_from_directory
from flask_restful import Api, Resource, reqparse
from flask_cors import CORS
from api.HelloApiHandler import HelloApiHandler
# from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__, static_url_path='', static_folder='frontend/build')
CORS(app)  # comment this on deployment
api = Api(app)
# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///project.db"


@app.route("/", defaults={'path': ''})
def serve(path):
    return send_from_directory(app.static_folder, 'index.html')


api.add_resource(HelloApiHandler, '/flask/hello')
# create the extension
# db = SQLAlchemy(app)
# create the app
# configure the SQLite database, relative to the app instance folder
# initialize the app with the extension

# class User(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     username = db.Column(db.String, unique=True, nullable=False)
#     email = db.Column(db.String)

# def __init__(self, username, email):
#     self.username = username
#     self.email = email

# me = User(username='admin', email='admin@example.com')
# peter = User(username='peter', email='peter@example.com')
# guest = User(username='guest', email='guest@example.com')

# with app.app_context():
#     db.init_app(app)
#     # db.create_all()
#     # db.session.add(me)
#     # User.query.all()

# # users = User.query.all()
# # for user in users:
# #     print(user.username)
# #     print(f"<id={user.id}, username={user.username}")

# # db.session.close()
# @app.route('/')
# def index():
#     return 'Index Page'

# @app.route("/users/")
# def user_list():
#     users = User.query.all()
#     return render_template("users.html", users=users)


