function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");

    menu.classList.toggle("open");
    icon.classList.toggle("open");
}






/* SWITCHING BETWEEN STORES */

function switchStores(product) {
    // Hide all products
    for (let i = 1; i <= 8; i++) {
        document.getElementById(`product${i}`).style.display = 'none';
    }

    // Show the selected product
    product.style.display = 'flex';

}

// Change the color of selected product from the menu list

function changeColor(listItem){

    document.getElementById('cameraLenses').style.color = 'black';
    document.getElementById('caps').style.color = 'black';
    document.getElementById('hoodies').style.color = 'black';
    document.getElementById('mugs').style.color = 'black';
    document.getElementById('sweaters').style.color = 'black';
    document.getElementById('sweatpants').style.color = 'black';
    document.getElementById('t_shirts').style.color = 'black';
    document.getElementById('tote_bags').style.color = 'black';

    listItem.style.color = "rgb(186, 172, 126)";
}




window.addEventListener('scroll', function() {
    var element = document.getElementById('products-menu-ul');
    var scrollPosition = window.scrollY;

        // Check if the user has scrolled to a particular position
        if (scrollPosition > 12) {
            element.style.display = 'absolute';
        }
    }
);











