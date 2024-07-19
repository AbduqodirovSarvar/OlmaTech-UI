function createAboutSection(language) {
    let about = OlmaTechData.about;

    const section = document.createElement('section');
    section.className = 'ftco-counter img ftco-section ftco-no-pt ftco-no-pb';
    section.id = 'about-section';

    const container = document.createElement('div');
    container.className = 'container';

    const row = document.createElement('div');
    row.className = 'row d-flex';

    const imgCol = document.createElement('div');
    imgCol.className = 'col-md-6 col-lg-5 d-flex';

    const imgDiv = document.createElement('div');
    imgDiv.className = 'img d-flex align-self-stretch align-items-center';
    imgDiv.style.backgroundImage = `url(${about.photo})`;

    imgCol.appendChild(imgDiv);

    const textCol = document.createElement('div');
    textCol.className = 'col-md-6 col-lg-7 pl-lg-5 py-5';

    const innerDiv = document.createElement('div');
    innerDiv.className = 'py-md-5';

    const headingRow = document.createElement('div');
    headingRow.className = 'row justify-content-start pb-3';

    const headingCol = document.createElement('div');
    headingCol.className = 'col-md-12 heading-section ftco-animate';
    headingCol.innerHTML = `
        <span class="subheading" data-i18n="about.title">${about.title}</span>
        <h2 class="mb-4" style="font-size: 34px; text-transform: capitalize;" data-api="OlmaTechData.about.title">${about.title[language]}</h2>
        <p data-api="OlmaTechData.about.description">${about.description[language]}</p>
    `;

    headingRow.appendChild(headingCol);

    const counterWrap = document.createElement('div');
    counterWrap.className = 'counter-wrap ftco-animate d-flex mt-md-3';

    const counterText = document.createElement('div');
    counterText.className = 'text p-4 bg-primary';
    counterText.innerHTML = `
        <p class="mb-0">
            <span class="number" data-number="${about.experience}">0</span>
            <span>Years of experience</span>
        </p>
    `;

    counterWrap.appendChild(counterText);

    innerDiv.appendChild(headingRow);
    innerDiv.appendChild(counterWrap);

    textCol.appendChild(innerDiv);
    row.appendChild(imgCol);
    row.appendChild(textCol);
    container.appendChild(row);
    section.appendChild(container);

    return section;
}

// Function to render the About section in the DOM
async function renderAboutSection() {
    let language = localStorage.getItem(languageKey);
    const section = createAboutSection(language);
    document.body.appendChild(section);
}

// Call the function to render the section
renderAboutSection();