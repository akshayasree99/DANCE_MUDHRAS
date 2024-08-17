document.addEventListener("DOMContentLoaded", function() {
    const asam = document.querySelector(".asam");
    const image=false;
    if (asam) {
        asam.addEventListener("click", () => {
                const container = document.querySelector(".container");
                if(image)
                {
                    container.innerHTML = "";
                    image = false;
                }
                else{
                    const total = 28;
                for (let i = 1; i <= total; i++) {
                    const div = document.createElement('div');
                    div.className = 'background';
                    div.style.backgroundImage = `url('a${i}.jpg')`;
                    container.appendChild(div);
                    console.log(i);
                }
                image=true;

                }
                
            });
       } 
});
document.addEventListener("DOMContentLoaded", function() {
    const sam = document.querySelector(".sam");
    if (sam) {
        sam.addEventListener("click", () => {
            const container = document.querySelector(".contain");
            const total = 24;
            for (let i = 1; i <= total; i++) {
                const div = document.createElement('div');
                div.className = 'background';
                div.style.backgroundImage = `url('s${i}.jpg')`;
                container.appendChild(div);
                console.log(i);
            }
        });
    } 
});
const back=document.querySelector(".back button");
    back.addEventListener("click",()=>{
        window.location.href = "index.html";
    })