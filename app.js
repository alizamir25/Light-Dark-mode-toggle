document.addEventListener('DOMContentLoaded', () => {
    const toggler = document.getElementById('dark-mode-toggler');

    // Check for saved user preference in local storage
    if (localStorage.getItem('dark-mode') === 'enabled') {
        document.body.classList.add('dark-mode');
    }

    toggler.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');

        // Save user preference in local storage
        if (document.body.classList.contains('dark-mode')) {
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});
