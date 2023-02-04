console.log("hello");

console.log("Hi");

//NaN -Undefined, no valu and doesnt exist
//null - primitive value, exists but no value,expected absense of value
/////Area of a rectangle
// A = L*W


let l =3;
let w = 4;
let A=l*w;
console.log(A);

const o =6;
console.log(o);

let b=4;
let j;
let nm=b+j;
console.log(nm);


//Operators
let x=0;
let n= x++;//n Will be 0 because x was incremented after it was stored in x
console.log(n);

let r=0;
let z =++r;
console.log(z);//z is one because r is incremented before its assigned

let game={};
game.score=100;
//game instanceof Object;
console.log(game);

///String Methods and properties
let course =" Javascript is Cool  ";
console.log(course);
console.log(course.length);//No of characters including whitespaces
console.log(course.trim());//removes whitespaces at start and end
console.log(course.toUpperCase());
console.log(course.indexOf("J"));//position of a character in a string
console.log(course.slice(0, 10));//Extract specified index position
console.log(course.replace("Cool","bad"));//replaces a word
console.log(course.charAt(1));

let programmer ="David Mungai , A software developer";
console.log(programmer.toUpperCase());
console.log(programmer.slice(0,12));


//////Comparisons
let q="3";
let a="20";
console.log(q*a);//String will be converted to number(20)
console.log(q>a);
console.log(`${q} ${a}`);

let qa="hi";
let aa="zaa";
console.log(qa>aa);//Looks at first character and compares them

let comp = "z";
let comp2 ="a";
console.log(comp>comp2);//Returns false because lowercase a has a greater index in internal encoding table

const letter = "abn";//97
const convert = letter.charCodeAt(0);//Gets character encoding
console.log(convert);
//== loosely strict,convert into a number
//=== more strict
const num1=0;
const stri='0';
const we=0n;
console.log(num1==stri);//string conversion
console.log(num1==we);
console.log(num1===stri);//works with same values otherwise its false

const str1="Hi";
const str2="Hi";
console.log(str1==str2);
console.log(str1===str2);



/////Math
const random =Math.random();

if(random >0.6){
    console.log("Large Number")
}else if(random<0.6){
    console.log("Small Number");
}
console.log(random);


///Prompt
//let pro =prompt("What are you learning?");
//alert(`Am learning ${pro}`);

////Confirm
//let happy = confirm("Are you Happy?");
//if(happy==true){
    //alert("Yes");
//}else{
    //alert("No");
//}





////Type Conversions
let boy = true;

console.log(typeof boy);

let str="123";
console.log(typeof str);
let num=Number(str);
console.log(typeof num);

let word ="Hello";
console.log(typeof word);

let conv=Number("Hello");
console.log(typeof conv);//Will be number  but is undefined
//alert(conv);
const wwe=null;
console.log(typeof wwe);




///Logical operators

//&& -And operator - checks all is true
// || -Or one is true
// ! - Not operator





let time;
let hour;
hour=  "Gentlemen";
time="Afternoon " +hour;
console.log(time);


//////FUNCTIONS*******************////
function areaR(){
    console.log(5*4) ;
}
areaR();


function area(){
    return 5*5;
}
console.log(area());

function math(x){
    return x;
}
let y =math("Manze");
console.log(y);
function dragon(fire){
    return fire +"breath";
}
let degree = dragon("Hot ");
console.log(degree);

function allan(smoke){
    return smoke;
}
let ciggarete = allan("Sportsman");
console.log(ciggarete);

function music(afro){
    return afro;
}
let beats = music("Rema");
console.log(beats);


let naming = 21;
let sum = naming + 2;
console.log(sum);

function double(number){
    return number *2
}

let result = double(3)//store in a variable
console.log(result)

function calculate(sum){
    return sum +8;
}

let calculation = calculate(4);
console.log(calculation)

function me(him){
    return him.toUpperCase();
}

let persona = me("Hello");
console.log(persona)

function zima(man){
    return man;
}

let washa = zima("Kindukulu");
console.log(washa)

function mambo(gan){
    return gan;
}

let gut = mambo(9);
console.log(gut)

let gido ="SDA";
console.log(gido);


