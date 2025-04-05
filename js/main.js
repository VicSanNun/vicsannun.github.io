// Mobile Menu Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burger.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !burger.contains(e.target) && nav.classList.contains('active')) {
        nav.classList.remove('active');
        burger.classList.remove('active');
    }
});

// Sample data for recent posts and projects
const recentPosts = [
    {
        title: "Getting Started with Python",
        excerpt: "Learn the basics of Python programming language...",
        date: "March 15, 2024",
        image: "https://via.placeholder.com/300x200",
        link: "blog/getting-started-with-python.html"
    },
    {
        title: "Web Development Best Practices",
        excerpt: "Essential tips and tricks for modern web development...",
        date: "March 10, 2024",
        image: "https://via.placeholder.com/300x200",
        link: "blog/web-development-best-practices.html"
    }
];

const featuredProjects = [
    {
        title: "Personal Blog",
        description: "A responsive blog built with HTML, CSS, and JavaScript",
        image: "https://via.placeholder.com/300x200",
        link: "projects/personal-blog.html",
        tech: ["HTML", "CSS", "JavaScript"]
    },
    {
        title: "Task Manager App",
        description: "A simple task management application",
        image: "https://via.placeholder.com/300x200",
        link: "projects/task-manager.html",
        tech: ["React", "Node.js", "MongoDB"]
    }
];

// Function to create post cards
function createPostCard(post) {
    return `
        <div class="card">
            <div class="card-content">
                <h3>${post.title}</h3>
                <p>${post.excerpt}</p>
                <p class="date">${post.date}</p>
                <a href="${post.link}" class="read-more">Read More</a>
            </div>
        </div>
    `;
}

// Function to create project cards
function createProjectCard(project) {
    const techStack = project.tech.map(tech => 
        `<span class="tech-tag">${tech}</span>`
    ).join('');

    return `
        <div class="card">
            <div class="card-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-stack">
                    ${techStack}
                </div>
                <a href="${project.link}" class="read-more">View Project</a>
            </div>
        </div>
    `;
}

// Load recent posts
function loadRecentPosts() {
    const container = document.getElementById('recent-posts-container');
    if (container) {
        container.innerHTML = recentPosts.map(createPostCard).join('');
    }
}

// Load featured projects
function loadFeaturedProjects() {
    const container = document.getElementById('featured-projects-container');
    if (container) {
        container.innerHTML = featuredProjects.map(createProjectCard).join('');
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadRecentPosts();
    loadFeaturedProjects();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 