from flask import Flask, Blueprint
import os

app = Flask(__name__)

SECRET_KEY = 'something-secret'
DEBUG = True

BASEDIR = os.path.abspath(os.path.dirname(__file__))

from app.views import mod as mainModule
app.register_blueprint(mainModule)
