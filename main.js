//Clase constructora de Maestros
class Maestros {
    constructor(id, name, apellido, materia, mail, contraseña) {
        this.id = id;
        this.name = name;
        this.apellido = apellido;
        this.materia = materia;
        this.mail = mail;
        this.contraseña = contraseña;
    }
}
//Array Maestros
const maestros = [
    new Maestros(1, "Pablo", "Picasso", "Artistica", "pablo@gmail.com", "123456"),
    new Maestros(2, "Charles", "Darwin", "Biologia", "charles@gmail.com", "123456"),
    new Maestros(3, "Lionel", "Scaloni", "Educacion Fisica", "lionel@gmail.com", "123456"),
    new Maestros(4, "Cristobal", "Colon", "Geografia", "cristobal@gmail.com", "123456"),
    new Maestros(5, "Rick", "Harrison", "Historia", "rick@gmail.com", "123456"),
    new Maestros(6, "Emma", "Watson", "Ingles", "emma@gmail.com", "123456"),
    new Maestros(7, "William", "Shakespeare", "Lengua y Literatura", "willy@gmail.com", "123456"),
    new Maestros(8, "Albert", "Einstein", "Matematica", "albert@gmail.com", "123456"),
    new Maestros(9, "Paulo", "Londra", "Musica", "paulo@gmail.com", "123456"),
    new Maestros(9, "Florencia", "Hendel", "Programacion", "flor@gmail.com", "123456"),
]
//Clase constructora de Trimestres
class Trimestres {
    constructor(ntrim, n1, n2, promedio) {
        this.numTrim = ntrim;
        this.nota1 = n1;
        this.nota2 = n2;
        this.promedio = promedio;
    }
}
//Clase constructora de Materias
class Materias {
    constructor(nomMateria) {
        this.nomMateria = nomMateria;
        this.trimestres = [
            new Trimestres("1er Trimestre", "Sin Nota", "Sin Nota", "Sin Nota"),
            new Trimestres("2do Trimestre", "Sin Nota", "Sin Nota", "Sin Nota"),
            new Trimestres("3er Trimestre", "Sin Nota", "Sin Nota", "Sin Nota")
        ];
        this.stateMat = "Sin datos suficientes";
        this.promFinal = "Sin Terminar la cursada";
    }
}
//Clase constructora de Alumnos
class Alumno {
    constructor(id, name, apellido, mail, contraseña) {
        this.id = id;
        this.name = name;
        this.apellido = apellido;
        this.mail = mail;
        this.contraseña = contraseña;
        this.materias = [
            new Materias("Artistica"),
            new Materias("Biologia"),
            new Materias("Educacion Fisica"),
            new Materias("Geografia"),
            new Materias("Historia"),
            new Materias("Ingles"),
            new Materias("Lengua y Literatura"),
            new Materias("Matematica"),
            new Materias("Musica"),
            new Materias("Programacion"),
        ];
    }
}
//Array con nombre de las materias
const materiasName = ["Artistica", "Biologia", "Educacion Fisica", "Geografia", "Historia", "Ingles", "Lengua y Literatura", "Matematica", "Musica", "Programacion"]
//Array de alumnos
const alumnos = [
    new Alumno(001, "Lucas", "Messi", "1", "1"),
    new Alumno(002, "Ana", "Pereira", "ana@gmail.com", "ana"),
    new Alumno(003, "Kevin", "Plucci", "kevin@gmail.com", "kevin"),
    new Alumno(004, "Lucas", "Velazquez", "lucas@gmail.com", "lucas"),
    new Alumno(005, "Alan", "Juarez", "alan@gmail.com", "alan"),
]

