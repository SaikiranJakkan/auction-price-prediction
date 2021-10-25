from flask import Flask, jsonify, render_template
from flask import request
from flask_cors import CORS
from recommender import make_recommendation


app = Flask(__name__, template_folder="./")
CORS(app)


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/get")
def get_price():
    t1 = True if (str(request.args.get("t1")).lower() == "true") else False
    t2 = int(request.args.get("t2"))
    t3 = int(request.args.get("t3"))
    t4 = int(request.args.get("t4"))
    t5 = int(request.args.get("t5"))
    searchTerms = [t2, t3, t4, t5]

    return make_recommendation(t1, searchTerms)


app.run(debug=True)
