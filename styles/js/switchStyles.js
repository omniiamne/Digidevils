document.addEventListener("DOMContentLoaded", function () {
    const styleLink = document.getElementById("theme-style");
    const savedTheme = localStorage.getItem("theme") || "charadex";

    
    applyTheme(savedTheme);

    
    document.querySelectorAll("[data-theme]").forEach(btn => {
        btn.addEventListener("click", () => {
            const theme = btn.getAttribute("data-theme");
            applyTheme(theme);
            localStorage.setItem("theme", theme);
        });
    });

    function applyTheme(theme) {
        styleLink.href = `/styles/css/${theme}.css`;
    }
});
