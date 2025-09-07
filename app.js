const imagens = [
  { url: './img/hackathon.jpg ', texto: 'HACKATHON 2023' },
  { url: './img/desconstruindo_racismo.jpg ', texto: 'VENCEMOS EM 2 LUGAR' },
  {
    url: './img/desconstruindo_hackathon.jpg',
    texto: 'FOI INCRÍVEL ',
  },
];

const carrossel = document.getElementById('carrossel');
const descricao = document.getElementById('descricao');

let indice = 0;

function trocarImagem() {
  // Some com a imagem (fade-out)
  carrossel.classList.remove('opacity-100');
  carrossel.classList.add('opacity-0');

  setTimeout(() => {
    // Atualiza imagem e texto
    carrossel.style.backgroundImage = `url(${imagens[indice].url})`;
    descricao.textContent = imagens[indice].texto;

    // Volta a aparecer (fade-in)
    carrossel.classList.remove('opacity-0');
    carrossel.classList.add('opacity-100');

    // Próxima imagem
    indice = (indice + 1) % imagens.length;
  }, 1000); // 1 segundo para fazer o fade
}

// Primeira imagem
carrossel.style.backgroundImage = `url(${imagens[indice].url})`;
descricao.textContent = imagens[indice].texto;
indice++;

// Troca a cada 4 segundos
setInterval(trocarImagem, 4000);
