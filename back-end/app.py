from flask import Flask, request, jsonify
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)


@app.route('/')
def index():
    return jsonify(msg="niggu from backend!")

if __name__ == '__main__':
    app.run(debug=True)