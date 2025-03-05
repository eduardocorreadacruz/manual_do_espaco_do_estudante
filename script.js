// script.js  
document.addEventListener('DOMContentLoaded', function() {  
    const buttons = document.querySelectorAll('.show-more');  

    buttons.forEach(button => {  
        button.addEventListener('click', function() {  
            const sectionId = this.dataset.section;  
            const contentId = sectionId + '-content';  
            const content = document.getElementById(contentId);  

            if (content.style.display === 'none' || content.style.display === '') {  
                content.style.display = 'block';  
                this.textContent = 'Mostrar Menos';  
            } else {  
                content.style.display = 'none';  
                this.textContent = 'Mostrar Mais';  
            }  
        });  
    });  
});  