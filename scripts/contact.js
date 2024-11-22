// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

document.addEventListener('DOMContentLoaded', function () {
    const submitButton = document.getElementById('submit-button');
    const contactPage = document.getElementById('contact-page');

    submitButton.addEventListener('click', function () {
        // Clear the existing content
        contactPage.innerHTML = '';

        // Create a new <p> element and set its text and style
        const thankYouMessage = document.createElement('p');
        thankYouMessage.textContent = 'Thank you for your message!';
        thankYouMessage.style.fontSize = '24px';

        // Append the new <p> element to the contact page
        contactPage.appendChild(thankYouMessage);
    });
});
