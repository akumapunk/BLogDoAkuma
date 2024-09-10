document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById("card-container");
    const postContent = document.getElementById("post-content");

    // Carrega as postagens de um arquivo JSON
    fetch('posts.json')
        .then(response => response.json())
        .then(articles => {
            articles.forEach(article => {
                const card = createCard(article);
                cardContainer.appendChild(card);

                // Adiciona um evento de clique ao card para mostrar o conteúdo da postagem
                card.addEventListener('click', () => showPostContent(article));
            });
        })
        .catch(error => console.error('Erro ao carregar os artigos:', error));

    // Função para criar um card de artigo
    function createCard({ title, image, description, category, author, date }) {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img src="${catelyn.jpeg}" alt="${title}" class="card-image">
            <div class="card-content">
                <span class="category">${Livros, Fantasia}</span>
                <h2 class="card-title">${title}</h2>
                <p class="card-description">${description}</p>
                <div class="card-footer">
                    <span class="author">${author}</span>
                    <span class="date">${date}</span>
                </div>
            </div>
        `;

        return card;
    }

    // Função para mostrar o conteúdo completo de uma postagem
    function showPostContent(article) {
        cardContainer.style.display = 'none'; // Oculta os cards
        postContent.style.display = 'block';  // Mostra o conteúdo da postagem

        postContent.innerHTML = `
            <h2>${article.title}</h2>
            <img src="${article.image}" alt="${article.title}" class="post-image">
            <p><strong>Por ${article.author} em ${article.date}</strong></p>
            ${article.content}
        `;
    }

    // Função para voltar à página inicial
    document.getElementById('home-link').addEventListener('click', () => {
        postContent.style.display = 'none'; // Oculta o conteúdo da postagem
        cardContainer.style.display = 'flex'; // Mostra os cards
    });
});
