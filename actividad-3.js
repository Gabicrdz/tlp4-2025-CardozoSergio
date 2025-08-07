String.prototype.concatenarPalabra = function(palabra) {
    return `${this} ${palabra}`;
};

const base = "Total";
const resultado = base.concatenarPalabra("$1000");
console.log(resultado); 