const articles = [
    {
        id: 1,
        title: "Septimus Heap Book One: Magyk",
        date: "July 5, 2022",
        description: "If you enjoy stories about seventh sons of seventh sons and magyk, this is the book for you.",
        imgSrc: "https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg",
        imgAlt: "Book cover for Septimus Heap 1",
        ages: "10-14",
        genre: "Fantasy",
        rating: 4
    },
    {
        id: 2,
        title: "Magnus Chase Book One: Sword of Summer",
        date: "December 12, 2021",
        description: "The anticipated new novel by Rick Riordan, featuring Norse mythology.",
        imgSrc: "https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300",
        imgAlt: "Book cover for Magnus Chase 1",
        ages: "12-16",
        genre: "Fantasy",
        rating: 5
    },
    {
        id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        description: "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms.",
        imgSrc: "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        rating: 5
    }
];

const articleList = document.querySelector('#articles');
const filterForm = document.querySelector('#filterForm');

// Function to create and display articles
function displayArticles(filteredArticles) {
    articleList.innerHTML = ''; // Clear existing articles
    filteredArticles.forEach(article => {
        const articleElement = document.createElement('article');
        articleElement.classList.add('article');
        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <p class="date">${article.date}</p>
            <img src="${article.imgSrc}" alt="${article.imgAlt}">
            <p>${article.description}</p>
            <p>Ages: ${article.ages}</p>
            <p>Genre: ${article.genre}</p>
            <p>Rating: ${'⭐'.repeat(article.rating)}</p>
        `;
        articleList.appendChild(articleElement);
    });
}

// Function to filter articles based on user selection
function filterArticles(event) {
    event.preventDefault(); // Prevent form submission

    const sortValue = document.querySelector('#sort').value;
    const ageValue = document.querySelector('#age').value;
    const genreValue = document.querySelector('#genre').value;
    const ratingValue = document.querySelector('#rating').value;

    let filteredArticles = articles;

    // Filter by age
    if (ageValue !== 'all') {
        filteredArticles = filteredArticles.filter(article => article.ages === ageValue);
    }

    // Filter by genre
    if (genreValue !== 'all') {
        filteredArticles = filteredArticles.filter(article => article.genre.toLowerCase() === genreValue.toLowerCase());
    }

    // Filter by rating
    if (ratingValue !== 'all') {
        filteredArticles = filteredArticles.filter(article => article.rating.toString() === ratingValue);
    }

    // Sort articles
    if (sortValue === 'date') {
        filteredArticles.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else if (sortValue === 'rating') {
        filteredArticles.sort((a, b) => b.rating - a.rating);
    }

    // Display filtered and sorted articles
    displayArticles(filteredArticles);
}

// Event listener for filter form submission
filterForm.addEventListener('submit', filterArticles);

// Initial display of articles
displayArticles(articles);
