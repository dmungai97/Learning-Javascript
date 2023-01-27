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

//************************************************ */
///DOM MANIPULATION////
//getelementbyid
const title=document.getElementById('main-heading');
console.log(title);

//getelementbyclassname

const listItem =document.getElementsByClassName('list-items');
console.log(listItem);//returns in array form

//getelementbytagname
const lists =document.getElementsByTagName('li');
console.log(lists);

//queryselector
const container = document.querySelector('div');//Selects first one
console.log(container);
//queryselector
const contain = document.querySelectorAll('div');//Selects all
console.log(contain);//nodelist

//styling elements
const firstTitle = document.querySelector('#main-heading');
console.log(firstTitle);
firstTitle.style.color='red';
firstTitle.style.backgroundColor='blue'; //.style for changing styles

const listEl = document.querySelectorAll('.list-items');
for(i=0; i<listEl.length; i++){
    listEl[i].style.color ='white';//inlinestyle
}
console.log(listEl);

//Creating elements
const ul = document.querySelector('ul');
const li =document.createElement('li');
ul.append(li); //adding li to ul
li.innerText='X-men';//adding the text to the element
li.classList.add('added-list-item');//Adding a class to element
//li.classList.remove('list-items');//removes class
console.log(li.classList.contains('list-items'));//checks if it contains the class.
//li.remove(); Remove the created element

const div =document.querySelector('div');
const p =document.createElement('p');
p.innerText='Added Line';
//Adding elements
div.append(p);
//Modifying attributes
p.setAttribute('id','paragraph');//used for id,adds id to element
//p.removeAttribute('id'); //Removes id from element

//Modify the text
const firstList = document.querySelector('.list-items');
console.log(firstList.innerText);//shows text
console.log(firstList.textContent);//shows how it appears in code
console.log(firstList.innerHTML);//shows code
//
const t = document.querySelector('#main-heading');
console.log(t.getAttribute('id'));

////Traverse The DOM//
//Parent node traversal

let u = document.querySelector('ul');
console.log(u);
console.log(u.parentElement);//Gets parent element
console.log(u.parentElement.parentElement);//Gets Grandparent element, Traversing upwards

let v = document.querySelector('p');
console.log(v);
console.log(v.parentNode);//Gets parent element,Traversing upwards

//Child Node Traversal
const c =document.querySelector('ul');
console.log(c.childNodes);//text is visible before elements,Traversing downward
console.log(c.firstChild);//First child in node
console.log(c.lastChild);//Last child in node
c.childNodes[1].style.backgroundColor='cyan';
console.log(c.children);//select element nodes
console.log(c.firstElementChild);//selects first child in element
console.log(c.lastElementChild);//selects last child in element

///DOM EVENT LISTENERS Container-3
//element.addEventListener("click[Type of event]" ,function,bolean);

const buttonTwo  =document.querySelector('.btn-2');
function alertBtn(){
    alert('This is second button');
};
buttonTwo.addEventListener("click",alertBtn);

const buttonThree  =document.querySelector('.btn-3');
function changeColor(){
    buttonThree.style.backgroundColor='red';
};
buttonThree.addEventListener("mouseover",changeColor);

//Event listeners Container-4

const revealBtn =document.querySelector('.reveal-btn');
const hiddenContent =document.querySelector('.hidden-content');

function revealContent(){
    if(hiddenContent.classList.contains('reveal-btn')){
        hiddenContent.classList.remove('reveal-btn')
    }else{
        hiddenContent.classList.add('reveal-btn')
    }
}
revealBtn.addEventListener('click',revealContent);

