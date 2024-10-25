function renderArticles(filteredArticles) {
    const articlesContainer = document.querySelector("#articles");
    articlesContainer.innerHTML = '';  // Clear previous content

    filteredArticles.forEach(item => {
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

function filterArticles() {
    const sortValue = document.getElementById("sort").value;
    const ageValue = document.getElementById("age").value;
    const genreValue = document.getElementById("genre").value;
    const ratingValue = document.getElementById("rating").value;

    let filteredArticles = [...articles];

    // Filtering logic
    if (ageValue !== 'all') {
        filteredArticles = filteredArticles.filter(article => article.ages === ageValue);
    }
    if (genreValue !== 'all') {
        filteredArticles = filteredArticles.filter(article => article.genre.toLowerCase() === genreValue);
    }
    if (ratingValue !== 'all') {
        filteredArticles = filteredArticles.filter(article => article.stars.length === parseInt(ratingValue));
    }

    // Sorting logic
    if (sortValue === 'rating') {
        filteredArticles.sort((a, b) => b.stars.length - a.stars.length);
    } else if (sortValue === 'date') {
        filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    }

    renderArticles(filteredArticles);
}

// Initial load
renderArticles(articles);

// Listen for filter changes
document.getElementById("filterForm").addEventListener("change", filterArticles);
