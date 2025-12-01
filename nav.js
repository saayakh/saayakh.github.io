// 1. Generate the Navigation Bar
function generateNav() {
    const navHTML = `
        <a href="index.html">Home</a>
        <a href="research.html">Research</a>
        <a href="publications.html">Publications</a>
        <a href="bookshelf.html">Bookshelf</a>
        <a href="useful_links.html">Useful Links</a>
    `;

    const navElement = document.querySelector('nav');
    if (navElement) {
        navElement.innerHTML = navHTML;
        
        // Highlight current page
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const links = navElement.querySelectorAll('a');
        links.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }
}

// 2. Generate the Top-Right Header Icons
function addHeaderIcons() {
    const header = document.querySelector('header');
    
    // Prevent duplicate icons if the script runs twice
    if (!header || header.querySelector('.header-icons')) return;

    // Define your icons here
    const iconHTML = `
        <div class="header-icons">
            <a href="YOUR_LINKEDIN_URL" target="_blank" title="LinkedIn">
                <i class="fab fa-linkedin"></i>
            </a>
            
            <a href="YOUR_SCHOLAR_URL" target="_blank" title="Google Scholar">
                <i class="fas fa-graduation-cap"></i>
            </a>
            
            <a href="mailto:saayakhalder@gmail.com" title="Email Me">
                <i class="fas fa-envelope"></i>
            </a>
        </div>
    `;

    // Inject icons at the top of the header
    header.insertAdjacentHTML('afterbegin', iconHTML);
}

// Run both functions when the page loads
document.addEventListener('DOMContentLoaded', () => {
    generateNav();
    addHeaderIcons();
});
