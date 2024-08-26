const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

const matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"]
];

function transformarTexto(texto, esEncriptar = true) {
    texto = texto.toLowerCase();
    matrizCodigo.forEach(([original, reemplazo]) => {
        const [buscar, sustituir] = esEncriptar ? [original, reemplazo] : [reemplazo, original];
        texto = texto.replaceAll(buscar, sustituir);
    });
    return texto;
}

function btnEncriptar() {
    mensaje.value = transformarTexto(textArea.value);
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function btnDesencriptar() {
    mensaje.value = transformarTexto(textArea.value, false);
    textArea.value = "";
}


function btnCopiar() {
    mensaje.select();
    mensaje.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(mensaje.value)
        .then(() => alert("Su texto fue copiado con éxito"));
}