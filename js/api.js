export const baseApiUrl = 'https://test.api.olmatech.uz:4443/api';
export let OlmaTechData = null;

export async function fetchAllData() {
  document.getElementById('loader').style.display = 'block';
  try {
    const response = await fetch(`${baseApiUrl}/Common`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  } finally {
    document.getElementById('loader').style.display = 'none';
  }
}

export async function initializeData() {
  try {
    OlmaTechData = await fetchAllData();
  } catch (error) {
    console.error('Error initializing OlmaTechData:', error);
  }
}
