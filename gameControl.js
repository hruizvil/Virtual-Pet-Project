// When Health gets to zero, the game ends
function healthCheck(health) {
    return (health <= 0 ? "Your health is 0. Game Over!": null);
}

function feedPet() {
    const feedAmount = Math.floor(Math.random() * 5 + 1);
    Pet["hunger"] -= feedAmount;
}

function clean() {
    const increaseHealth = Math.floor(Math.random() * 5 + 1);
    Pet["health"] += increaseHealth;
}

function play() {
    const increaseHappiness = Math.floor(Math.random() * 5 + 1);
    Pet["happiness"] += increaseHappiness;
}

function displayInteractionBars() {
    document.getElementById("health-bar").value = Pet["health"];
    document.getElementById("hunger-bar").value = Pet["hunger"];
    document.getElementById("happiness-bar").value = Pet["happiness"];
}

function everyPetDay() {
    Pet["age"] += 1;
    Pet["health"] -= 1;
    Pet["hunger"] += 1;
    Pet["happiness"] -= Math.floor(Math.random() * 6);
}

function checkSpriteFeeling() {
    var elem = document.getElementById("sprite-feeling");
    elem.className = "happy";

    if (Pet["happiness"] <= 100 && Pet["happiness"] > 50) {
        elem.className = "happy";
    } else if (Pet["happiness"] <= 50 && Pet["happiness"] > 20) {
        elem.className = "worried";
    } else if (Pet["happiness"] <= 20) {
        elem.className = "crying";
    }
}

function resetGame() {
    location.reload();
}