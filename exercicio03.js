let idadeMinima = 7;
let idadeAluno = 10;
let primeiroAno = 7;
let segundoAno = 8;
let terceiroAno = 9;

if(idadeAluno >= idadeMinima && idadeAluno == primeiroAno){
    console.log("Matrícula realizada com sucesso, você está no primeiro ano!")
}else if(idadeAluno == segundoAno){
    console.log("Matrícula realizada com sucesso, você está no segundo ano!")
}else if(idadeAluno == terceiroAno){
    console.log("Matrícula realizada com sucesso, você está no terceiro ano!")
}else if(idadeAluno > terceiroAno){
    console.log("Matricula realizada com sucesso!")
}else{
    console.log("Desculpe, você ainda não pode se matricular nesta escola")
}