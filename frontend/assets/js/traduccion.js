document.addEventListener("DOMContentLoaded", function () {
    const languageSwitcher = document.querySelector(".language-switcher");
    if (!languageSwitcher) {
        console.error("No se encontró el contenedor del selector de idioma.");
        return;
    }

    const languages = {
        es: "Spanish", af: "Afrikaans", sq: "Albanian", am: "Amharic", ar: "Arabic", hy: "Armenian", az: "Azerbaijani",
        eu: "Basque", be: "Belarusian", bn: "Bengali", bs: "Bosnian", bg: "Bulgarian", ca: "Catalan",
        ceb: "Cebuano", ny: "Chichewa", zh: "Chinese", co: "Corsican", hr: "Croatian", cs: "Czech",
        da: "Danish", nl: "Dutch", en: "English", eo: "Esperanto", et: "Estonian", tl: "Filipino",
        fi: "Finnish", fr: "French", fy: "Frisian", gl: "Galician", ka: "Georgian", de: "German",
        el: "Greek", gu: "Gujarati", ht: "Haitian Creole", ha: "Hausa", haw: "Hawaiian", he: "Hebrew",
        hi: "Hindi", hmn: "Hmong", hu: "Hungarian", is: "Icelandic", ig: "Igbo", id: "Indonesian",
        ga: "Irish", it: "Italian", ja: "Japanese", jw: "Javanese", kn: "Kannada", kk: "Kazakh",
        km: "Khmer", ko: "Korean", ku: "Kurdish", ky: "Kyrgyz", lo: "Lao", la: "Latin",
        lv: "Latvian", lt: "Lithuanian", lb: "Luxembourgish", mk: "Macedonian", mg: "Malagasy", ms: "Malay",
        ml: "Malayalam", mt: "Maltese", mi: "Maori", mr: "Marathi", mn: "Mongolian",
        ne: "Nepali", no: "Norwegian", or: "Odia", ps: "Pashto", fa: "Persian", pl: "Polish",
        pt: "Portuguese", pa: "Punjabi", ro: "Romanian", ru: "Russian", sm: "Samoan", gd: "Scots Gaelic",
        sr: "Serbian", st: "Sesotho", sn: "Shona", sd: "Sindhi", si: "Sinhala", sk: "Slovak",
        sl: "Slovenian", so: "Somali", su: "Sundanese", sw: "Swahili", sv: "Swedish",
        tg: "Tajik", ta: "Tamil", te: "Telugu", th: "Thai", tr: "Turkish", uk: "Ukrainian",
        ur: "Urdu", ug: "Uyghur", uz: "Uzbek", vi: "Vietnamese", cy: "Welsh", xh: "Xhosa",
        yi: "Yiddish", yo: "Yoruba", zu: "Zulu"
    };

    const languageSelect = document.createElement("select");
    languageSelect.id = "language-select";
    
    Object.keys(languages).forEach(lang => {
        const option = document.createElement("option");
        option.value = lang;
        option.textContent = languages[lang];
        languageSelect.appendChild(option);
    });
    
    languageSwitcher.innerHTML = "";
    languageSwitcher.appendChild(languageSelect);
    
    languageSelect.addEventListener("change", function () {
        translatePage(this.value);
    });
});

function translatePage(targetLang) {
    const elements = document.querySelectorAll("body *:not(script):not(style):not(select):not(option)");
    
    elements.forEach(el => {
        el.childNodes.forEach(node => {
            if (node.nodeType === 3 && node.textContent.trim() !== "") {
                const originalText = node.textContent.trim();
                
                fetch(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(originalText)}`)
                    .then(response => response.json())
                    .then(data => {
                        if (data && data[0] && data[0][0]) {
                            node.textContent = data[0][0][0];
                        }
                    })
                    .catch(error => console.error("Error en la traducción:", error));
            }
        });
    });
}
