// ****** SELECT ITEMS **********
const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-from');
const grocery = document.querySelector('.grocery');
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// edit option
let editElement;
let editFlag = false;
let editID = "";

// ****** EVENT LISTENERS **********
//submit from
form.addEventListener('sumbit',addItem);

// ****** FUNCTIONS **********
function addItem(e){
    e.preventDefault();
    console.log(grocery.value);
    const value = grocery.value;
    const id = new Date().getTime().toString();
    console.log(id);
}
// ****** LOCAL STORAGE **********

// ****** SETUP ITEMS **********