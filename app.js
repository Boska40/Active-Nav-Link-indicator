let marker=document.querySelector('#marker');

let item=document.querySelectorAll('nav a');

// fonction qui indique l'onglet sur lequel on est
function indicator(e){
    marker.style.left=e.offsetLeft+'px';
    marker.style.Width=e.offsetWidth+'px';
}

item.forEach(link=>{
    link.addEventListener('click', (e)=>{
        indicator(e.target);
    })
})