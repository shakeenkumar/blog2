const articles = [
    {
        title: "Exploring the Universe",
        content: "The universe is vast and full of wonders. From distant galaxies to the mysteries of black holes, there's so much to learn!",
        image: "path/to/image1.jpg",
        date: "2024-10-01"
    },
    {
        title: "The Wonders of Nature",
        content: "Nature has its own way of mesmerizing us. Whether it's the beauty of a sunset or the sound of rain, nature inspires.",
        image: "path/to/image2.jpg",
        date: "2024-10-05"
    },
    {
        title: "The Journey of Coding",
        content: "Learning to code can be an exciting adventure. It opens up new opportunities and allows you to create amazing things.",
        image: "path/to/image3.jpg",
        date: "2024-10-10"
    },
    {
        title: "The Magic of Reading",
        content: "Books can transport you to different worlds. Reading helps to expand your imagination and enhances your creativity.",
        image: "path/to/image4.jpg",
        date: "2024-10-12"
    },
    {
        title: "Fun Science Experiments",
        content: "Science can be a lot of fun! Try these simple experiments at home to learn about chemical reactions and physics.",
        image: "path/to/image5.jpg",
        date: "2024-10-15"
    },
];

// Function to render articles
function renderArticles() {
    const articlesContainer = document.getElementById("articles");
    articlesContainer.innerHTML = ""; // Clear previous articles

    articles.forEach(article => {
        const articleElement = document.createElement("div");
        articleElement.classList.add("article");
        articleElement.innerHTML = `
            <h2>${article.title}</h2>
            <img src="${article.image}" alt="${article.title}">
            <p>${article.content}</p>
            <p><small>Published on: ${article.date}</small></p>
        `;
        articlesContainer.appendChild(articleElement);
    });
}

// Call the render function
renderArticles();
