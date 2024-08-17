document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');

    searchIcon.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for: ${query}`);
            // Implement actual search logic here
        } else {
            alert('Please enter a search term.');
        }
    });

    // Additional interactive functionalities can be added here
});