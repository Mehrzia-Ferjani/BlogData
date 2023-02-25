# Blog App

This is a blog application built with Angular and FastAPI.

## Frontend

The frontend was built using Angular. To run the frontend, navigate to the "frontend/blogAppElyadata" directory and run the following commands:

npm install
npm start


## Backend

The backend was built using FastAPI. To run the backend, navigate to the "backend" directory and create a virtual environment:

python3 -m venv env
source env/bin/activate

Then, install the requirements and start the server:

pip install -r requirements.txt
python -m uvicorn main:app --reload

Make sure you are connected to a MongoDB database and use "blog_collection" as a collection.
