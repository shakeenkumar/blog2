const articles = [
    {
        id: 1,
        title: "Septimus Heap Book One: Magyk",
        date: "July 5, 2022",
        description: "If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.",
        imgSrc: "./images/magyk.jpg",
        imgAlt: "Book cover for Septimus Heap 1",
        ages: "10-14",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐"
    },
    {
        id: 2,
        title: "Magnus Chase Book One: Sword of Summer",
        date: "December 12, 2021",
        description: "The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.",
        imgSrc: "./images/sword_of_summer.jpg",
        imgAlt: "Book cover for Magnus Chase 1",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐"
    },
    {
        id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
        imgSrc: "./images/pawn_of_prophecy.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    }
];

// Function to generate the articles dynamically
function renderArticles() {
    const articlesContainer = document.querySelector("#articles");

    articles.forEach(item => {
        // Create article element
        const article = document.createElement("article");
        
        // Use template literals for HTML content
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

// Render articles on page load
renderArticles();
