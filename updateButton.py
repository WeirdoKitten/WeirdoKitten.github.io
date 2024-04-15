from flask import Flask, render_template, redirect, url_for
import subprocess

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('scraping.html')

@app.route('/scrape')
def scrape():
    try:
        subprocess.run(['python', 'scraping.py'])
        return redirect(url_for('index'))
    except Exception as e:
        return f"Error: {e}"

if __name__ == '__main__':
    app.run(debug=True)
