//Creacion de JSON Estudiantes
var  json_estudiantes=
[
    {
        "codigo":"201708-01","nombre":"Javier Suarez","nota":4.2
    },
    {
        "codigo":"201708-02","nombre":"Andrea Romero","nota":3.6
    },
    {
        "codigo":"201708-03","nombre":"Sergio Amaya","nota":3.0
    },
    {
        "codigo":"201708-04","nombre":"Andres Rodriguez","nota":2.9
    },
    {
        "codigo":"201708-05","nombre":"Juana Mora","nota":3.3
    },
    {
        "codigo":"201708-06","nombre":"Gerardo Hernandez","nota":4.9
    },
    {
        "codigo":"201708-07","nombre":"Alexandra Ladino","nota":1.8
    },
    {
        "codigo":"201708-08","nombre":"Carlos Vasquez","nota":3.9
    },
    {
        "codigo":"201708-09","nombre":"Pedro Garzon","nota":4.0
    },
    {
        "codigo":"201708-10","nombre":"Luisa Romero","nota":2.8
    }
];

var listaEstudiantesLlena = false;


//Llenado de la tabla de estudiantes
function _func_estudiantes(){
    for (var i = 0; i < json_estudiantes.length; i++) {
        document.getElementById("codigo"+i).innerHTML = json_estudiantes[i].codigo;
        document.getElementById("nombre"+i).innerHTML = json_estudiantes[i].nombre;
        document.getElementById("nota"+i).innerHTML = json_estudiantes[i].nota;
    }
    listaEstudiantesLlena = true;
};


//Calcular y mostrar la nota promedio
function _func_notaPromedio(){
    if (listaEstudiantesLlena == true){
        var sumanotas =0;
        for (var i = 0; i < json_estudiantes.length; i++) {
            sumanotas += json_estudiantes[i].nota;
            if (i== json_estudiantes.length-1){
                var promedio = sumanotas / json_estudiantes.length;
                document.getElementById("Nota_prom_val").innerHTML = promedio;
            }
        }
    }
    else{
      alert("Debe llenar la lista de estudiantes primero")
    }
};

//Obtener todas las notas del JSON
var notastodas = [json_estudiantes.length];
function _obtenerNotas(){
    for (var i = 0; i < json_estudiantes.length; i++) {
        notastodas[i]=json_estudiantes[i].nota;
    }
    return notastodas;
};

//Calcular y mostrar la nota mas alta
function _func_notaMayor(){
    if (listaEstudiantesLlena == true){
        var notamayor =0;
        _obtenerNotas();
        notamayor = Math.max.apply(Math, notastodas);
        document.getElementById("nota_mayor_val").innerHTML = notamayor;
    }
    else{
        alert("Debe llenar la lista de estudiantes primero")
    }
};


//Calcular y mostrar la nota mas baja
function _func_notaMenor(){
    if (listaEstudiantesLlena == true){
        var notamenor =0;
        _obtenerNotas();
        notamenor = Math.min.apply(Math, notastodas);
        document.getElementById("nota_menor_val").innerHTML = notamenor;
    }
    else{
        alert("Debe llenar la lista de estudiantes primero")
    }
};
