function renderArticles() {
    const articlesContainer = document.querySelector("#articles");

    articles.forEach(item => {
        const article = document.createElement("article");
        article.innerHTML = `
            <img src="${item.imgSrc}" alt="${item.imgAlt}">
            <h2>${item.title}</h2>
            <p class="details">Date: ${item.date} | Ages: ${item.ages} | Genre: ${item.genre}</p>
            <p>${item.description}</p>
            <p class="rating">${item.stars}</p>
        `;
        articlesContainer.appendChild(article);
    });
}

renderArticles();
