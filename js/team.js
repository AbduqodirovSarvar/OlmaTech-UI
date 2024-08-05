import { OlmaTechData, baseApiUrl } from "./api.js";

const baseFileApiUrl = `${baseApiUrl}/File`;

export async function renderStaffSection() {
    // Check if OlmaTechData.teams exists
    if (!OlmaTechData || !OlmaTechData.teams) {
        console.error('OlmaTechData or OlmaTechData.teams is not defined');
        return;
    }

    const teams = OlmaTechData.teams;

    // Select the section element by ID
    const section = document.getElementById('staff-section');
    if (!section) {
        console.error('Staff section not found');
        return;
    }

    section.className = 'ftco-section';
    
    // Create the container div
    const container = document.createElement('div');
    container.className = 'container';
    
    // Create the row for heading and staff members
    const row = document.createElement('div');
    row.className = 'row justify-content-center pb-5';
    
    // Create the heading section
    const headingCol = document.createElement('div');
    headingCol.className = 'col-md-6 heading-section text-center ftco-animate';
    headingCol.innerHTML = `
        <span class="subheading" data-i18n="about.title">Our Team</span>
        <h2 class="mb-4" data-i18n="about.subtitle">Meet Our Staff</h2>
        <p data-i18n="about.description">We are a team of professionals dedicated to providing the best services.</p>
    `;
    
    // Append headingCol to row
    row.appendChild(headingCol);

    // Create a row for staff members
    const staffRow = document.createElement('div');
    staffRow.className = 'row';
    
    // Declare i here
    let i = 0;

    // Loop through staff data and create staff member columns
    teams.forEach(staffMember => {
        const staffCol = document.createElement('div');
        staffCol.className = 'col-md-6 col-lg-3 ftco-animate';
        staffCol.innerHTML = `
            <div class="staff">
                <div class="img-wrap d-flex align-items-stretch">
                    <div class="img align-self-stretch" style="background-image: url(${baseFileApiUrl}/${staffMember.photo});"></div>
                </div>
                <div class="text d-flex align-items-center pt-3 text-center">
                    <div>
                        <h3 class="mb-2" data-api="OlmaTechData.teams.firstname[${i}]">${staffMember.firstname}</h3>
                        <h3 class="mb-2" data-api="OlmaTechData.teams.lastname[${i}]">${staffMember.lastname}</h3>
                        <span class="position mb-4" data-api="OlmaTechData.teams.position[${i}]">${staffMember.position}</span>
                        <div class="faded">
                            <ul class="ftco-social text-center">
                                <li class="ftco-animate"><a href="${staffMember.twitter}"><span class="icon-twitter"></span></a></li>
                                <li class="ftco-animate"><a href="${staffMember.twitter}"><span class="icon-facebook"></span></a></li>
                                <li class="ftco-animate"><a href="${staffMember.telegram}"><span class="icon-telegram"></span></a></li>
                                <li class="ftco-animate"><a href="${staffMember.instagram}"><span class="icon-instagram"></span></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `;
        staffRow.appendChild(staffCol);
        i++;
    });

    // Append staffRow to container
    container.appendChild(row);
    container.appendChild(staffRow);

    // Append container to section
    section.appendChild(container);
}
