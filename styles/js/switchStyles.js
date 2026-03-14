document.addEventListener('DOMContentLoaded', function() {
    const stylesheet = document.getElementById('stylesheet');
    


    // Function to switch stylesheet
    function switchStylesheet() {
        if (stylesheet.getAttribute('href') === 'styles/css/charadex.css') {
            stylesheet.setAttribute('href', 'styles/css/windows.css');
            localStorage.setItem('stylesheet', 'styles/css/windows.css');
        } else {
            stylesheet.setAttribute('href', 'styles/css/charadex.css');
            localStorage.setItem('stylesheet', 'styles/css/charadex.css');
        }
    }

    // Event delegation for the button
    document.body.addEventListener('click', function(event) {
        if (event.target.id === 'switchButton') {
            switchStylesheet();
        }
    });

    // Check localStorage for saved preference
    const savedStylesheet = localStorage.getItem('stylesheet');
    if (savedStylesheet) {
        stylesheet.setAttribute('href', savedStylesheet);
    }
});
