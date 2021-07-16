from os import name
from flask import Flask,request,jsonify
import json




items = [
    {'id': 1,
     'category': 'Birthday',
     'name': 'Ladies Watch',
     'price': 300,
     'suitable_for': 'F'},
    {'id': 2,
     'category': 'Birthday',
     'name': 'Personalised Diary',
     'price': 800,
     'suitable_for': 'A'},
    {'id': 3,
     'category': 'Birthday',
     'name': 'Fudge Cake',
     'price': 600,
     'suitable_for': 'A'},
      {'id': 4,
     'category': 'Festival',
     'name': 'Sweet Hamper',
     'price': 800,
     'suitable_for': 'A'},
      {'id': 5,
     'category': 'Festival',
     'name': 'Brass Diya',
     'price': 500,
     'suitable_for': 'A'},
      {'id': 6,
     'category': 'Festival',
     'name': 'Bamboo Plant',
     'price': 200,
     'suitable_for': 'A'},
      {'id': 7,
     'category': 'Anniversary',
     'name': 'Personalised Cushions',
     'price': 500,
     'suitable_for': 'M'},
      {'id': 8,
     'category': 'Anniversary',
     'name': 'Bouquet',
     'price': 300,
     'suitable_for': 'F'},
      {'id': 9,
     'category': 'Anniversary',
     'name': 'Pendent',
     'price': 400,
     'suitable_for': 'F'}
     
]     






app = Flask(__name__)



@app.route('/',methods=['GET'])

def index():
     return jsonify(items)
        
    


  
# main driver function
if __name__ == '__main__':
  
    # run() method of Flask class runs the application 
    # on the local development server.
    app.run(debug=True)