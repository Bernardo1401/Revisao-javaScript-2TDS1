let metaLivros = 5;
let livrosLidos = ["- Assim que acaba", "- Assim que começa", "- A culpa é das estrelas"];
let livrosFaltando = metaLivros - livrosLidos.length;

console.log("Livros lidos:")

for(let i = 0; i < livrosLidos.length; i++) {
    console.log(`${livrosLidos[i]}`);
}

if(livrosLidos.length < metaLivros) {
    console.log(`Você está progredindo! Faltam ${livrosFaltando} livros para atingir sua meta.`);
}else if(livrosLidos.length == metaLivros){
    console.log("Parabéns! Você atingiu sua meta de leitura!");
}
