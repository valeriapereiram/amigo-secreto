let amigos =[];

function adicionarAmigo() {
    let nome=document.getElementById("amigo").value.trim ();

if (nome ==="") {
    alert( "Por favor, insira um nome");
    return;
}
amigos.push(nome);
document.getElementById("amigo").value="";

document.getElementById("resultado").innerHTML="";

atualizarLista();
}
function atualizarLista() {
    let lista= document.getElementById("listaAmigos");

    lista.innerHTML="";
    
    for (let i= 0; i< amigos.length; i++) {
        lista.innerHTML += "<li>" +amigos [i] + "</li>";
    }
}

function sortearAmigo() {
    if(amigos.length=== 0) {
        alert( "A lista está vazia!Adicione amigos primeiro.");
        return;
    }

    let indiceAleatorio= Math.floor(Math.random() *amigos.length);
    let amigoSorteado= amigos [indiceAleatorio];
    
    let resultado= document.getElementById("resultado");
    resultado.innerHTML="<li> O amigo secreto sorteado é:" + amigoSorteado +"</li>";
    
}