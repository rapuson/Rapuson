function sendEmail(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Create a mailto link
    const mailtoLink = `mailto:eyelayareayen@gmail.com?subject=Contact from ${fullName}&body=Name: ${fullName}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;

    // Open the user's email client
    window.location.href = mailtoLink;

    // Optionally, reset the form
    document.getElementById('contactForm').reset();
}
