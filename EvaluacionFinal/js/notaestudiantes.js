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


//Llenado de la tabla de estudiantes
function _func_estudiantes(){
  for (var i = 0; i < json_estudiantes.length; i++) {
    document.getElementById("codigo"+i).innerHTML = json_estudiantes[i].codigo;
    document.getElementById("nombre"+i).innerHTML = json_estudiantes[i].nombre;
    document.getElementById("nota"+i).innerHTML = json_estudiantes[i].nota;
  }
};
