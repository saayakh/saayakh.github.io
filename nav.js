// This function generates the navigation menu
function generateNav() {
    // 1. Define the links in your menu
    // If you want to add 'Contact', you just add one line here!
    const navHTML = `
        <a href="index.html">Home</a>
        <a href="research.html">Research</a>
        <a href="publications.html">Publications</a>
        <a href="bookshelf.html">Bookshelf</a>
    `;

    // 2. Inject this HTML into the <nav> tag
    const navElement = document.querySelector('nav');
    navElement.innerHTML = navHTML;

    // 3. Automatically add the "active" class to the current page
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    
    const links = navElement.querySelectorAll('a');
    links.forEach(link => {
        // If the link's href matches the current page name, highlight it
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

// Run the function as soon as the page loads
document.addEventListener('DOMContentLoaded', generateNav);
