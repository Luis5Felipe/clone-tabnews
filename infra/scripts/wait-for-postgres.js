const { exec } = require("node:child_process");

function checkPostgres() {
  exec("docker exec postgres-dev pg_isready --host localhost", handleReturn);
  function handleReturn(err, stdout, stderr) {
    if (stdout.search("accepting connections") === -1) {
      process.stderr.write(".");
      checkPostgres();
      return;
    }
    console.log("\n\n Postgres está pronto e aceitando conexões!");
  }
}

process.stderr.write("\n\n Aguardando Postgres aceitar conexões ");

checkPostgres();
