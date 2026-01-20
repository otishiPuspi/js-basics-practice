console.log("//JAVA SCRIPT FUNCTION EXERCISE//");
console.log("     ");

console.log("1.Convert temperature Celsius to Fahrenheit:");
function convertTemperature(celsius) {
  return (celsius * 9/5) + 32;
}
console.log("Temperature in  Celsius 25°C =", convertTemperature(25), "°F in Fahrenheit");
console.log("Temperature in  Celsius 0°C =", convertTemperature(0), "°F in Fahrenheit");

console.log(    );
console.log("................................................");
console.log(    );

console.log("2.Calculate BMI:");
function calculateBMI(weight, height){
    let bmi = weight / (height * height);
    return bmi.toFixed(2);
}

console.log("Weight: 70 kg");
console.log("Height: 1.58 m");
console.log("BMI: ", calculateBMI(70, 1.58));
console.log(    );
console.log("................................................");
console.log(    );

console.log("3.Function to generate username:");
let firstName= "Otishy";
let lastName= "Puspi";
let userName= firstName.toLowerCase() + "_" + lastName.toLowerCase() + "52" ;
console.log("First Name:",firstName);
console.log("Last Name:",lastName);
console.log("Generate username:",userName);

console.log(    );
console.log("................................................");
console.log(    );

console.log("4.Function to Calculate TAX:");
let income=47000;
let tax=0;
if(income <= 10000){
  tax = 0;
}
else if
  (income <= 30000){
  tax = income * 0.10;
}
else if
  (income <= 50000){
    tax = income * 0.20;
  }
else if
  (incopme <= 70000){
    tax = income * 0.30;
  }
else{
  tax = income * 0.50;
}
console.log("Income:",income,"TK");
console.log("TAX:",tax ,"TK");

console.log(    );
console.log("................................................");
console.log(    );

console.log("5.Function to validate Password:")
let password = "Otishy52";
let isStrong = true;

if (password.length < 8) {
    isStrong = false;
    console.log("❌ Password must be at least 8 characters long");
}

if (!/[A-Z]/.test(password)) {
    isStrong = false;
    console.log("❌ Password must contain at least one uppercase letter");
}

if (!/[a-z]/.test(password)) {
    isStrong = false;
    console.log("❌ Password must contain at least one lowercase letter");
}

if (!/[0-9]/.test(password)) {
    isStrong = false;
    console.log("❌ Password must contain at least one number");
}

if (!/[!@#$%^&*]/.test(password)) {
    isStrong = false;
    console.log("❌ Password must contain at least one special character");
}

if (isStrong) {
    console.log("✅ Password is Strong");
}

console.log(    );
console.log("................................................");
console.log(    );



  