function drogo(reptile){
    return reptile
}
let moth = drogo("Fire");


console.log(moth);
function milk(run){
    return run;
}
let white = milk("Tasty");
console.log(white)


function add(min){
return min;
}
let max = add("Masaa");
console.log(max);



/////////////Function
function nine(am){
    return am;
}
let eru = nine("Jimbo");
console.log(eru)

function anto(rent){
    return rent;
}
let arreas = anto("Leta rent message");
console.log(arreas);


let tate =" Masculinity";
function mew(ma){
    return ma + tate;
}//no semicolon on 
let crow =mew("Andrew");
console.log(crow);

////function  expression stored in variable
const speak = function(){
      console.log("Good day");
};//has semicolon
speak();
speak();

const noise =function(){
    console.log("Am Alive");
}
noise();

////function parameters and arguments
const talk = function(name ,time){
    console.log(`good ${time} ${name}`);
};
talk("MArio" ,"Morning");

const sleep = function(ben){
    console.log(`Carson ${ben}`)
};
sleep("Mungai");

const lotta = function(){
    console.log("Sweet");
};
lotta();

const toffee = function(sugar){
    console.log(`Can cause ${sugar}`)
};
toffee("Diabeties");

const drink = function(soda ,juice){
    console.log(`I can drink ${soda} ${juice}`);
}

drink("Fanta and " , "Mango");

const shoes =function(casual,sport){
    console.log(`I wear ${casual} for events and ${sport} for running`)
};
shoes("Vans" , "Nike Vapour");

////Arrow functions
const arrowFunc =()=>{
     console.log("An Arrow function");
};
arrowFunc();

const arrowFunc1 =(a,b)=>{
    console.log(`An Arrow function ${a} ${b}`);
};
arrowFunc1("with","parameters");

const arrowFunc2 =c=>{
    console.log(`An Arrow function with no parantheses in ${c}`);
};
arrowFunc2("single parameter");


const arrowFunc3 =()=> 3*5;//Shortened without return keyword
console.log(arrowFunc3());///

//****** READ ,CHECK ON REST PARAMETERS */






//***************************/

 /////For Loops
 //Initializer or Starting point
 //Condition for when loop should end
 //Incrementor or decrementor || Continues up or down

// i=i+1; i=0+1 ; i=1
// i=i+1; i=1+1 ; 1=2
// i=i+1; i=2+1 ; 1=3
// i=i+1; i=3+1 ; 1=4
// i=i+1; i=4+1 ; 1=5
 for( i =0; i<=5; i++){
    console.log(i);
 }

 for( i =0; i<=10; i+=5){
    console.log(i);
 }

 for( i =0; i<=2; i++){
    console.log("Hello");
 }

 for( i =5;  i > 0; i--){
    console.log("Decrement "+i);
 }



 for( i =0; i<=4; i++){
    console.log("Loop with if "+i);
    if(i===3) break;
 }






// Sum of numbers between 1 and 11
 let total = 0;
 for (i =1; i<11; i++){
     total+=i;
 }
 console.log("The total is " +total);
//Loop through an array
 let fruits = ["Mango","Banana","Apple","Cherry"];
 console.log(fruits[3]);//index of mango
 for(i=0; i<3; i++){
    console.log(fruits[i]);
 }

 let snacks = ["Crisps","Juice","Chocolate","KFC","Biscuits"];
 console.log(snacks[3]);
 for(i=1; i<snacks.length; i++){
    console.log(snacks[i]);
 }

 let watch = ["Mi band","Applewatch","Fitbit","Galaxy Watch","Oraimo","Huawei"];
 //console.log(watch[0]);
for(i=0; i<watch.length; i++){
    console.log(watch[i]);
}
let mouse=["Hp","Logitech","Sandisk"];

for(i=0; i<mouse.length; i++){
    console.log(mouse[i]);
}

//for of loop with arrays
let phone = ["Mi phone","Apple","Fitbit","Galaxy","Oppo","Huawei phone","Redmi"];
//console.log(watch[0]);
for(i of phone) console.log(i);

let album =[3,"Damn","Lucky You","Donda"];
console.log(album[1]);

for(i of album) console.log(i);

