function guardar(){
    let valorp1, valorp2, valorp3
    valorp1 = document.getElementById("p1").value
    
    //guardar localmente
    localStorage.setItem("p1",valorp1)

    //Guardar local respuesta 1
    valorp2 = document.getElementById("p2").value
    
    //guardar localmente
    localStorage.setItem("p2",valorp2)
    
    //Guardar local respuesta 2
    valorp3 = document.getElementById("p3").value
    
    //guardar localmente
    localStorage.setItem("p3",valorp2)
    //enviar al archivo respuesta.html   
    window.location="respuesta.html"
}



