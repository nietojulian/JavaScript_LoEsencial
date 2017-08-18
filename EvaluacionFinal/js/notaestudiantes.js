//Creacion de JSON Estudiantes
var  json_estudiantes=
[
    {
        "codigo":"201708-01","nombre":"Javier Suarez","nota":84
    },
    {
        "codigo":"201708-02","nombre":"Andrea Romero","nota":66
    },
    {
        "codigo":"201708-03","nombre":"Sergio Amaya","nota":60
    },
    {
        "codigo":"201708-04","nombre":"Andres Rodriguez","nota":59
    },
    {
        "codigo":"201708-05","nombre":"Juana Mora","nota":71
    },
    {
        "codigo":"201708-06","nombre":"Gerardo Hernandez","nota":99
    },
    {
        "codigo":"201708-07","nombre":"Alexandra Ladino","nota":28
    },
    {
        "codigo":"201708-08","nombre":"Carlos Vasquez","nota":39
    },
    {
        "codigo":"201708-09","nombre":"Pedro Garzon","nota":80
    },
    {
        "codigo":"201708-10","nombre":"Luisa Romero","nota":55
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


//Calcular si aprobo curso
//Aprueba con puntaje mayor o igual a 60
function _func_aprobo(){
    if (listaEstudiantesLlena == true){
        _obtenerNotas();
        var notaaprobacion = 60
        for (var i = 0; i < json_estudiantes.length; i++) {
            if (json_estudiantes[i].nota >= notaaprobacion){
            document.getElementById("aprobo"+i).innerHTML = "SI";
            }
            else{
                document.getElementById("aprobo"+i).innerHTML = "NO";
            }
        }
    }
    else{
        alert("Debe llenar la lista de estudiantes primero")
    }
};


function _func_restablecer(){
    if (listaEstudiantesLlena == true){
        for (var i = 0; i < json_estudiantes.length; i++) {
            document.getElementById("codigo"+i).innerHTML = "";
            document.getElementById("nombre"+i).innerHTML = "";
            document.getElementById("nota"+i).innerHTML = "";
            document.getElementById("aprobo"+i).innerHTML = "";            
        }
        document.getElementById("nota_mayor_val").innerHTML = "";
        document.getElementById("nota_menor_val").innerHTML = "";
        document.getElementById("Nota_prom_val").innerHTML = "";
        listaEstudiantesLlena = false;
    }
    else{
        alert("El formulario esta en blanco, no hay datos para restablecer")
    }
};