let power=["KPLC","Kengen","Solar"];
for(i of power) console.log(i)

 //for in loop through objects

 let data = {
    firstName : "David",
    age: 22,
    lifeState : "Alive"
 }
 console.log(data.age);
 console.log(data["firstName"])

 for(i in data){
    console.log(i);//prints out the property
    console.log(i ,data[i]);//prints out the property and value
 }
 
 let sweet ={
    productName : "Juicy fruit",
    price : 25,
    flavour : "Tropical" 
 }

 //console.log(sweet.flavour);
 for(i in sweet){
    console.log(sweet[i]);
 }


  let date = {
    single : "Yes",
    period: 7,
    state : "Not Active"
 }
console.log(date.period);
for(i in date) console.log(i,date[i])


/////FOR EACH
const animals =["Cat","Dog","Horse","Sheep"];
animals.forEach(i=>{
    console.log(i);
})


///Array Methods
let supers = ["Superman","Batman","Flash","Aquaman"];
console.log(supers.length);
console.log(supers[supers.length-1]);
supers.length=4;//change to two or three
console.log(supers);

console.log(supers.includes('Batman'));//Checks if value is in array
console.log(supers.pop());//Removes last item from Array
console.log(supers.shift());//Removes first item from Array
supers.push("Spider-Man");//Adds item at end of array
console.log(supers);
supers.unshift("Thor");//Adds item at begining of array


let newSupers = supers.concat(['Wolverine','Cyclops','Professor X']);
console.log(newSupers);

console.log(supers.join('|'));//Joins array items to string

let supeers ="Ironman,Hulk,HawkEye";
let supersArray = supeers.split(',');//Converts string to Array
console.log(supersArray);

supers.splice(5,1,'Green Lantern');//replaces an item in array
console.log(supers);

let numArr = [1,2,3,4,5];
const numArr2 = numArr.slice(1,4);//Returns a portion of array
console.log(numArr2);


/////Array Iterator methods
//forEach() - used to loop through elements in array,Cannot be used with other array methods
let heroes = ['Black Mask','Moon-Knight','Shang-Chi','WonderWoman','Black-Panther','Shazam'];
heroes.forEach(
    function(value,index,array){
          console.log(`${value} ,${index} ,${array}`);//Callback function,which the parameter takes value,index and array
    }
);

let her =heroes.forEach(
    function(value,index,array){
          return value;//does not return anything when using return statement in forEach
    }
);
console.log(her);////does not return anything ,undefined

//map() - Transform elements of an array in a new array. Can be used with other array methods
let id = ['Mask','Knight','Chi','Woman','Panther','Shuri'];
let na =[2,4,5];
function uppperCase(word){
    return word.toUpperCase();
}
let upper =id.map(uppperCase);
console.log(upper);
let lowers =na.map(
    function(value){
        return value *6;
    }
);
console.log(lowers);


let digits = [1,2,3];
function mult(re){
    return re *5; //multiply each number by 5
}
let vals = digits.map(mult);//map and multiply each number by 5
console.log(vals);


//filter() - Applies conditional statement,If one of the value is true statement is true otherwise false
let digit = [1,2,3,50,89,32,14,55,33,98,78,64];
let evenNum= digit.filter(
    function(value,index,array){
        return value%2 ===0;
    }
);
console.log(evenNum);

//reduce() - reduce array to a single value,Has 4 parameters takes total, value,index,array in parameter
let number = [1,2,3,50,89,32,14,55,33,98,78,64];
function add(total,value,index,array){
    return total +value;
};
let sums =number.reduce(add,0);
console.log(sums);

///some() -  Returns a boolean statement
let numbers = [1,2,3,50,89,32,14,55,33,98,78,64];
let higherThanTen =numbers.some(
    function(value){
        return value >10;//Checks if there is a value greater than 10
    }
);
console.log(higherThanTen);

//every() - Checks if all values meet the condition otherwise false
let number1 = [1,2,3,50,89,32,14,55,33,98,78,64];
let allhigherThanTen =number1.every(
    function(value){
        return value>10;//checks if each of array values is greater than 10
    }
);
console.log(allhigherThanTen);

//find() - Checks if a certain value is in array
let phones = ["Mi","Apple","Samsung","Galaxy","Oppo","Huawei","Redmi"];

