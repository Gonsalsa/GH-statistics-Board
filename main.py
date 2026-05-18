from fastapi import FastAPI

app = FastAPI()

#To start the api, write this in the terminal:
# uvicorn main:app --reload

@app.get("/hello")
def hello():
    return "Hello World"
