class CuentaBancaria {
    #saldo;

    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial;
    }

    depositar(monto) {
        if (monto > 0) {
            this.#saldo += monto;
        } else {
            console.log("El monto debe ser mayor a 0");
        }
    }

    extraer(monto) {
        if (monto > this.#saldo) {
            console.log("Fondos insuficientes");
        } else {
            this.#saldo -= monto;
        }
    }

    consultarSaldo() {
        console.log(`Saldo actual: $${this.#saldo}`);
    }

    get saldo() {
        return this.#saldo;
    }

    set saldo(nuevoSaldo) {
        if (nuevoSaldo >= 0) {
            this.#saldo = nuevoSaldo;
        } else {
            console.log("El saldo no puede ser negativo");
        }
    }
}


const cuenta = new CuentaBancaria("Sergio", 2000);
cuenta.consultarSaldo();     

cuenta.depositar(500);
cuenta.consultarSaldo();     

cuenta.extraer(1000);
cuenta.consultarSaldo();     

cuenta.extraer(2000);        

console.log(cuenta.saldo);   

cuenta.saldo = -500;         
cuenta.consultarSaldo();    
