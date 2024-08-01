import { OlmaTechData } from './api.js';

const baseFileApiUrl = 'http://45.130.148.137:8080/api/File';

export async function createHomeSection() {
  try {
    if (!OlmaTechData) {
      throw new Error('OlmaTechData is not initialized');
    }

    const section = document.getElementById('home-section');
    let home = OlmaTechData.homes;

    const h3 = document.createElement('h3');
    h3.className = 'vr';
    h3.textContent = "Welcome to OlmaTech";
    h3.setAttribute('data-i18n', 'home.welcome');

    const homeSlider = document.createElement('div');
    homeSlider.className = 'home-slider js-fullheight owl-carousel';

    let i = 0;

    home.forEach(item => {
      const sliderItem = document.createElement('div');
      sliderItem.className = 'slider-item js-fullheight';
      
      const overlay = document.createElement('div');
      overlay.className = 'overlay';

      const container = document.createElement('div');
      container.className = 'container-fluid p-0';

      const row = document.createElement('div');
      row.className = 'row d-md-flex no-gutters slider-text js-fullheight align-items-center justify-content-end';
      row.setAttribute('data-scrollax-parent', 'true');

      const imgDiv = document.createElement('div');
      imgDiv.className = 'one-third order-md-last img js-fullheight';
      imgDiv.style.backgroundImage = `url(${baseFileApiUrl}/${item.photo})`;

      const imgOverlay = document.createElement('div');
      imgOverlay.className = 'overlay';

      const textDiv = document.createElement('div');
      textDiv.className = 'one-forth d-flex js-fullheight align-items-center ftco-animate';
      textDiv.setAttribute('data-scrollax', 'properties: { translateY: \'70%\' }');

      const text = document.createElement('div');
      text.className = 'text';

      const subheading = document.createElement('span');
      subheading.className = 'subheading';
      // subheading.textContent = item.subtitle["en"];
      subheading.setAttribute('data-api', `OlmaTechData.homes.subtitle[${i}]`);

      const h1 = document.createElement('h1');
      h1.className = 'mb-4 mt-3';
      // h1.innerHTML = item.title["en"];
      h1.setAttribute('data-api', `OlmaTechData.homes.title[${i}]`);

      const p = document.createElement('p');
      // p.textContent = item.description["en"];
      p.setAttribute('data-api', `OlmaTechData.homes.description[${i}]`);

      text.appendChild(subheading);
      text.appendChild(h1);
      text.appendChild(p);

      textDiv.appendChild(text);
      row.appendChild(imgDiv);
      row.appendChild(textDiv);
      container.appendChild(row);
      sliderItem.appendChild(overlay);
      sliderItem.appendChild(container);
      homeSlider.appendChild(sliderItem);
      i++;
    });

    section.appendChild(h3);
    section.appendChild(homeSlider);

    return section;
  } catch (error) {
    console.error('Error creating home section:', error);
    throw error;
  }
}

export async function renderHomeSection() {
  try {
    const section = await createHomeSection();
    return section;
  } catch (error) {
    console.error('Error rendering home section:', error);
  }
}
