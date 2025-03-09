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

    removeButton.addEventListener("click", function (event) {
        event.stopPropagation();
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


// Task 4 - Implementing Removal of Employee Cards with Event Bubbling
    //Added remove event listner in task 2

const employeeContainer = document.getElementById("employeeContainer");
employeeContainer.addEventListener("click", function () {
    console.log("Card Clicked");
});
//Stop propagation added to task 2


// Task 5 - Inline Editing of Employee Details

employeeCards.forEach(card => {
    card.addEventListener("dblclick", function () {
        const nameElement = card.querySelector("h2");
        const positionElement = card.querySelector("p");

        const nameInput = document.createElement("input");
        nameInput.value = nameElement.textContent;

        const positionInput = document.createElement("input");
        positionInput.value = positionElement.textContent;

        card.replaceChild(nameInput, nameElement);
        card.replaceChild(positionInput, positionElement);

        const saveButton = document.createElement("button");
        saveButton.textContent = "Save";

        card.appendChild(saveButton);

        saveButton.addEventListener("click", function () {
            nameElement.textContent = nameInput.value;
            positionElement.textContent = positionInput.value;

            card.replaceChild(nameElement, nameInput);
            card.replaceChild(positionElement, positionInput);
            card.removeChild(this);
        })
    });
});

