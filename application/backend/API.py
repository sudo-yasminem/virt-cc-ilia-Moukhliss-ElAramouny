from flask import Flask

app = Flask(__name__)

@app.route('/api/calculer', methods=['POST'])
def calc():

    return "test"
