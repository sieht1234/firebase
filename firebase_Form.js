

let database = firebase.database();
var playersRef = database.ref ("players/john/");
var namep = database.ref("players/john/");
var age;
var number;
var realName;
var name1;
var age1;
var number1;
var nameinp;
var ageinp;
var numberinp;

let button;
var saveButton;
var goUp;
var createButton;
var addplayer;
var NameInput;
var player;


function preload(){



}

function setup() {
   createCanvas(640, 480); 
   
   button = createButton('hold');
   button.position(828, 465);
   button.mousePressed(goUp);
   add = createButton('tilføj');
   add.mousePressed(addplayer);
 
   nameinp = createInput('name');
    nameinp.input(NameInput);
   
   ageinp = createInput('age');
    ageinp.input(AgeInput);
   
   numberinp = createInput('number');
    numberinp.input(NumberInput);
    
    
   button = createButton('add');
   button.mousePressed(addPerson);
    
   playersRef.set({
     number: 10,
     age: 15
   });
   
   //måske skal du lave nogle kasser i html (spørg johan)
   
   namep.on("value", function(snapshot) {
     console.log(snapshot.val());
     var name = snapshot.val();
     age = name.age;
     number = name.number;
     realname = snapshot.key;
     },
     function (error) {
       console.log("Error: " + error.code);
     });
     
  
}


function addPerson() {
  
  var obj = {number: null, age: null};
  obj.number = numberinp.value();
  obj.age = ageinp.value();
  
  database.ref("players/"+nameinp.value()+"/").set(obj);
}


function draw() {
 background(255);
 
 text(nameinp+ " is number "+numberinp+" and is "+ageinp+" years old", width/2, height/2);
 
 
 sel = createSelect();
     sel.position(10, 10);
     sel.changed(mySelectEvent);

}
