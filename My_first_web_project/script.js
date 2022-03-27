//alert("hello");
//prompt("what are you", "type");
//var object = ("home");
  // console.log(object);
//var banana = 20;
  //banana *=5
  //console.log(banana);
let person = {
    name : 'dawit',
    age : 20
};
console.log(person);
let personalData= ['name', 'age', 'sex'];
  console.log(personalData);
  console.log()
function famous(name, lastname) {
  console.log( 'hello'+' '+ name +' '+ lastname);
  //document.write('hello'+' '+ name +' '+ lastname)

}
famous('dawit','seid')
famous('yasin','seid')
function  test() {
  document.getElementById('home').innerHTML="we are fucked up";
  document.getElementById('home').style.color="black";
  document.getElementById('home').style.display="block";
  
}

console.log(document)
let name='DAWIT'
function bodyBackGroundColorChange() {
  let color = document.getElementById('select').value; 
  document.getElementById('body').style.backgroundColor=color;
  console.log(color)
  
}
function fuck() {
  let text = document.getElementById('in').value;
    document.getElementById('ok').innerHTML= 'hello'+' '+text + ' '+ 'what can i do for you'
}
function temprature() {
   let degree = document.getElementById('number').value;
    let opration = degree - 273.15 ;
    document.getElementById('change').innerHTML = opration
}
