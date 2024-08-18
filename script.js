document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { title: 'Project One', description: 'Description for project one.' },
        { title: 'Project Two', description: 'Description for project two.' }
    ];

    const projectList = document.getElementById('project-list');

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;
        projectList.appendChild(projectItem);
    });
});
