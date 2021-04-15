function validardatos() {
    /*comentario*/


//alert("Hola mundo");
//prompt("Ingrese su nombre"); /*solicitar informacion a un usuario*/
//console.log("Hola mundo") La utilizamos para que el usuario no vea los datos, sino que se registre solo en la consola
//document.write("Hola mundo");es para lo que escribamos salga en pantalla

let nombre= document.getElementById('name'). value /*siempre en el let al final se debe agregar .value*/

if(nombre=="Johanna"){
    alert('Bienvenido')
}else{
    alert('No eres bienvenido')
}

let email= document.getElementById('email').value

if(email=="notiene@notiene.com"){
    alert('Bienvenido')
}else{
    alert('Ingrese un correo valido')
}

let edad= document.getElementById('edad').value

if(edad=="30"){
    alert('Bienvenido')
}else{
    alert('Ingrese un valor valido')
}

let telefono= document.getElementById('telefono').value

if(telefono=="3204445569"){
    alert('Bienvenido')
}else{
    alert('Ingrese un valor valido')
}

}