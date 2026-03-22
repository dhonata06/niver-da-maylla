const cartao = document.getElementById("cartao");
const btnConfirmar = document.getElementById("btnConfirmar");

// 👉 VIRAR CARTÃO (apenas quando NÃO for clique em botão ou link)
cartao.addEventListener("click", (e) => {
    if (e.target.closest("a") || e.target.closest("button")) return;
    cartao.classList.toggle("aberto");
});

// 👉 BOTÃO WHATSAPP
btnConfirmar.addEventListener("click", (e) => {
    e.stopPropagation();

    const url = "https://wa.me/55619995545?text=Olá!+Confirmo+presença+no+piquenique+da+Maylla!+🍓🧺";
    window.open(url, "_blank");
});

// 👉 IMPEDIR QUALQUER LINK DE VIRAR O CARTÃO
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.stopPropagation();
    });
});


// 👉 CONTAGEM REGRESSIVA
const dataFesta = new Date("July 4, 2026 10:00:00").getTime();

const atualizarTimer = setInterval(() => {
    const agora = new Date().getTime();
    const diferenca = dataFesta - agora;
    const timerElemento = document.getElementById("timer");

    if (!timerElemento) return;

    if (diferenca < 0) {
        clearInterval(atualizarTimer);
        timerElemento.innerHTML = "O PIQUENIQUE COMEÇOU! 🍓";
        return;
    }

    const dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferenca % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferenca % (1000 * 60 * 60)) / (1000 * 60));

    timerElemento.innerHTML = `${dias}d ${horas}h ${minutos}m`;
}, 1000);