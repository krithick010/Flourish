from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend requests (adjust if needed)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

counter = {"value": 0}

@app.get("/get-counter")
def get_counter():
    return counter

@app.post("/update-counter")
def update_counter():
    counter["value"] += 1
    return counter
