from flask_sqlalchemy import SQLAlchemy
from flask_login import UserMixin

db = SQLAlchemy()

class Users(UserMixin, db.Model):
    """User Model"""
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(25), nullable=False, unique=True)
    password = db.Column(db.String(), nullable=False)


class Messages(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    sender=db.Column(db.String(25),nullable=False)
    room=db.Column(db.String(25),nullable=False)
    timestamp=db.Column(db.String(25))
    message=db.Column(db.String(256))

    def convertJson(self):
        return {
            'id':self.id,
            'sender':self.sender,
            'room':self.room,
            'timestamp':self.timestamp,
            'message':self.message
        }


class Rooms(db.Model):
    id=db.Column(db.Integer,primary_key=True)
    room=db.Column(db.String(30))