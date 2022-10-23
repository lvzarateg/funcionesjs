//hola
    alert("Hola Instructor Jhonathan Espitia");

//año
function año(){
    let año = prompt("Ingrese su edad")
    let fecha = prompt ("Ingrese año actual")
    let rta = fecha-año;
    alert('Su año de nacimiento es' +rta)
}

//validar
    function validar (a,b){
        let result=0;
        result=a+b;
        console.log(result);
 }

//suma
    function suma(){
        let n1,n2,suma;
            n1 = parseInt(prompt('Ingresar numero 1'));
            n2 = parseInt(prompt('Ingresar numero 2'));
            resul=suma = n1 + n2;
        alert('la suma es' +suma);
    }

//resta
function division(){
    let num1,num2,division;
        num1 = parseInt(prompt('Ingresar un numero'));
        num2 = parseInt(prompt('Ingresar otro numero'));
        division = num1 / num2;
    alert('la division es' + division);
}

//multiplicacion
function multiplica(){
    let numero1,numero2,multiplica;
        numero1 = parseInt(prompt('Ingresar numero '));
        numero2 = parseInt(prompt('Ingresar otro numero'));
        multiplica = numero1 * numero2;
    alert('la multiplicacion es' + multiplica);
}

//lista
function lista(){
    let o1,o2,o3,o4,o5,o6,o7,o8,o9,o10;
        o1 = prompt('Ingrese un objeto 1');
        o2 = prompt('Ingrese un objeto 2');
        o3 = prompt('Ingrese un objeto 3');
        o4 = prompt('Ingrese un objeto 4');
        o5 = prompt('Ingrese un objeto 5');
        o6 = prompt('Ingrese un objeto 6');
        o7 = prompt('Ingrese un objeto 7');
        o8 = prompt('Ingrese un objeto 8');
        o9 = prompt('Ingrese un objeto 9');
        o10 = prompt('Ingrese un objeto 10');
        
    alert(`sus objetos son ${o1}, ${o2}, ${o3}, ${o4}, ${o5}, ${o6}, ${o7}, ${o8}, ${o9}, ${o10}`)
}

//propiedad
function propiedad() {
    document.getElementById("estilo").style.background = "blue";
}
    
    

//Año, dia, mes, hora
function tiempo(){
    var d = new Date()
    let año=d.getFullYear();
    alert(`el año actual es ${año}`);

    var  hoy = new Date();
    var m = hoy.getMonth() + 1;
    let mes = (m < 10) ? '0' + m : m;
    alert(`el mes es ${mes}`); 

    var d = new Date();
    let dia=d.getDate();
    alert(`el dia actual  es ${dia}`);

    var d = new Date();
    let hora=d.getHours();
    alert(`la hora actual es ${hora}`);
}

//promedio
function promedio(){
    let num1, num2, num3, num4, num5, resul;
    num1 = parseInt(prompt('Ingresar numero 1'));
    num2 = parseInt(prompt('Ingresar numero 2'));
    num3 = parseInt(prompt('Ingresar numero 3'));
    num4 = parseInt(prompt('Ingresar numero 4'));
    num5 = parseInt(prompt('Ingresar numero 5'));

    resul = (num1+num2+num3+num4+num5)/5;
    alert (`El promedio es` +resul)
}

//inyectar
function inyectar(){
    let resp=document.getElementById("img");
    resp.innerHTML=`<center><img src="bob.jpeg"></center>`;
}