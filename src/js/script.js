let sortTypeArray = [];
let main = document.querySelector(".main__cards");
let sortLetter = document.querySelector("#sortLetter"),
    search = document.querySelector(".search"),
    sortType = document.querySelector("#type");

// start
function cardRender(arr) {
  arr.forEach((e) => {
    let card = document.createElement("div");
    card.setAttribute(
      "class",
      "bg-white w-[330px] h-[423px] rounded-[20px] border-[2px] border-[#000] border-solid flex flex-col justify-between pt-6 items-center"
    );

     card.innerHTML = `
        
        <img src="${e.img}" alt="">
                  <div class="main__cards--card-body pt-3 w-[100%] h-[40%] border-t-[2px] border-t-black border-t-solid flex justify-between flex-col">
                    <div class="w-[100%] pl-8">
                      <h4 class="text-black text-2xl font-bold">${e.name}</h4>
                      <small class="text-[20px] text-black font-semibold">${e.type}</small>
                      
                    </div>
                    <div class="main__cards--card-body-info flex justify-around items-start w-[100%] h-[40%]">
                      <strong class="font-semibold text-[24px]">${e.weight}</strong>
                      <strong class="font-semibold text-[24px]">${e.avg_spawns} age</strong>
                    </div>
                  </div>
        `;
    main.append(card);
  });
}
cardRender(pokemons);


function renderCards(data) {
  main.innerHTML = null;

  data.forEach((e) => {
    let card = document.createElement("div");
    card.setAttribute(
      "class",
      "bg-white w-[330px] h-[423px] rounded-[20px] border-[2px] border-[#000] border-solid flex flex-col justify-between pt-6 items-center"
    );

    card.innerHTML = `
        
        <img src="${e.img}" alt="">
                  <div class="main__cards--card-body pt-3 w-[100%] h-[40%] border-t-[2px] border-t-black border-t-solid flex justify-between flex-col">
                    <div class="w-[100%] pl-8">
                      <h4 class="text-black text-2xl font-bold">${e.name}</h4>
                      <small class="text-[20px] text-black font-semibold">${e.type}</small>
                      
                    </div>
                    <div class="main__cards--card-body-info flex justify-around items-start w-[100%] h-[40%]">
                      <strong class="font-semibold text-[24px]">${e.weight}</strong>
                      <strong class="font-semibold text-[24px]">${e.avg_spawns} age</strong>
                    </div>
                  </div>
        `;
    main.append(card);
  });
}

function cardRenderSearch(arr) {
  arr.forEach((e) => {
    let card = document.createElement("div");
    card.setAttribute(
      "class",
      "bg-white w-[330px] h-[423px] rounded-[20px] border-[2px] border-[#000] border-solid flex flex-col justify-between pt-6 items-center"
    );

     card.innerHTML = `
        
        <img src="${e.img}" alt="">
                  <div class="main__cards--card-body pt-3 w-[100%] h-[40%] border-t-[2px] border-t-black border-t-solid flex justify-between flex-col">
                    <div class="w-[100%] pl-8">
                      <h4 class="text-black text-2xl font-bold">${e.name}</h4>
                      <small class="text-[20px] text-black font-semibold">${e.type}</small>
                      
                    </div>
                    <div class="main__cards--card-body-info flex justify-around items-start w-[100%] h-[40%]">
                      <strong class="font-semibold text-[24px]">${e.weight}</strong>
                      <strong class="font-semibold text-[24px]">${e.avg_spawns} age</strong>
                    </div>
                  </div>
        `;
    main.append(card);
  });
}

pokemons.forEach((i) => {
  if (!sortTypeArray.includes(i.height)) {
    sortTypeArray.push(i.height);
  }
});

sortTypeArray.forEach((i) => {
  const option = document.createElement("option");
  option.innerHTML = i;
  sortType.append(option);
});
sortType.addEventListener("change", (e) => {
  let sortTypeChange = pokemons.filter((el) => {
    return el.height == e.target.value;
  })
  renderCards(sortTypeChange);
});



sortLetter.addEventListener("change", (e) => {
  if (e.target.value === "A-Z") {
    let sortCardLetter = pokemons.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    console.log("v");
    renderCards(sortCardLetter);
  } 
  else{
    let sortCardLetter = pokemons.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
    console.log("c");
    renderCards(sortCardLetter);
  }
});
search.addEventListener("keyup", e => {
    main.innerHTML = null;
    let filterArr = pokemons.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    cardRenderSearch(filterArr);

})
