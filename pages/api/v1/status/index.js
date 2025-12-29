function status(resquest, response) {
  response
    .status(200)
    .json({ chave: "Alunos do curso.dev, são pessoas acima da média" });
}

export default status;
