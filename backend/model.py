from pydantic import BaseModel


class Blog(BaseModel):
    id: str = None
    title: str
    content: str
    author: str

