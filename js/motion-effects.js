import { animate, scroll , frame } from "https://cdn.jsdelivr.net/npm/motion@12.38.0/+esm"

// Efect of rolling the cards!!
const cards = document.querySelectorAll(".img-container > div");

cards.forEach((item) => {
    scroll(
        animate(item, { 
            opacity: [0, 1, 1, 0], // Surge, estabiliza, some
            scale: [0.8, 1, 1, 0.8], // Dá um efeito de zoom entrando e saindo
            y: [40, 0, 0, -40]  // Sobe levemente enquanto rola
        }), 
        {
            target: item,
            // start end = topo do card toca o fim da tela
            // end start = fim do card toca o topo da tela
            offset: ["start end", "end end", "start start", "end start"],
        }
    );
});






 

    