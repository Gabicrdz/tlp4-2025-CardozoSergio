const toUpperCaseOriginal = String.prototype.toUpperCase;

String.prototype.toUpperCase = function () {
    return "ESTO ESTÁ PROHIBIDO";
};

const palabra = "javascript";
const resultado = palabra.toUpperCase();

console.log(resultado);
