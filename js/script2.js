
function cargarDato(){
    let r1, r2, r3
         //recuperando el dato de localstorage
         r1=localStorage.getItem("p1")   
         //enviarlo a la vista
        document.getElementById("respuesta").innerHTML = r1  

         //recuperando el dato 2 de localstorage
         r2=localStorage.getItem("p2")   
         //enviarlo a la vista
        document.getElementById("respuesta1").innerHTML = r2 

        //recuperando el dato 3 de localstorage
        r3=localStorage.getItem("p3")   
        //enviarlo a la vista
       document.getElementById("respuesta2").innerHTML = r3 
}
    //llamar a la funcion para que se ejecute apenas redirecciona a respuesta.hml
    cargarDato()

    