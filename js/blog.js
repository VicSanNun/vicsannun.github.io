// Blog posts data
const blogPosts = [
    {
        title: "Getting Started with Python Programming",
        excerpt: "Learn the basics of Python programming language and its key features.",
        date: "March 20, 2024",
        author: "Your Name",
        image: "https://via.placeholder.com/300x200",
        link: "blog/getting-started-with-python.html",
        tags: ["Python", "Programming", "Tutorial"]
    }
    // Add more posts here as you create them
];

// Function to create a blog post card
function createBlogPostCard(post) {
    const tags = post.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    
    return `
        <div class="card">
            <img src="${post.image}" alt="${post.title}">
            <div class="card-content">
                <h3>${post.title}</h3>
                <div class="meta">
                    <span class="date">${post.date}</span>
                    <span class="author">By ${post.author}</span>
                </div>
                <p>${post.excerpt}</p>
                <div class="tags">
                    ${tags}
                </div>
                <a href="${post.link}" class="read-more">Read More</a>
            </div>
        </div>
    `;
}

// Function to load blog posts
function loadBlogPosts() {
    const container = document.getElementById('blog-posts-container');
    if (container) {
        container.innerHTML = blogPosts.map(createBlogPostCard).join('');
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadBlogPosts();
}); 