// Projects data
const projects = [
    {
        title: "Personal Blog",
        description: "A responsive blog built with HTML, CSS, and JavaScript. Features include Markdown support, LaTeX math expressions, and a clean, modern design.",
        image: "https://via.placeholder.com/300x200",
        link: "projects/personal-blog.html",
        tech: ["HTML", "CSS", "JavaScript", "Python", "Markdown"]
    },
    {
        title: "Task Manager App",
        description: "A web-based task management application with user authentication and real-time updates.",
        image: "https://via.placeholder.com/300x200",
        link: "projects/task-manager.html",
        tech: ["React", "Node.js", "MongoDB", "Express"]
    }
];

// Function to create a project card
function createProjectCard(project) {
    const techStack = project.tech.map(tech => `<span class="tech-tag">${tech}</span>`).join('');
    
    return `
        <div class="card">
            <img src="${project.image}" alt="${project.title}">
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

// Function to load projects
function loadProjects() {
    const container = document.getElementById('projects-container');
    if (container) {
        container.innerHTML = projects.map(createProjectCard).join('');
    }
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
}); 