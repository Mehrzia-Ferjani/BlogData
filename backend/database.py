from pymongo import MongoClient
client = MongoClient("mongodb+srv://ferjanimehrzia2020:ferjanimehrzia2020@cluster0.gvq7guz.mongodb.net/test")

db = client["blog_database"]

collection = db["blog_collection"]