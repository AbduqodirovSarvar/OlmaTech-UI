import { baseApiUrl } from "./api.js";
const messageApiUrl = `${baseApiUrl}/Message`;

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
  
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      console.log(event);
  
      let messageFromName = document.getElementById('message-from-name').value;
      let messageFromEmail = document.getElementById('message-from-email').value;
      let messageSubject = document.getElementById('message-subject').value;
      let messageText = document.getElementById('message-text').value;

      const data = {
        name: messageFromName,
        email: messageFromEmail,
        subject: messageSubject,
        text: messageText
      };
  
      try {
        const response = await fetch(messageApiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        });
  
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        const result = await response.json();
        console.log('Form submitted successfully:', result);
        alert('Your message has been sent successfully!');
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    });
  });