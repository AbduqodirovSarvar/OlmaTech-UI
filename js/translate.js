import { OlmaTechData, initializeData } from "./api.js";
const languageKey = "olma-tech-language-code";

function updateContent(translations, language) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const value = key.split('.').reduce((obj, i) => obj && obj[i], translations);
        if (value) {
            element.textContent = value;
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
        const key = element.getAttribute('data-i18n-placeholder');
        const text = key.split('.').reduce((obj, i) => obj && obj[i], translations);
        if (text) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = text;
            } else if (element.tagName === 'INPUT' && element.type === 'submit') {
                element.value = text;
            } else {
                element.textContent = text;
            }
        }
    });

    if (!OlmaTechData) {
        console.error('OlmaTechData is not initialized');
        return;
    }
    document.querySelectorAll('[data-api]').forEach(element => {
        const key = element.getAttribute('data-api');
        let value = null;

        const match = key.match(/([a-zA-Z0-9._]+)\[(\d+)\]/);  // Match keys with indices like OlmaTechData.projects.name[0]

        if (match) {
            const baseKey = match[1];
            const index = parseInt(match[2], 10);

            switch (baseKey) {
                case 'OlmaTechData.projects.name':
                    value = OlmaTechData.projects[index]?.name?.[language];
                    break;
                case 'OlmaTechData.projects.description':
                    value = OlmaTechData.projects[index]?.description?.[language];
                    break;
                case 'OlmaTechData.services.name':
                    value = OlmaTechData.services[index]?.name?.[language];
                    break;
                case 'OlmaTechData.services.description':
                    value = OlmaTechData.services[index]?.description?.[language];
                    break;
                case 'OlmaTechData.homes.subtitle':
                    value = OlmaTechData.homes[index]?.subtitle?.[language];
                    break;
                case 'OlmaTechData.homes.description':
                    value = OlmaTechData.homes[index]?.description?.[language];
                    break;
                case 'OlmaTechData.homes.title':
                    value = OlmaTechData.homes[index]?.title?.[language];
                    break;
                case 'OlmaTechData.blogs.title':
                    value = OlmaTechData.blogs[index]?.title?.[language];
                    break;
                case 'OlmaTechData.blogs.description':
                    value = OlmaTechData.blogs[index]?.description?.[language];
                    break;
                case 'OlmaTechData.teams.position':
                    value = OlmaTechData.teams[index]?.position?.[language];
                    break;
                case 'OlmaTechData.teams.firstname':
                    value = OlmaTechData.teams[index]?.firstname?.[language];
                    break;
                case 'OlmaTechData.teams.lastname':
                    value = OlmaTechData.teams[index]?.lastname?.[language];
                    break;
                default:
                    console.log(baseKey, "DEFAULT");
                    break;
            }
        } else {
            switch (key) {
                // About
                case 'OlmaTechData.about.title':
                    value = OlmaTechData.about.title?.[language];
                    break;
                case 'OlmaTechData.about.description':
                    value = OlmaTechData.about.description?.[language];
                    break;
                case 'OlmaTechData.about.descriptionFooter':
                    value = OlmaTechData.about?.descriptionFooter?.[language];
                    break;
                case 'OlmaTechData.about.address':
                    value = OlmaTechData.about.address?.[language];
                    break;
                default:
                    console.log(key, "DEFAULT");
                    break;
            }
        }

        if (value) {
            element.textContent = value;
        }
    });
}


export function setLanguage(language) {
    document.getElementById('loader').style.display = 'block';

    fetch(`/resource/${language}.json`)
        .then(response => response.json())
        .then(translations => {
            updateContent(translations, language);

            const dropdownButton = document.querySelector('#dropdownMenuButton span');
            if (translations['navbar'] && translations['navbar']['language']) {
                dropdownButton.textContent = translations['navbar']['language'];
            }

            localStorage.setItem(languageKey, language);

            document.getElementById('loader').style.display = 'none';
        })
        .catch(error => {
            console.error('Error loading language file:', error);
            document.getElementById('loader').style.display = 'none';
        });
}

window.setLanguage = setLanguage;

document.addEventListener('DOMContentLoaded', async () => {
    try {
        await initializeData();

        const savedLanguage = localStorage.getItem(languageKey) || 'ru';
        setLanguage(savedLanguage);

        document.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                const selectedLanguage = item.getAttribute('onclick').split("'")[1];
                localStorage.setItem(languageKey, selectedLanguage);
                setLanguage(selectedLanguage);
            });
        });
    } catch (error) {
        console.error('Error initializing the application:', error);
    }
});
