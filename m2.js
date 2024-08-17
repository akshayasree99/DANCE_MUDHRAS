const about=document.querySelector(".about");
about.addEventListener("click",()=>{
     window.location.href ='about-info.html'
})
document.getElementById('search').addEventListener('click', function() {
    var selectedPage = document.getElementById('dance').value;
    if (selectedPage) {
        window.location.href = selectedPage;
    }
});
const box=document.querySelector(".box");
box.addEventListener("click",()=>{
     window.location.href ='main.html'
})