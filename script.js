function validarNota(id){
    let nota = parseInt(document.getElementById(id).value)
    if(nota <0 || nota >= 11){
        document.getElementById(id).style.borderColor = "red"
    }else if ((nota >0 || nota <= 11)){
        document.getElementById(id).style.borderColor = "green"
    }
}

function validarNull(id){
    let nota = document.getElementById(id).value
    if(!nota){
        document.getElementById(id+"-span").innerHTML = "Completa este campo"
    }else{
        document.getElementById(id+"-span").innerHTML = ""
    }

}

function validarNota2(id){
    let nota = parseInt(document.getElementById(id).value)
    if(nota <0 || nota >= 11){
        alert("Ingrese una nota entre 1 y 10")
    }
}

function validarNull2(id){
    let nota = document.getElementById(id).value
    if(!nota){
        alert("Completa el campo");
    }

}

function validarTodo(id){
    validarNota(id);
    validarNull(id);
}

function validarTodo2(...id){
    for(let id1 of id){
        validarNota2(id1);
        validarNull2(id1);
    }
}



document.querySelector("#btn1").onclick = e => {
    validarTodo2("mat", "leng", "efsi");

    let mat = parseInt(document.getElementById("mat").value)
    let leng = parseInt(document.getElementById("leng").value)
    let efsi = parseInt(document.getElementById("efsi").value)

    let promedio = 0
    promedio = (mat + leng + efsi) / 3
    document.getElementById("result-span").innerHTML = "El promedio es " + promedio

    if(promedio < 6){
    document.getElementById("result-span").style.color = "red"
    }else{
        document.getElementById("result-span").style.color = "green"
    }
}

document.querySelector("#btn2").onclick = e => {
    validarTodo2("mat", "leng", "efsi");
    let mat = parseInt(document.getElementById("mat").value)
    let leng = parseInt(document.getElementById("leng").value)
    let efsi = parseInt(document.getElementById("efsi").value)

    let notas = {
        "matemática": mat,
        "lengua": leng,
        "efsi": efsi
    };

    let materiasmax = []
    let max = 0

    for(let i of Object.keys(notas)){
        if(notas[i] > max){
            max = notas[i];
            materiasmax.splice(0);
            materiasmax.push(i);
        } else if(notas[i] == max) {
            materiasmax.push(i);
        }
    }

    document.getElementById("result-span").innerHTML = "la materia máxima es " + materiasmax.join(" y ") + " con un " + max;
    document.getElementById("result-span").style.color = "blue"
}