let findPhone= phones.find(
    function(value){
       return value ==="Apple";
    }
);
let finPhone= phones.findIndex(//Returns index position of element
    function(value){
       return value ==="Redmi";
    }
);
console.log(finPhone);

//// Example with all array iterator
const fruit =['Mango','Cherry','Banana','Melon'];
fruit.forEach(
    (value,index,array)=>{
        console.log(value,index);
    }
);
let toUpper =fruit.map(
    function(value){
        return value.toUpperCase();
    }
);
console.log(toUpper);
let fruit1= fruit.every(
    function(fruit){
        return fruit.length>3;
    }
);
console.log(fruit1);

let letters = "cba";
let letter1= letters
.split('')
.reverse()
.join();
console.log(letter1);


////Array methods indepth 2

const companies =[
    {name: "Company One", category:"Finance",start:1981, end:2003},
    {name: "Company Two", category:"Retail",start:1992, end:2008},
    {name: "Company Three", category:"Auto",start:1999, end:2007},
    {name: "Company Four", category:"Retail",start:1987, end:2010},
    {name: "Company Five", category:"Technology",start:1986, end:1996},
    {name: "Company Six", category:"Finance",start:2011, end:2016},
    {name: "Company Seven", category:"Retail",start:1981, end:1989}
];
console.log(companies);

const ages =[16,11,22,33,45,6,76,55,33,22,66,34,76,87];
///forEach - no return
companies.forEach(
    function(company){
        console.log(company);
    }
);

/////filter() - takes value,index,array in parameter
//const ages =[16,11,22,33,45,6,76,55,33,22,66,34,76,87];
let canDrink=[];
for(let i= 0; i<ages.length; i++){
    if(ages[i] >=21){
        canDrink.push(ages[i]);
    }
}
console.log(canDrink);

const canDrunk = ages.filter( value=> value>=21);
console.log(canDrunk);
//filter companies
const retailComp=companies.filter(
    company=> company.category ==="Retail"
    
);
console.log(retailComp);
//filter companies that start in 80s
const eightiesComp= companies.filter(
    (company)=>{
        return company.start>=1980 && company.start<1990;
    }
);
console.log(eightiesComp);

//filter() companies that lasted more than 10 years
const lastTenYrs =  companies.filter(
    function(company){
        return company.end - company.start >=10;
    }
);
console.log(lastTenYrs);

///////map() 
//Create array of company names
const companNames= companies.map(
    function(company){
        return company.name;
    }
);
console.log(companNames);
//map() ages
//const ages =[16,11,22,33,45,6,76,55,33,22,66,34,76,87];
const sqrt = ages
.map((age)=> Math.sqrt(age))
.map((age)=>age *2);
console.log(sqrt);


////Sort() -takes 2values parameter a and b
//Function used to determine the order of the elements.
//sort companies by start year
const sortComp =companies.sort(
    function(a,b){
        if(a.start>b.start){
            return 1;
        }else{
            return -1;
        }
    });

const sortComp1=companies.sort((a,b)=>(a.start>b.start ? 1 : -1));
console.log(sortComp);
///sort ages
//const ages =[16,11,22,33,45,6,76,55,33,22,66,34,76,87];
const sortAges= ages.sort(
    function(a,b){
        return a-b;
    }
);
console.log(sortAges);

/////reduce()
let ageSum =0;
for(i =0; i<ages.length; i++){
    ageSum+=ages[i];
}
console.log(ageSum);
//const ages =[16,11,22,33,45,6,76,55,33,22,66,34,76,87];
const agesSum=ages.reduce(
    function(total,age){
        return total+age;
    }
,0);
console.log(agesSum);

//reduce() total years for companies
const totalYrs = companies.reduce(
    function(total,company){
        return total+ (company.end-company.start);
    }
,0);
console.log(totalYrs);


//////Combine the array methods
//const ages =[16,11,22,33,45,6,76,55,33,22,66,34,76,87];
const combined = ages
.map(age=>age*3)
.filter(age=>age >=40)
.sort((a,b)=>a-b)
.reduce((total,a)=>total+a,0)

console.log(combined);




//************************************************ */
