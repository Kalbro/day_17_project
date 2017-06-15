// 1. Fetch your users data
// 2. Loop over the data
// 3. Display it in the `.customers` element

var mainContainer = document.querySelector(".customers");

var promise = $.get('https://randomuser.me/api/?results=12');

promise.then(function(data) {
  console.log(data.results);
  for (var i = 0; i < data.results.length; i++) {
    
    var person = data.results[i];


    var customers = document.createElement("div");
    customers.className += "customers";

    var customerContainer = document.querySelector(".customerContainer");

    var smallContainer = document.createElement("smallContainer");
    smallContainer.className += "smallContainer";

    var picture = document.createElement("img");
    picture.setAttribute("src", person.picture.large);

    smallContainer.appendChild(picture);

    var name = document.createElement("p");
    name.className += "name";
    name.textContent = person.name.first +" " + person.name.last;

    smallContainer.appendChild(name);

    var email = document.createElement("div");
    email.className += "email";
    email.textContent = person.email;

    smallContainer.appendChild(email);

    var street = document.createElement("div");
    street.className += "street";
    street.textContent = person.location.street;

    smallContainer.appendChild(street);

    var city = document.createElement("div");
    city.className += "city";
    city.textContent = person.location.city + " " + person.location.state +" "+ person.location.postcode;

    smallContainer.appendChild(city);

    var cell = document.createElement("div");
    cell.className += "cell";
    cell.textContent = person.cell;

    smallContainer.appendChild(cell);

    var dob = document.createElement("div");
    dob.className += "dob";
    dob.textContent = person.dob;
    
    smallContainer.appendChild(dob);

    customerContainer.appendChild(smallContainer);
  }
}) 
promise.catch(function(data) {

});

