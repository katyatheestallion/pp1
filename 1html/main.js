function togglePastLab() {
    var pastLabs = document.getElementById("pastLabs");
    if (pastLabs.classList.contains("hidden")) {
        pastLabs.classList.remove("hidden");
    } else {
        pastLabs.classList.add("hidden");
    }
}