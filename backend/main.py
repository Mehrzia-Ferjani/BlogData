from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from model import Blog
from bson import ObjectId
from database import *
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get('/')
def root():
    return {"message": "Hello world"}


@app.post("/blogs/")
async def create_blog(blog: Blog):
    blog_dict = blog.dict()
    result = collection.insert_one(blog_dict)
    return {"id": str(result.inserted_id)}


@app.get("/blogs/")
async def read_blogs():
    blogs = []
    for blog in collection.find():
        blogs.append({
            "id": str(blog["_id"]),
            "title": blog["title"],
            "content": blog["content"],
            "author": blog["author"],
        })
    return {"blogs": blogs}


@app.get("/blogs/{blog_id}")
async def read_blog(blog_id: str):
    blog = collection.find_one({"_id": ObjectId(blog_id)})
    return {
        "id": str(blog["_id"]),
        "title": blog["title"],
        "content": blog["content"],
        "author": blog["author"],
    }
