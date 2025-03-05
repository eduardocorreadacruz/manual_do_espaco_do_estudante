document.addEventListener('DOMContentLoaded', function() {
    const showMoreButtons = document.querySelectorAll('.show-more');
    const overlay = document.querySelector('.overlay');

    showMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.dataset.section;
            const content = document.getElementById(sectionId + '-content');

            if (content) {
                content.classList.add('active');
                overlay.style.display = 'block';
            }
        });
    });

    overlay.addEventListener('click', function() {
        const activeContent = document.querySelector('.hidden-content.active');
        if (activeContent) {
            activeContent.classList.remove('active');
            this.style.display = 'none';
        }
    });
});

let profileButton = document.querySelector('.profile-button');
let menuDropdown = document.querySelector('.menu-dropdown');

profileButton.addEventListener('click', () => {
    menuDropdown.classList.toggle('show');
});

window.addEventListener('click', (event) => {
    if (!event.target.matches('.profile-button')) {
        if (menuDropdown.classList.contains('show')) {
            menuDropdown.classList.remove('show');
        }
    }
});

