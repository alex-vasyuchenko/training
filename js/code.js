function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
}

document.getElementById("subscribe-form").onsubmit = function(){
    const email = document.getElementById("email").value;
    const valid = isEmail(email);
    
    if (!valid) {
        document.getElementById("email").classList.add('email-error');
        document.querySelector(".email-error-text").style.display = 'block';
    }

    return valid;
};

function showMenu() {
    document.querySelector(".mobile-menu").style.display = 'block';
}

function hideMenu() {
    document.querySelector(".mobile-menu").style.display = 'none';
}

document.querySelector(".menu-button").onclick = showMenu;
document.querySelector(".close-menu").onclick = hideMenu;

document.querySelectorAll(".mobile-menu-content a").forEach(function(el){
    el.onclick = hideMenu;
})
