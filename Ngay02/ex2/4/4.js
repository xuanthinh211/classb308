document.addEventListener("DOMContentLoaded", function () {
    const textToHighlight = document.getElementById("textToHighlight");
    const highlightLink = document.getElementById("highlightLink");

    highlightLink.addEventListener("mouseover", function () {
        highlightBoldWords(textToHighlight);
    });

    highlightLink.addEventListener("mouseout", function () {
        clearHighlight(textToHighlight);
    });

    function highlightBoldWords(element) {
        const words = element.querySelectorAll("strong");
        words.forEach(word => {
            word.classList.add("highlighted");
        });
    }

    function clearHighlight(element) {
        const words = element.querySelectorAll("strong");
        words.forEach(word => {
            word.classList.remove("highlighted");
        });
    }
});
