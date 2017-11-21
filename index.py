from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from config import BaseConfig
from flask.ext.bcrypt import Bcrypt
import mediacloud

app = Flask(__name__, static_folder="./static/dist", template_folder="./static")
app.config.from_object(BaseConfig)
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
mc = mediacloud.api.MediaCloud(BaseConfig.MEDIACLOUD_API_KEY)
