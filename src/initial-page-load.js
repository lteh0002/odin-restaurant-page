export function initialPageLoad() {
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren()

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Jazz & Bar Pizza Parlor";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const topImage = document.createElement('img');
    topImage.classList.add("top-image");
    topImage.src = "../src/assets/pizza_parlor.webp";
    topImage.alt = "restaurant image";
    contentDiv.appendChild(topImage);

    const para1 = document.createElement('p');
    para1.classList.add("landing-page-copy");
    para1.textContent = "This is an upscale restaurant that touts its elegance snd spacious dining";
    contentDiv.appendChild(para1)

    const para2 = document.createElement('p');
    para2.classList.add("landing-page-copy");
    para1.textContent = "Attire required for this facility is business casual at a minimum, please!";
    contentDiv.appendChild(para2)

    const para3 = document.createElement('p');
    para3.classList.add("landing-page-copy");
    para3.textContent = "Thanks, Management";
    contentDiv.appendChild(para3)
}