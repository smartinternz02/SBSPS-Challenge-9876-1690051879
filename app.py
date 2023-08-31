from flask import Flask, jsonify,request,render_template
import warnings
warnings.filterwarnings("ignore")
app = Flask(__name__)

@app.route('/',methods=['GET'])
def homepage():
    return render_template("homepage.html")

@app.route('/defectdetection',methods=['GET','POST'])
def defectdet():
    return render_template("defectdetection.html")

@app.route('/aircraft',methods=['GET','POST'])
def aircraft():
    return render_template("aircraft.html")

@app.route('/aedd',methods=['GET','POST'])
def aedd():
    return render_template("aedd.html")

if __name__ == '__main__':
    app.run(debug=True)