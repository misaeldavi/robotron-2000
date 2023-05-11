const cliente = {
    Nome: "Misael",
    Idade: 15,
    CPF: "12345678900",
    Email: "misael@gmail.com",
    Fones: ["559123464", "559453217"],
    Dependentes: [
        {
            Nome: "Marciel",
            Parentesco: "irmão",
            DataNasc: "24/01/2000"
        },
        {
            Nome: "Nayara",
            Parentesco: "cunhada",
            DataNasc: "02/07/1999"
        }
    ],
    Saldo: 100,
    depositar: function (valor) {
        this.Saldo += valor
    }
}

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj)
    if (propsClientes.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${obj.Nome}.`)
    }
}

console.log(Object.entries(cliente))
oferecerSeguro(cliente)

let relatorio = ""

for (let info in cliente) {
    if (typeof cliente[info] === "object" || typeof cliente[info] === "function") {
        continue
    } else {
        relatorio += `
        ${info} ==> ${cliente[info]}`
    }
}

