export function menu() {
    
    const contentDiv = document.querySelector('#content');
    contentDiv.replaceChildren()

    const heading = document.createElement("h1");
    heading.textContent = "Welcome to Jazz & Bar Pizza Parlor";
    heading.classList.add("landing-title");
    contentDiv.appendChild(heading);

    const chickenSaurus = document.createElement('img');
    chickenSaurus.classList.add("image");
    chickenSaurus.src = chickenPizza
    chickenSaurus.alt = "chickensaurus";
    contentDiv.appendChild(chickenSaurus);

    const para1ChickenSaurus = document.createElement('p');
    para1ChickenSaurus.classList.add("menu-copy");
    para1ChickenSaurus.textContent = "Meaty goodness with up to 67% more roasted chicken, chicken pepperoni and mushrooms on smoky BBQ sauce!";
    contentDiv.appendChild(para1ChickenSaurus)

    const prawnSensation = document.createElement('img');
    prawnSensation.classList.add("image");
    prawnSensation.src = prawnPizza
    prawnSensation.alt = "chickensaurus";
    contentDiv.appendChild(prawnSensation);

    const para1prawnSensation = document.createElement('p');
    para1prawnSensation.classList.add("menu-copy");
    para1prawnSensation.textContent = "Loaded with 20% more herb-marinated prawns and 100% more imported Belgian spinach. Shrimply sensational!";
    contentDiv.appendChild(para1prawnSensation)
}