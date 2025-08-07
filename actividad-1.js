function CuentaBancaria(titular,saldoInicial){
    this.titular = titular;
    this.saldo = saldoInicial;
}

CuentaBancaria.prototype.depositar = function (monto){
    this.saldo += monto;
};

CuentaBancaria.prototype.extraer = function (monto) {
    if (monto > this.saldo) {
        console.log("Fondos insuficientes");
    } else {
        this.saldo -= monto;
    }
};

CuentaBancaria.prototype.consultarSaldo = function () {
    console.log(`Saldo actual: $${this.saldo}`);
};


const miCuenta = new CuentaBancaria("Gabriel", 1000);
miCuenta.consultarSaldo();      
miCuenta.depositar(500);
miCuenta.consultarSaldo();      
miCuenta.extraer(200);
miCuenta.consultarSaldo();     
miCuenta.extraer(2000);          