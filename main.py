from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from controllers.teas import router as TeasRouter

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['http://localhost:5173', 'http://127.0.0.1:5173' ],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*']
)

app.include_router(TeasRouter, prefix='/api')

@app.get('/')
def home():
    # Hello world function
    return {'message': 'Hello World!'}