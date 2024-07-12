function createProjectsSection() {
    // Example data, replace this with your actual API call
    const projects = OlmaTechData.projects;

    // Create the section element
    const section = document.createElement('section');
    section.className = 'ftco-section ftco-project bg-light';
    section.id = 'projects-section';

    // Create the container div
    const container = document.createElement('div');
    container.className = 'container px-md-5';

    // Create the heading row
    const headingRow = document.createElement('div');
    headingRow.className = 'row justify-content-center pb-5';

    // Create the heading column
    const headingCol = document.createElement('div');
    headingCol.className = 'col-md-12 heading-section text-center ftco-animate';
    headingCol.innerHTML = `
        <span class="subheading">Accomplishments</span>
        <h2 class="mb-4">Our Projects</h2>
        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
    `;

    // Append heading column to heading row
    headingRow.appendChild(headingCol);

    // Create the projects row
    const projectsRow = document.createElement('div');
    projectsRow.className = 'row';

    // Create the testimonial column
    const testimonialCol = document.createElement('div');
    testimonialCol.className = 'col-md-12 testimonial';

    // Create the carousel div
    const carousel = document.createElement('div');
    carousel.className = 'carousel-project owl-carousel';

    projects.forEach(item => {
        // Create the item div
        const itemDiv = document.createElement('div');
        itemDiv.className = 'item';

        // Create the project div
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project';

        // Create the img div
        const imgDiv = document.createElement('div');
        imgDiv.className = 'img';

        // Create the image element
        const img = document.createElement('img');
        img.src = item.photo;
        img.className = 'img-fluid';
        img.alt = 'Project Image';

        // Create the text div
        const textDiv = document.createElement('div');
        textDiv.className = 'text px-4';
        textDiv.innerHTML = `
            <h3><a href="#">${item.title}</a></h3>
            <span>${item.category}</span>
        `;

        // Append image and text div to img div
        imgDiv.appendChild(img);
        imgDiv.appendChild(textDiv);

        // Append img div to project div
        projectDiv.appendChild(imgDiv);

        // Append project div to item div
        itemDiv.appendChild(projectDiv);

        // Append item div to carousel
        carousel.appendChild(itemDiv);
    });

    // Append carousel to testimonial column
    testimonialCol.appendChild(carousel);

    // Append testimonial column to projects row
    projectsRow.appendChild(testimonialCol);

    // Append heading row and projects row to container
    container.appendChild(headingRow);
    container.appendChild(projectsRow);

    // Append container to section
    section.appendChild(container);

    return section;
}

// Function to render the section in the DOM
async function renderProjectsSection() {
    const section = createProjectsSection();
    document.body.appendChild(section); // Append to the body or a specific container
}

// Call the function to render the section
renderProjectsSection();