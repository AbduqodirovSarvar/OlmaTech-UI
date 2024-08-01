import { OlmaTechData } from './api.js';

export async function renderContactSection() {
  try {
    if (!OlmaTechData) {
      throw new Error('OlmaTechData is not initialized');
    }

    const contactData = OlmaTechData.contacts;

    const phoneLinkElement = document.getElementById('contact-phone-number');
    const footerPhoneLinkElement = document.getElementById('footer-phone-link');
    const telegramLinkElement = document.getElementById('contact-telegram-link');
    const websiteLinkElement = document.getElementById('contact-website-link');
    const footerEmailLinkElement = document.getElementById('footer-email-link');
    const footerFacebookLinkElement = document.getElementById('footer-facebook-link');
    const footerInstagramLinkElement = document.getElementById('footer-instagram-link');
    const footerTwitterLinkElement = document.getElementById('footer-twitter-link');

    const phoneData = contactData.find(contact => contact.name.name === "Phone");
    const telegramData = contactData.find(contact => contact.name.name === "Telegram");
    const websiteData = contactData.find(contact => contact.name.name === "Website");
    const emailData = contactData.find(contact => contact.name.name === "Email");
    const facebookData = contactData.find(contact => contact.name.name === "Facebook");
    const instagramData = contactData.find(contact => contact.name.name === "Instagram");
    const twitterData = contactData.find(contact => contact.name.name === "Twitter");

    if (phoneData && phoneLinkElement) {
        phoneLinkElement.textContent = phoneData.link;
        phoneLinkElement.href = `tel://${phoneData.link}`;
        if(footerPhoneLinkElement){
          footerPhoneLinkElement.href = `tel://${phoneData.link}`;
        }
    }

    if (telegramData) {
        telegramLinkElement.textContent = telegramData.link;
        telegramLinkElement.href = telegramData.link;
    }

    if (websiteData) {
        websiteLinkElement.textContent = websiteData.link;
        websiteLinkElement.href = websiteData.link;
    }

    if(emailData && footerEmailLinkElement) {
      footerEmailLinkElement.href = `mailto:${emailData.link}`;
    }

    if(facebookData && footerFacebookLinkElement) {
      footerFacebookLinkElement.href = facebookData.link;
    }

    if(instagramData && footerInstagramLinkElement) {
      footerInstagramLinkElement.href = instagramData.link;
    }

    if(twitterData && footerTwitterLinkElement) {
      footerTwitterLinkElement.href = twitterData.link;
    }

  } catch (error) {
    console.error('Error creating contact section:', error);
    throw error;
  }
}