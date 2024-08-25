 // Funciones de encriptar y desencriptar con las "llaves" proporcionadas
 function encriptar(texto) {
     let encriptado = texto.replace(/e/g, "enter")
         .replace(/i/g, "imes")
         .replace(/a/g, "ai")
         .replace(/o/g, "ober")
         .replace(/u/g, "ufat");
     return encriptado;
 }

 function desencriptar(texto) {
     let desencriptado = texto.replace(/enter/g, "e")
         .replace(/imes/g, "i")
         .replace(/ai/g, "a")
         .replace(/ober/g, "o")
         .replace(/ufat/g, "u");
     return desencriptado;


 }

 // Eventos de los botones
 document.getElementById('encryptBtn').addEventListener('click', function() {
     let inputText = document.getElementById('ingreso-txt').value.toLowerCase();
     if (/^[a-z\s]*$/.test(inputText)) { // Validación de solo letras minúsculas y espacios
         let resultText = encriptar(inputText);
         document.getElementById('resultText').innerText = resultText;
     } else {
         alert("Por favor ingresa solo letras minúsculas y sin caracteres especiales.");
     }
 });

 document.getElementById('decryptBtn').addEventListener('click', function() {
     let inputText = document.getElementById('ingreso-txt').value.toLowerCase();
     if (/^[a-z\s]*$/.test(inputText)) { // Validación de solo letras minúsculas y espacios
         let resultText = desencriptar(inputText);
         document.getElementById('resultText').innerText = resultText;
     } else {
         alert("Por favor ingresa solo letras minúsculas y sin caracteres especiales.");
     }
 });

 // Función para copiar el texto encriptado/desencriptado
 document.getElementById('btn-copiar').addEventListener('click', function() {
     let resultText = document.getElementById('resultText').innerText;
     navigator.clipboard.writeText(resultText).then(() => {
         alert("Texto copiado al portapapeles");
     }).catch(err => {
         alert("Error al copiar el texto: " + err);
     });
 });