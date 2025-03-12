document.addEventListener('DOMContentLoaded', function() {
    // Menu Dropdown Logic
    const profileButton = document.querySelector('.profile-button');
    const menuDropdown = document.querySelector('.menu-dropdown');
    const overlay = document.querySelector('.overlay');

    profileButton.addEventListener('click', function(event) {
        menuDropdown.classList.toggle('show');
        overlay.style.display = menuDropdown.classList.contains('show') ? 'block' : 'none';
        event.stopPropagation(); // Prevent event bubbling
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('.profile-button') && menuDropdown.classList.contains('show')) {
            menuDropdown.classList.remove('show');
            overlay.style.display = 'none';
        }
    });

    // "Show More" Buttons Logic
    const showMoreButtons = document.querySelectorAll('.show-more');

    showMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const sectionId = this.dataset.section;
            const content = document.getElementById(sectionId + '-content');

            if (content) {
                content.classList.toggle('active');
                overlay.style.display = content.classList.contains('active') ? 'block' : 'none';
            }
        });
    });

    // Overlay Logic (for "Show More" content)
    overlay.addEventListener('click', function() {
        const activeContent = document.querySelector('.hidden-content.active');
        if (activeContent) {
            activeContent.classList.remove('active');
            this.style.display = 'none';
        }
    });

});