document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu_bar');
    const nav_Links = document.getElementById('navLinks');

    function toggleNavLinks() {

        if (menuIcon.style.display === 'inline') {

            nav_Links.style.display = 'none'; 
        } 
        
        else {
            nav_Links.style.display = 'inline';
        }
    }

    menuIcon.addEventListener('click', toggleNavLinks);
}
);
