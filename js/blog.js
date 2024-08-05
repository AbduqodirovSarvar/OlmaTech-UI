import { OlmaTechData, baseApiUrl } from "./api.js";

const baseFileApiUrl = `${baseApiUrl}/File`;

export async function renderBlogSection() {
    const data = OlmaTechData.blogs;

    const section = document.getElementById('blog-section');

    // Create container div
    const container = document.createElement('div');
    container.className = 'container';

    // Create row for heading
    const headingRow = document.createElement('div');
    headingRow.className = 'row justify-content-center mb-5 pb-5';

    // Create heading column
    const headingCol = document.createElement('div');
    headingCol.className = 'col-md-7 heading-section text-center ftco-animate';
    headingCol.innerHTML = `
        <span class="subheading" data-i18n="blog.title">${data.subheading}</span>
        <h2 class="mb-4" data-i18n="blog.subtitle">${data.heading}</h2>
        <p data-i18n="blog.description">${data.description}</p>
    `;
    
    // Append headingCol to headingRow
    headingRow.appendChild(headingCol);

    // Create row for blog entries
    const blogRow = document.createElement('div');
    blogRow.className = 'row d-flex';
    let i = 0;

    // Loop through blog entries data and create blog entry items
    data.forEach(entry => {
        const col = document.createElement('div');
        col.className = 'col-md-4 d-flex ftco-animate';

        col.innerHTML = `
            <div class="blog-entry justify-content-end">
                <a href="${entry.link}" class="block-20" style="background-image: url('${baseFileApiUrl}/${entry.photo}');"></a>
                <div class="text mt-3 float-right d-block">
                    <div class="d-flex align-items-center pt-2 mb-4 topp">
                        <div class="one mr-2">
                            <span class="day">${entry.date.day}</span>
                        </div>
                        <div class="two">
                            <span class="yr">${entry.date.year}</span>
                            <span class="mos">${entry.date.month}</span>
                        </div>
                    </div>
                    <h3 class="heading"><a data-api="OlmaTechData.blogs.title[${i}]">${entry.title}</a></h3>
                    <p data-api="OlmaTechData.blogs.description[${i}]">${entry.excerpt}</p>
                    <div class="d-flex align-items-center mt-4 meta">
                        <p class="ml-auto mb-0">
                        </p>
                    </div>
                </div>
            </div>
        `;

        blogRow.appendChild(col);
        i++;
    });

    // Append headingRow and blogRow to container
    container.appendChild(headingRow);
    container.appendChild(blogRow);

    // Append container to section
    section.appendChild(container);

    return section;
}
