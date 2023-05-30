// Code for the navigation Button. It makes the navigation section slide out.

const navigationTogglerButton = document.getElementsByClassName("navigation-toggler")[0];
const side = document.getElementsByClassName("side")[0];

navigationTogglerButton.addEventListener("click", () => {
    sideSectionTogglerButton();
})

function sideSectionTogglerButton() {
    side.classList.toggle("open");
    navigationTogglerButton.classList.toggle("open");
}

// Switch to toggle light/dark mode

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);
