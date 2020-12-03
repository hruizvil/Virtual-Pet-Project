var Pet = {
    "name": "",
    "age": 0,
    'health': 100,
    'hunger': 1,
    'happiness': 100,

    firstName : function () {
        return this.name;
    }
};

let petName = document.getElementById("pet-name");
petName.textContent = "Spike";

// Pet["name"] = window.prompt("What is your name?");
// document.getElementById("pet-name").textContent = Pet["name"];
