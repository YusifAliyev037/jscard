const cars = [
    {
      make: "Toyota",
      model: "Camry",
      year: 2022,
      color: "Silver",
      price: 25000,
      img: "Assets/Img/sedan.png"
    },
    {
      make: "Honda",
      model: "CR-V",
      year: 2023,
      color: "Blue",
      price: 28000,
      img:"Assets/Img/crossovers.png"
    },
    {
      make: "Ford",
      model: "Mustang",
      year: 2021,
      color: "Red",
      price: 35000,
      img:"Assets/Img/spport.png"
    },
    {
      make: "Chevrolet",
      model: "Equinox",
      year: 2022,
      color: "White",
      price: 30000,
      img: "Assets/Img/vinages.png"
    },
    {
      make: "Tesla",
      model: "Model 3",
      year: 2023,
      color: "Black",
      price: 45000,
      img:"Assets/Img/electric.png"
    },
    {
      make: "BMW",
      model: "X5",
      year: 2022,
      color: "Gray",
      price: 50000,
      img:"Assets/Img/suv.png"
    },
    {
      make: "Mercedes-Benz",
      model: "C-Class",
      year: 2023,
      color: "Silver",
      price: 45000,
      img:"Assets/Img/luxury.png"
    },
    {
      make: "Audi",
      model: "A4",
      year: 2022,
      color: "Blue",
      price: 40000,
      img:"Assets/Img/compact.png"
    },
    {
      make: "Nissan",
      model: "Altima",
      year: 2022,
      color: "Green",
      price: 28000,
      img:"Assets/Img/trucks.png"
    },
    {
      make: "Jeep",
      model: "Wrangler",
      year: 2023,
      color: "Yellow",
      price: 35000,
      img:"Assets/Img/hybrid.png"
    }
  ];

// ?  for( model of cars){
//  ?   console.log("------------");
//   ?  console.log(model.make);
//    ? console.log(model.model);
//     ?console.log(model.price);
//   ?}

const cardList = document.querySelector("#cardList");

const newData = cars.map(i =>{
    console.log(i);


    return `
    <div class="card" style="width: 18rem;">
        <img width="200" src="${i.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${i.make}</h5>
          <p class="card-text">${i.model}</p>
          <p class="card-subtext">${i.price}</p>
        </div>
      </div>
    `
}).join("");

// console.log(newData);
cardList.innerHTML = newData;