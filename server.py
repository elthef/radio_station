'''
set FLASK_APP=server
set FLASK_ENV=development
flask run
'''
from flask import Flask, render_template, send_from_directory, url_for, request, redirect
import os
import csv

app = Flask(__name__)


@app.route("/")
def index_html():
    return render_template('index.html')


@app.route("/<string:page_name>")
def htmp_pg(page_name):
    return render_template(page_name)


@app.route("/submit_form", methods=['POST', 'GET'])
def submit_form():
    error = None
    if request.method == 'POST':
        try:
            data = request.form.to_dict()
            # write_to_file(data)
            write_to_csv(data)
            return render_template('/thank_you.html', message=data.get('email'))
        except:
            return f"Something went wrong with the database"
    else:
        return render_template("submit_form.html", message=f"something went wrong")
    # the code below is executed if the request method
    # was GET or the credentials were invalid
    # return render_template('login.html', error=error)


@app.route("/audio_stream")
def Audio_Stream():
    r = request.get("http://playerservices.streamtheworld.com/api/livestream-redirect/MONEY_893.mp3", stream=True)
    return Response(r.iter_content(chunk_size=1024), mimetype='audio/mpeg')


####
def write_to_file(data):
    email = data.get('email', 'None')
    subject = data.get('subject', 'None')
    message = data.get('message', 'None')
    with open('database.txt', mode='a') as database:
        file = database.writelines(f"{email},{subject},{subject}")


def write_to_csv(data):
    email = data.get('email', 'None')
    subject = data.get('subject', 'None')
    message = data.get('message', 'None')
    with open('database.csv', newline='', mode='a') as database:
        if database.tell() == 0:
            fieldnames = ['email', 'subject', 'message']
            writer = csv.DictWriter(database, fieldnames=fieldnames)
            writer.writeheader()
        csv_writer = csv.writer(database, delimiter=',', quotechar="'", quoting=csv.QUOTE_MINIMAL)
        csv_writer.writerow([email, subject, subject])

# @app.route("/works.html")
# def works():
#     return render_template('works.html')
#
# @app.route("/work.html")
# def work():
#     return render_template('work.html')
#
# @app.route("/about.html")
# def about():
#     return render_template('about.html')
#
# @app.route("/components.html")
# def components():
#     return render_template('components.html')
# @app.route("/index.html")
# def index_html1():
#     return render_template('index.html')
# @app.route("/<username>")
# def index_html(username=None):
#     #return 1+1
#     return render_template('index.html', name=username)

# @app.route("/helloworld")
# def hello_world():
#     #return 1+1
#     return "<p>Hello, 123</p>"
#
# @app.route("/blog")
# def blog():
#     #return 1+1
#     return "<p>Hello, bloggg123</p>"
#
# @app.route("/blog/2020/dogs")
# def blog1():
#     #return 1+1
#     return "<p>This is about dogs</p>"

# @app.route('/favicon.ico')
# def favicon():
#     print(os.path.join(app.root_path, 'static'))
#     return send_from_directory('favicon.ico', mimetype='static/image/F1.ico')

# @app.route('/post/<int:post_id>')
# def show_post(post_id):
#     # show the post with the given id, the id is an integer
#     return f'Post {post_id}'
