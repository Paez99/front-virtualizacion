var nombreInfoPersonal = document.getElementById("nombrepropioInfoPersonal");
var legajoInfoPersonal = document.getElementById("legajoInfoPersonal");
var comisionInfoPersonal = document.getElementById("comisionInfoPersonal");
var edadInfoPersonal = document.getElementById("edadInfoPersonal");
var mailInfoPersonal = document.getElementById("mailInfoPersonal");
var imgPerfil = document.getElementById("imgPerfil");
var copyright = document.getElementById("copyright");

async function buscarAlumno(){
    const datospersonales = await fetch('http://localhost:3000/alumno/1').then(res => {return res.json() });
    datos = datospersonales[0];
    console.log(datospersonales);
    
    nombreInfoPersonal.innerText =  datos['apellido'] + ', ' + datos['nombre'];
    legajoInfoPersonal.innerText =  datos['legajo'];
    comisionInfoPersonal.innerText =  datos['comision'];
    edadInfoPersonal.innerText =  datos['edad'];
    mailInfoPersonal.innerText =  datos['email'];
    copyright.innerText = 'aa';
}

async function buscarTrabajoFinal(){
    const trabajofinal = await fetch('http://localhost:3000/trabajofinal/1').then(res => { return res.json() });
    console.log(trabajofinal);
}

buscarAlumno();
buscarTrabajoFinal();
