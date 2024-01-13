const url="https://striveschool-api.herokuapp.com/books"

let card=document.querySelector(".cardContainer") 
let addToCarr=document.querySelector(".carrello")
let eliminaLibro = document.querySelector(".elimina")
let carr=document.querySelector(".sidebar ul")
let cercaLibro=document.querySelector(".search").value
const fetchLibri=()=>{
    fetch(url)
    .then((response)=>{
    return response.json()
}).then((data)=>{
for(libri of data){
    card.innerHTML+=`<div class="card col-4 mx-2 my-2" style="width: 18rem;">
    <img src="${libri.img}" class="card-img-top " alt="...">
    <div class="card-body">
      <h5 class="card-title">${libri.title}</h5>
      <p class="card-text">${"Price : $ " +libri.price}</p>
      <a href="#" class="btn btn-primary carrello"><ion-icon name="cart-outline"></ion-icon></a>
      <a href="#" class="btn btn-primary elimina"><ion-icon name="heart-dislike-outline"></ion-icon></a>
    </div>
    </div>`
    if(libri.title.toLowerCase()===cercaLibro.toLowerCase()){
        carr.innerHTML=`<li>${libri.title} </li>`
    }
}
})
}
fetchLibri()
let compra=function(){
    carr.innerHTML+=`<li>${libri.title}</li>`
}
compra()
addToCarr.addEventListener("click",compra)