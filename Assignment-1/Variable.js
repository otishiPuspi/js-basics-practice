let isStudent =document.querySelector 
('input[name="status"]:checked')?.value;
console.log(isStudent);
document.getElementById("btn").onclick=function(){
  let username;
  let age;
  let hobbies;
  let address;
  username=document.getElementById("username").value;
  console.log(username);
  age=document.getElementById("age").value;
  console.log(age);
  document.getElementById("title").innerHTML=`Welcome ${username}`;
    document.getElementById("Age").innerHTML=`Your age is ${age}`;
    hobbies=document.getElementById("hobbies").value;
    console.log(hobbies);
    document.getElementById("Hobbies").innerHTML=`Your hobbies are ${hobbies}`;
    address=document.getElementById("address").value;
    console.log(address);
    document.getElementById("Address").innerHTML=`Your address is ${address}`;
  
}

let name="Otishi Islam Puspi";
let age=22;
let IsStudent= true;
let hobbies =["Learning new things✨","Drawing 🎨","Travelling 🏞","Photographyies 📸"];
let myAddress={Street:"Board Bazar", City:"Gazipur",Country:"Bangladesh"};

console.log("About Me: 💁‍♀️");

console.log(         );
console.log("My name is:",name);
console.log("Age:",age);
console.log("Am i a student?:",IsStudent);
console.log("My Hobbies Are:",hobbies);
console.log("My first hobby is:", hobbies[0]);
console.log("My second hobby is:", hobbies[1]);
console.log("My third hobby is:", hobbies[2]);
console.log("My fourth hobby is:", hobbies[3]);
console.log("My Address:",myAddress);
console.log("Street:",myAddress.Street);
console.log("City:",myAddress.City);
console.log("Country:",myAddress.Country);


age += 5;
console.log("Age after 5 years:",age);

hobbies.push("Baking 🍰");
console.log("New hobby:",hobbies);

