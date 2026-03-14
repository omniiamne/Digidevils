const includes = document.querySelectorAll('[data-include]');
let loaded = 0;

includes.forEach(el => {
  const file = el.getAttribute('data-include');
  fetch(file)
    .then(response => response.text())
    .then(data => {
      el.innerHTML = data;
      loaded++;

      if (loaded === includes.length) {
        document.dispatchEvent(new Event("includesLoaded"));
      }
    })
    .catch(err => console.error('Error loading include:', err));
});
