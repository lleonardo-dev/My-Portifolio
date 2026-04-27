import { animate, scroll } from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";


animate(
  "#sobre",
  { scale: [0.5, 1] }, 
  { ease: "circInOut", duration: 1 },
);

window.falarcomigo = function() {
  document.getElementById("contato").scrollIntoView({ behavior: "smooth" });
};

window.certificacoesjs = function() {
  document.getElementById();
};


document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    if (form) {
        form.addEventListener("submit", async (e) => {
            e.preventDefault(); 

            const btn = document.getElementById("btnEnviar");
            btn.innerText = "Enviando...";

            const dados = {
                nome: document.getElementById("userName").value,
                email: document.getElementById("userEmail").value,
                mensagem: document.getElementById("userMessage").value
            };

            try {
                const response = await fetch("http://127.0.0.1:5000/enviar-email", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(dados)
                });

                if (response.ok) {
                    alert("Mensagem recebida com sucesso no Python!");
                    form.reset(); 
                } else {
                    alert("Erro ao enviar. Verifique o Python.");
                }
            } catch (error) {
                console.error("Erro na requisição:", error);
                alert("O servidor Python está rodando na porta 5000?");
            } finally {
                btn.innerText = "Enviar Mensagem";
            }
        });
    }
});