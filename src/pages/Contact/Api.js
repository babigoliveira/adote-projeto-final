function submitForm() {
  const name = document.getElementById("name")?.value;
  const email = document.getElementById("email")?.value;
  const subject = document.getElementById("subject")?.value;
  const message = document.getElementById("message")?.value;

  if (!(name && email && subject && message)) {
    return;
  }

  const formattedMessage = `
    Nome: ${name}
    Email: ${email}
    Assunto: ${subject}
    Mensagem: ${message}
  `.replaceAll(/\n +/g, "\n");

  const url =
    "https://api.whatsapp.com/send?phone=+5531985972616&text=" +
    encodeURIComponent(formattedMessage);

  window.open(url, "_blank");
}

function validaFormulario() {
  const nome = document.getElementById("nome");
  const email = document.getElementById("email");
  const assunto = document.getElementById("assunto");
  const mensagem = document.getElementById("mensagem");

  const message = `
    \`\`\`
    Nome: ${nome}
    Email: ${email}
    Assunto: ${assunto}
    Mensagem: ${mensagem}
    \`\`\`
  `.replace(/^ +/g, "");

  const url =
    "https://api.whatsapp.com/send?phone=+5531985972616&text=" + message;

  document.querySelector(".submit").href = url;
}
