const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// Stampo le mie icone
const iconContainer = document.querySelector(".container");
stampaIcon(icons);

function stampaIcon(arr){
	iconContainer.innerHTML = "";
  for(let singolIcon of arr){
    stampaIcons(singolIcon)
  }

}

function stampaIcons(singolIcon){

  let divStampa = iconContainer.innerHTML;
  const {name, prefix, color} = singolIcon;
	
  divStampa += `
	<div class="icon-card">
		<i class="fa-solid ${prefix + name} ${color}"></i>
		<p>${name}</p>
	</div>
  `;

  iconContainer.innerHTML = divStampa;
}

// Uso il filter per differenziare i tipi per il select creando 3 const differenti
const animal = icons.filter( (el) => el.type === "animal");
const vegetable = icons.filter( (el) => el.type === "vegetable");
const user = icons.filter( (el) => el.type === "user");

console.log(animal);
console.log(vegetable);
console.log(user);

const main = document.querySelector("main");
document.getElementById("vai").addEventListener("click", play);

function play(){
  const typeSelect = document.getElementById("type-select").value;
  console.log(typeSelect);
  const arrayTot = [icons,animal,vegetable,user];
  const arraySelect = arrayTot[typeSelect];
	stampaIcon(arraySelect);
}
