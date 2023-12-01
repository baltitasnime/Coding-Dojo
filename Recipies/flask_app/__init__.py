# __init__.py
from flask import Flask
app = Flask(__name__)
app.secret_key = "tastas"
DATABASE="recipes_schema"