//Llama al elemento contain
const contain = document.getElementById("contain");
//Evento de carga para llamar a la funcion logear
window.onload = logear();
//Funcion logear para recopilar datos del select
function logear() {
    const btnLog = document.getElementById("btnIngresar");
    btnLog.onclick = () => {
        const selection = document.getElementById("typePerson");
        let option = selection.options[selection.selectedIndex].value;
        switch (option) {
            case "maestro":
                console.log("entro a maestro")
                logGeneral(maestros, showDateMaster);
                break;
            case "alumno":
                console.log("entro a alumno")
                logGeneral(alumnos, showDateAlumno);
                break;
            default:
                alert("La contraseña o El Mail o el cargo son incorrectos");
                console.log("no funco")
        }
    }
}
//Funcion logearPara pedir datos y en base al select verificar en los dos arrays y enviar a una funcion.
//busca el elemento y si todo coincide llama a la funcion en caso contrario muestra un mensaje
function logGeneral(lista, funcion) {
    let mail = document.getElementById("addres").value;
    let password = document.getElementById("password").value;
    let datos = lista.find((element) => element.mail === mail)
    if (datos != undefined) {
        if (datos.contraseña === password) {
            outAlert();
            funcion(datos);
        } else {
            alert("La contraseña o El Mail o el cargo son incorrectos");
        }
    } else {
        alert("La contraseña o El Mail o el cargo son incorrectos");
    }
}
//funcion personal de alert para mostrar un mensaje de error en un elemento de id alert
function alert(msg) {
    const alerta = document.getElementById("alert");
    alerta.innerText = msg;
}
//Funcion para limpiar el alert
function outAlert() {
    const alerta = document.getElementById("alert");
    alerta.innerText = ""
}
//Funcion para mostrar interfaz de los profesores
function showDateMaster(persona) {
    let alumnos = getAlumnos();
    contain.innerHTML = `
    <h1>Bienvenido Maestro ${persona.name} ${persona.apellido}</h1>
            <div class="mb-3">
                <div class="row">
                    ${alumnos}
                </div>
            </div>
            <div class="mb-3">
            <button type="button" class="btn btn-primary" id="btnReturn">Log out</button>
            </div>
            `
    const btnReturn = document.getElementById("btnReturn");
    btnReturn.onclick = () => {
        showLogear();
    }
    getBtnVerAlu(persona);
}
//Funcion para mostrar interfaz de logear
function showLogear() {
    contain.innerHTML = `
    <h1>Ingrese a su cuenta</h1>
    <div class="mb-3">
        <label for="addres" class="form-label">Email</label>
        <input type="email" class="form-control" id="addres" placeholder="name@example.com">
    </div>
    <div class="mb-3">
        <label for="password" class="form-label">Contraseña</label>
        <input type="password" class="form-control" id="password" placeholder="Contraseña">
    </div>
    <select class="form-select mb-3" aria-label="Default select example" id="typePerson">
        <option selected>Eliga su puesto</option>
        <option value="maestro">Maestro</option>
        <option value="alumno">Alumno</option>
    </select>
    <p id="alert"></p>
    <button type="button" class="btn btn-primary" id="btnIngresar">Ingresar</button>
    `
    logear();
}
//Funcion para recibir todos los alumnos disponibles y crearles una card y devolver ese string
function getAlumnos() {
    let string = "";
    for (const alumno of alumnos) {
        string += `
        <div class="col-md-6 col-xl-4 my-2" >
                        <div class="card m-auto" >
                            <div class="card-body">
                                <h5 class="card-title">${alumno.name} ${alumno.apellido}</h5>
                                <button type="button" class="btn btn-primary btnEditNota ${alumno.id}" >Editar notas</button>
                                <button type="button" class="btn btn-primary btnVerNota ${alumno.id}" >Ver notas</button>
                            </div>
                        </div>
                    </div>
        `
    }
    return string;
}
//Funcion para darle un evento a todos los botones de la interfaz del profesor
//Un boton para editar notas y otro boton para verlas directamente
function getBtnVerAlu(maestro) {
    const btnEditNota = document.querySelectorAll(".btnEditNota");
    const btnVernota = document.querySelectorAll(".btnVerNota");
    btnEditNota.forEach(btn => {
        btn.onclick = () => {
            let arrayClasname = btn.className.split(" ");
            let index = parseInt(arrayClasname[3]);
            const alumnoFind = alumnos.find((alumno) => alumno.id === index)
            editAlum(alumnoFind, maestro);
        }
    })
    btnVernota.forEach(btn => {
        btn.onclick = () => {
            let arrayClasname = btn.className.split(" ");
            let index = parseInt(arrayClasname[3]);
            const alumnoFind = alumnos.find((alumno) => alumno.id === index)
            showNotesAlumno(alumnoFind, maestro.materia, showDateMaster, maestro);
        }
    })
}
//funcion para mostrar interfaz para editar notas, con eventos para editar las notas
function editAlum(alumno, maestro) {
    contain.innerHTML = `
    <h1>Ingreso de Notas de ${maestro.materia} del alumno ${alumno.name} ${alumno.apellido}</h1>
            <div class="mb-3">
                <select class="form-select mb-3" aria-label="Default select example" id="numTrim">
                    <option selected>Eliga el trimestre</option>
                    <option value="1">1er Trimestre</option>
                    <option value="2">2do Trimestre</option>
                    <option value="3">3er Trimestre</option>
                </select>
            </div>
            <div class="mb-3">
                <label for="nota1" class="form-label">1er Nota</label>
                <input type="number" class="form-control" id="nota1" placeholder="Nota primer parcial">
            </div>
            <div class="mb-3">
                <label for="nota2" class="form-label">2da Nota</label>
                <input type="number" class="form-control" id="nota2" placeholder="Nota segundo parcial">
            </div>
            <p id="alert"></p>
            <button type="button" class="btn btn-primary" id="btnIngresarNota" >Ingresar</button>
            <button type="button" class="btn btn-primary" id="btnReturn">Volver</button>
    `
    const btnIngNota = document.getElementById("btnIngresarNota");
    const materia = alumno.materias.find((materia) => materia.nomMateria === maestro.materia);
    //Evento para ingresar notas dependiendo del select
    btnIngNota.onclick = () => {
        const numTrim = document.getElementById("numTrim");
        let option = parseInt(numTrim.options[numTrim.selectedIndex].value);
        switch (option) {
            case 1:
                outAlert();
                setTrim(materia.trimestres[0]);
                break;
            case 2:
                outAlert();
                setTrim(materia.trimestres[1]);
                break;
            case 3:
                outAlert();
                setTrim(materia.trimestres[2]);
                break;
            default:
                alert("No eligio ningun trimestre");
                console.log("no funco")
        }
        estadoMat(materia.trimestres, materia);
    }
    //evento para volver a la interfaz anterior
    const btnReturn = document.getElementById("btnReturn");
    btnReturn.onclick = () => {
        showDateMaster(maestro)
    }
}
//ingresa las notas en un trimestre e ingresa el promedio en caso de que las notas no esten entre 1 y 10 inclusives salta un mensaje de error
function setTrim(trimestre) {
    const n1 = parseInt(document.getElementById("nota1").value);
    const n2 = parseInt(document.getElementById("nota2").value);
    if ((n1 > 0 && n1 <= 10) && (n2 > 0 && n2 <= 10)) {
        outAlert();
        trimestre.nota1 = n1;
        trimestre.nota2 = n2;
        trimestre.promedio = (n1 + n2) / 2;
        document.getElementById("nota1").value = "";
        document.getElementById("nota2").value = "";
    } else {
        alert("Verifique haber puesto bien las notas");
    }
}
//Funcion para ver estado de la materia
// si saca 6 o mas esta aprobado.Si saca menos esta desaprobado . Si todos los trimestres no tienen sus notas y promedios no hay promedio final
function estadoMat(trimestres, materia) {
    let promedio1 = parseInt(trimestres[0].promedio);
    let promedio2 = parseInt(trimestres[1].promedio);
    let promedio3 = parseInt(trimestres[2].promedio);
    if (isNaN(promedio1) == false && isNaN(promedio2) == false && isNaN(promedio3) == false) {
        materia.promFinal = ((promedio1 + promedio2 + promedio3) / 3).toFixed(2);
        if (materia.promFinal >= 6 && promedio3 >= 6) {
            materia.stateMat = "Aprobada";
        } else {
            materia.stateMat = "Desaprobada";
        }
    } else {
        materia.stateMat = "Sin promedio";
        materia.promFinal = "Sin Terminar la cursada";
    }
}
//Muestra una tabla con las notas del alumno de la materia del profesor
function showNotesAlumno(alumno, nombreMateria, funcionAnterior, persona) {
    const materia = alumno.materias.find((materia) => materia.nomMateria === nombreMateria);
    console.log(materia);
    let rowsNotas = getRow(materia.trimestres);
    contain.innerHTML = `
    <h1>Notas de ${alumno.name} ${alumno.apellido} de la materia de ${nombreMateria}</h1>
            <div class="mb-3 tablaHide">
                <table class="table">
                <tr>
                        <th>Trimestre</th>
                        <th>1er parcial</th>
                        <th>2do parcial</th>
                        <th>Promedio</th>
                    </tr>
                    <tbody>
                    ${rowsNotas}
                    <tr>
                    <th>Estado de la materia</th>
                    <td>${materia.stateMat}</td>
                    <th>Promedio Final</th>
                    <td>${materia.promFinal}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <p id="alert"></p>
            <button type="button" class="btn btn-primary" id="btnReturn">Volver</button>
    `
    //evento de retorno a la interfaz anterior
    const btnReturn = document.getElementById("btnReturn");
    btnReturn.onclick = () => {
        funcionAnterior(persona)
    }
}
//funcion para crear las celdas con los datos
function getRow(trimestres) {
    let string = "";
    for (const trimestre of trimestres) {
        string += `
        <tr>
            <th>${trimestre.numTrim}</th>
            <td>${trimestre.nota1}</td>
            <td>${trimestre.nota2}</td>
            <td>${trimestre.promedio}</td>
        </tr>
        `
    }

    return string;
}


