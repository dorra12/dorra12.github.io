var loadingPage = document.getElementById("loading-page");
var mainContent = document.getElementById("main-content");

window.addEventListener("load", function() {
    loadingPage.style.display = "none";
    mainContent.style.display = "block";
});