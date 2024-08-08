let armas = ["AK-47", "soco na costela", "gelo invertido", "lança-granada", "picareta"]
let ataques = [];

ataques.push("Caiox");
ataques.push(armas[0]);
ataques.push(armas[1]);
ataques.push(armas[2]);
ataques.push(armas[3]);
ataques.push(armas[4]);

for (let i = 0; i < ataques.length; i++) {
    if(i == 0 ) {
        console.log(`Nome do robô: ${ataques[i]}`);
    } else{
        console.log(`Ataques: ${ataques[i]}`);
    }
}