//Funcion para mostrar la interfaz al ingresar como alumno
function showDateAlumno(alumno) {
    let rowMaterias = getRowAlumno();
    contain.innerHTML = `
    <h1>Ingreso a la cuenta de ${alumno.name}</h1>
            <div class="row">
                ${rowMaterias}
            </div>
            <div class="mb-3">
                <button type="button" class="btn btn-primary" id="btnReturn">Log out</button>
            </div>
    `
    //evento para return a logear
    const btnReturn = document.getElementById("btnReturn")
    btnReturn.onclick = () => {
        showLogear();
    }
    btnVerNotaMateria(alumno)
}
//funcion para crear las cards de las materias con sus botones
function getRowAlumno() {
    let string = "";
    for (const nameMat of materiasName) {
        string += `<div class="col-md-6 col-xl-4 my-2">
                    <div class="card m-auto " >
                        <div class="card-body">
                            <h5 class="card-title">${nameMat}</h5>
                            <button type="button" class="btn btn-primary btnMaterias" id="${nameMat}">Ver Notas</button>
                        </div>
                    </div>
                </div>`
    }
    return string;
}
//Funcion para darles eventos a los botones
function btnVerNotaMateria(alumno) {
    const btnMaterias = document.querySelectorAll(".btnMaterias");
    btnMaterias.forEach((btn) => {
        btn.onclick = () => {
            const materia = alumno.materias.find((materia) => materia.nomMateria === btn.id);
            showNotesAlumno(alumno, materia.nomMateria, showDateAlumno, alumno);
        }
    })
}