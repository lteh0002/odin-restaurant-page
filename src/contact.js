export function contact() {
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren()

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Jazz & Bar Pizza Parlor";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const phoneImage = document.createElement("img")
    phoneImage.classList.add("image")
    phoneImage.src = "../src/assets/contactus.jpeg"
    phoneImage.alt = "image of phone"
    contentDiv.appendChild(phoneImage)

    const para1PhoneImage = document.createElement("p")
    para1PhoneImage.classList.add("contact-copy")
    para1PhoneImage.textContent = "Call us for reservation"
    contentDiv.appendChild(para1PhoneImage)

    const email = document.createElement("img")
    email.classList.add("image")
    email.src = "../src/assets/email.jpeg"
    email.alt = "email image"
    contentDiv.appendChild(email)

    const para1Email = document.createElement("p")
    para1Email.classList.add("contact-copy")
    para1Email.textContent = "Email us for reservation"
    contentDiv.appendChild(para1Email)
}