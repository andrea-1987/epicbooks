const url="https://striveschool-api.herokuapp.com/books"

let card=document.querySelector(".cardContainer") 
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
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    </div>`
}
})
}
fetchLibri()
