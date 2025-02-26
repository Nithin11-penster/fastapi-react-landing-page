from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend to access backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/hero")
def get_hero():
    return {
        "title": "Welcome to Our Platform",
        "subtitle": "We help you grow your business",
        "cta_text": "Get Started",
        "cta_link": "/signup"
    }

@app.get("/features")
def get_features():
    return [
        {"icon": "🚀", "title": "Fast Performance", "description": "Our system runs blazing fast."},
        {"icon": "🔒", "title": "Secure", "description": "Top-notch security for your data."},
        {"icon": "⚡", "title": "Scalable", "description": "Grow without limits."}
    ]

@app.get("/testimonials")
def get_testimonials():
    return [
        {"name": "Alice", "feedback": "Amazing service!"},
        {"name": "Bob", "feedback": "Very reliable platform."},
        {"name": "Charlie", "feedback": "Highly recommend it!"}
    ]
