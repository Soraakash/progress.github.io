var navLinks=document.getElementById("navLinks")

function showmenu(){
    navLinks.style.right="0";
}
function hidemenu(){
    navLinks.style.right="-200px";
}

const totop=document.getElementById("totop")

totop.addEventListener("click",function (){

    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"

    });
});