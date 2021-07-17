const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        email,
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('content');
    let carregando = `<p id="resultado">Obrigado pelo cadastro!! Enviaremos um e-mail com os próximos passos.</p>`
    let pronto = `<p>Pronto!</p>`
    content.innerHTML = carregando

    setTimeout(() => {
        content.html = pronto
    }, 1)
})