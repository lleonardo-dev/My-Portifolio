from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)

EMAIL_DESTINO = "ryandmoura@gmail.com"
EMAIL_REMETENTE = 'ryandmoura@gmail.com'

SENHA_APP = os.getenv("SENHA_APP_GMAIL")

@app.route('/enviar-email', methods=['POST'])
def enviar_email():
    dados = request.json
    nome = dados.get('nome')
    email_usuario = dados.get('email')
    mensagem = dados.get('mensagem')

    corpo = f"Nova mensagem do Portfólio\n\nNome: {nome}\nEmail: {email_usuario}\n\nMensagem:\n{mensagem}"
    msg = MIMEText(corpo)
    msg['Subject'] = f"Contato Portfólio: {nome}"
    msg['From'] = EMAIL_REMETENTE
    msg['To'] = EMAIL_DESTINO

    try:
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(EMAIL_REMETENTE, SENHA_APP)
            server.send_message(msg)
        return jsonify({"status": "sucesso", "mensagem": "E-mail enviado!"}), 200
    except Exception as e:
        print(e)
        return jsonify({"status": "erro", "mensagem": str(e)}), 500
    
if __name__ == '__main__':
    app.run(debug=True, port=5000)
    