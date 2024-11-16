let gamesAlugados = 1;

function contarGamesAlugados() {
    console.log(`Total de jogos alugados: ${gamesAlugados}`);
}

function alterarStatus(id) {
    let gameId = document.getElementById(`game-${id}`);
    let img = gameId.querySelector('.dashboard__item__img');
    let botao = gameId.querySelector('.dashboard__item__button');
    let nome = gameId.querySelector('.dashboard__item__name');

    if (img.classList.contains('dashboard__item__img--rented')) {
        if (confirm(`Você tem certeza que deseja devolver o jogo ${nome.innerHTML}?`)) {
            img.classList.remove('dashboard__item__img--rented');
            botao.classList.remove('dashboard__item__button--return');
            botao.innerHTML = 'Alugar';
            if (gamesAlugados > 0) {
                gamesAlugados--;
            } 
        }
    } else {
        img.classList.add('dashboard__item__img--rented');
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver';
        gamesAlugados++;
    }

    contarGamesAlugados()
}

