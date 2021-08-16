from flask import (Flask, request, jsonify)
from flask_cors import CORS, cross_origin

app = Flask(__name__, static_folder="../react-redux-flask-ecommerce/build", static_url_path="")
# app = Flask(__name__)

cors = CORS(app, support_credentials=True)


@app.route("/")
@cross_origin()
def serve():
    
    return send_from_directory(app.static_folder, "index.html")


if __name__ == "__main__":
    app.run(debug = False)