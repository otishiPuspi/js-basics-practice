console.log("//Create a simple calculator that performs://");
console.log("            ");

console.log('1.Addition:');
let a,b,c;
a=10;
b=5;
c=(a+b);
console.log('Add first number a =',10);
console.log('Add second number b =',5);
console.log('The sum of a and b is, c =',c);
console.log("            ");

console.log(".............................");
console.log("            ");

console.log("2.Subtraction:");
let d,e,f;
d=20;
e=10;
f=(d-e);
console.log("Add first number d =",20);
console.log("Add second number e =",10);
console.log('The sub of d and e is, f =',f);
console.log("            ");
console.log(".............................");
console.log("            ");

console.log("3.Multiplication:");
let g,h,i;
g=5;
h=5;
i=(g*h);
console.log("Add first number g =",5);
console.log("Add second number h =",5);
console.log('The mul of g and h is , i =',i);;
console.log("            ");
console.log(".............................");
console.log("            ");

console.log("4.Division:");
let j,k,l;
j=20;
k=5;
l=(j/k);
console.log("Add first number j =",20);
console.log("Add second number k =",5);
console.log('The div of j and k is ,l  =',l);

console.log("            ");
console.log(".............................");
console.log("            ");

console.log("5.Remainder:");
let m,n,o;
m=11;
n=5;
o=(m%n);
console.log("Add first number m =",11);
console.log("Add second number n =",5);
console.log('The remainder of m and n is ,o  =',o);
console.log("            ");
console.log(".............................");
console.log("            ");

console.log("6.Power:");
let p,q,r;
p=3;
q=3;
r=(p**q);
console.log("Add the base p =",3);
console.log("Add the power q =",3);
console.log('The result of p to the power q is ,r  =',r);
console.log("            ");
console.log(".............................");
console.log("            ");

console.log("7.Compare two numbers:");

let age1 = 18;
let age2 = 40;

let isOlder = age1 > age2;

console.log("My age: ", age1);
console.log("My father age: ", age2);
console.log("Is my age Older than my father Age? : ", isOlder);

if (isOlder) {
    console.log(age1, " My age is ilder than my father age", age2);
} else {
    console.log(age2, " My father age is older than my age ", age1);
}
console.log("            ");
console.log(".............................");
console.log("            ");

console.log("7.Logical Operations:");

let isRaining = false;
let canGoOutside = !isRaining;

console.log("Is it raining? : ", isRaining);
console.log("Can go outside? : ", canGoOutside);

if (canGoOutside) {
    console.log("You can go outside ⛅");
} else {
    console.log("Stay at home 🌧️");
}
console.log("            ")
console.log(".............................");
console.log("            ");



console.log("//Example Function to Create//");
console.log("            ");

console.log("1. Function to Add Two Numbers:");

function add(a, b) {
    let result = a + b;
    return result;
}

console.log("Addition of ", 5, " and ", 10, " is: ", add(5, 10));
console.log("Addition of ", 12, " and ", 8, " is: ", add(12, 8));
console.log("Addition of ", 20, " and ", 15, " is: ", add(20, 15));

console.log("            ")
console.log(".............................");
console.log("            ");

console.log("2.Function to Find Greater Number:");
function isgreater(nums1,nums2){
    if(nums1>nums2){
        return nums1;
    }
    else 
        return nums2 ;
}

console.log("Between " , 30 , "and" , 20 , "Greater is: ", isgreater(30,20));
console.log("Between " , 6 , "and" , 12 , "Greater is: ", isgreater(6,12));
console.log("Between " , 30 , "and" , 25 , "Greater is: ", isgreater(30,25));

console.log("            ")
console.log(".............................");
console.log("            ");

console.log("3.Function to Check Voting Eligibility:");

function canVote(age, isCitizen) {
    if (age < 18) {
        console.log("You are under 18 years old.");
    } 
    else if (isCitizen === false) {
        console.log("You must be a citizen to vote.");
    } 
    else {
        console.log("You are eligible to vote 🎉");
    }
}

function voterDetails(name, age, isCitizen) {
    console.log("Voter Name:", name);
    console.log("Voter Age:", age);
    console.log("Citizen Status:", isCitizen);
    canVote(age, isCitizen);
}

voterDetails("Sara", 19, true);
voterDetails("John", 21, false);
voterDetails("Tom", 17, true);

console.log("            ")
console.log(".............................");
console.log("            ");

console.log("4.Function to Calculate Discount:");

function calculateDiscount(totalAmount, hasCoupon) {
    if (hasCoupon === true && totalAmount >= 500) {
        let discount = totalAmount * 0.15;
        let finalAmount = totalAmount - discount;
        console.log(
            "Festival Offer Applied!\nYou saved",
            discount,
            "taka.\nPay only",
            finalAmount,
            "taka."
        );
    }
    else if (hasCoupon === true && totalAmount < 500) {
        console.log("You have a coupon, but minimum purchase is 500 taka.");
    }
    else {
        console.log("No coupon applied. Pay full amount:", totalAmount, "taka.");
    }
}

console.log("Customer with coupon purchasing 800 Taka");
calculateDiscount(800, true);

console.log("Customer with coupon purchasing 300 Taka");
calculateDiscount(300, true);

console.log("Customer without coupon purchasing 1000 Taka");
calculateDiscount(1000, false);

console.log("            ")
console.log(".............................");
console.log("            ");



