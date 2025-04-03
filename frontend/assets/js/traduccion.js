document.addEventListener("DOMContentLoaded", function () {
    const languageSwitcher = document.querySelector(".language-switcher");
    if (!languageSwitcher) {
        console.error("No se encontró el contenedor del selector de idioma.");
        return;
    }

    const languages = {
        zh: "Chinese",
        en: "English",
        hi: "Hindi",
        ar: "Arabic",
        bn: "Bengali",
        pt: "Portuguese",
        ru: "Russian",
        ja: "Japanese",
        de: "German",
        it: "Italian",
        fr: "French"
    };

    const languageSelect = document.createElement("select");
    languageSelect.id = "language-select";
    
    const defaultOption = document.createElement("option");
    defaultOption.value = "original";
    defaultOption.textContent = "Español";
    languageSelect.appendChild(defaultOption);
    
    Object.keys(languages).forEach(lang => {
        const option = document.createElement("option");
        option.value = lang;
        option.textContent = languages[lang];
        languageSelect.appendChild(option);
    });
    
    languageSwitcher.innerHTML = "";
    languageSwitcher.appendChild(languageSelect);
    
    languageSelect.addEventListener("change", function () {
        if (this.value === "original") {
            restoreOriginalText();
        } else {
            translatePage(this.value);
        }
    });
});

const translationCache = new Map();
const originalTexts = new Map();

function translatePage(targetLang) {
    const elements = document.querySelectorAll("body *:not(script):not(style):not(select):not(option)");

    elements.forEach(el => {
        el.childNodes.forEach(node => {
            if (node.nodeType === 3 && node.textContent.trim() !== "") {
                if (!originalTexts.has(node)) {
                    originalTexts.set(node, node.textContent);
                }
                
                const originalText = originalTexts.get(node);
                
                if (translationCache.has(originalText + targetLang)) {
                    node.textContent = translationCache.get(originalText + targetLang);
                } else {
                    fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(originalText)}`)
                        .then(response => response.json())
                        .then(data => {
                            if (data && data[0] && data[0][0]) {
                                const translatedText = data[0][0][0];
                                translationCache.set(originalText + targetLang, translatedText);
                                const leadingSpace = originalText.match(/^\s*/)[0];
                                const trailingSpace = originalText.match(/\s*$/)[0];
                                node.textContent = leadingSpace + translatedText + trailingSpace;
                            }
                        })
                        .catch(error => console.error("Error en la traducción:", error));
                }
            }
        });
    });
}

function restoreOriginalText() {
    originalTexts.forEach((original, node) => {
        if (node.nodeType === 3) {
            node.textContent = original; 
        }
    });
}

const languageMenu = document.getElementById('language-menu');
const languageArrow = document.querySelector('.language-arrow');

if (languageMenu) {
    languageMenu.addEventListener('click', function() {
        languageMenu.classList.toggle('active');
    });
}
