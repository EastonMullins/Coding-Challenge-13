// Task 1 - Creating Base Setup

// On HTML file

// Task 2 - Adding Employee Cards Dyanimcally

function addEmployeeCard(name, position) {
    const employeeContainer = document.getElementById("employeeContainer");

    const employeeCard = document.createElement("div");
    employeeCard.setAttribute("class","employee-card");

    const nameElement = document.createElement("h2");
    nameElement.textContent = name;

    const positionElement = document.createElement("p");
    positionElement.textContent = position;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.classList.add("remove-button");

    removeButton.addEventListener("click", function () {
        employeeContainer.removeChild(employeeCard);
    });

    // Adding Elements to Employee Card

    employeeCard.appendChild(nameElement);
    employeeCard.appendChild(positionElement);
    employeeCard.appendChild(removeButton);

    //Add Card to Container
    
    employeeContainer.appendChild(employeeCard);

}
// Test Cases
addEmployeeCard("Colby Mullins", "Awesome Camper");
addEmployeeCard("Alice Clark", "Cat Farmer");

// Task 3 - Converting NodeLists to Arrays for Bulk Updates

let employeeCards = Array.from(document.querySelectorAll(".employee-card"));

employeeCards.forEach(card => {
    card.style.backgroundColor = "aquamarine";
    card.style.color = "purple";
});
