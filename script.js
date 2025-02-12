function answer(response) {
    const responseElement = document.getElementById("response");

    if (response === "yes") {
        responseElement.textContent = "Yay! I’m so happy! 💖";
        responseElement.style.color = "#4CAF50";
    } else {
        responseElement.textContent = "Oh no! Maybe next time... 💔";
        responseElement.style.color = "#F44336";
    }
}