
document.addEventListener("DOMContentLoaded", function () {
    const currentLanguage = localStorage.getItem("language") || "es";
    loadLanguage(currentLanguage);
});

function toggledrop() {
    document.getElementById("languageDrop").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.language__dropbtn') && !event.target.matches('.flag') && !event.target.matches('.bi-chevron-down')) {
        var dropdowns = document.getElementsByClassName("language__content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

function changeLanguage(lang) {
    localStorage.setItem("language", lang);
    loadLanguage(lang);
    toggledrop();
}

function loadLanguage(lang) {
    const jsonPath = `language/${lang}.json`;

    fetch(jsonPath)
        .then(response => response.json())
        .then(translations => {
            document.querySelectorAll("[data-translate-key]").forEach(element => {
                const key = element.getAttribute("data-translate-key");
                element.textContent = translations[key];
            });

            var flagSrc = (lang === 'es') ? "assets/españa.png" : "assets/ingles.png";
            var altText = (lang === 'es') ? "Español" : "Inglés";
            var btnImg = document.querySelector(".language__dropbtn img");
            btnImg.src = flagSrc;
            btnImg.alt = altText;
        })
        .catch(error => console.error("Error loading translations:", error));
}