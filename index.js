const url=" https://pokeapi.co/api/v2/pokemon/";
const card =document.querySelector("#card");
const btn=document.querySelector("#generate-btn");

const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
  };

btn.addEventListener("click",()=>{
    let id=Math.floor(Math.random()*150)+1;
    
    let fixedurl=url+id;

    return getpokemon(fixedurl);
        // return showpokemon(data);
});

const getpokemon=async(fixedurl)=>{
    const response=await fetch(fixedurl);
    const data=await response.json();
    console.log(data);
    return showpokemon(data);
}

const showpokemon=(data)=>{
    card.innerHTML=`
    <div class="hp">
               <span>HP</span> ${data.stats[0].base_stat}
            </div>
                <img src="${data.sprites.back_shiny}" alt="" >
            <div class="heading">
                ${data.name}
            </div>
            <div id="property">
            </div>
            <div class="levels">
                <div class="attacklevel">
                    <div>${data.stats[1].base_stat}</div>
                    <span>Attack</span>
                </div>
                <div class="defenselevel">
                    <div>${data.stats[2].base_stat}</div>
                    <span>Defense</span>
                </div>
                <div class="speedlevel">
                    <div>${data.stats[3].base_stat}</div>
                    <span>Speed</span>
                </div>
            </div>
    `;
    const themecolor=typeColor[data.types[0].type.name];
    setstylebackground(themecolor);
    appendtypes(data.types,themecolor);
}

let appendtypes=(data,themecolor)=>{
    data.forEach((element) => {
        let div=document.createElement("DIV");
        div.textContent=element.type.name;
        document.querySelector("#property").appendChild(div);

        div.style.backgroundColor=`${themecolor}`;
    });

}

setstylebackground =(themecolor)=>{
        card.style.background= `radial-gradient(circle at 50% 0%,${themecolor} 40%,#ffffff 0%)`;
}

window.addEventListener("load",()=>{
    let id=Math.floor(Math.random()*150)+1;
    let fixedurl=url+id;
    return getpokemon(fixedurl);
})
