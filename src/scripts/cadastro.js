const btnCadastrar = document.querySelector('.button').addEventListener('click', (e)=>{
    e.preventDefault();

    
    const nome = document.getElementById("nome").value;
    const telefone = document.getElementById("tel").value;

    if (nome && telefone) {
        const usuario = { nome, telefone };
        localStorage.setItem("usuario", JSON.stringify(usuario));

        // Redireciona para a outra página após salvar os dados
        window.location.href = "/pedido.html"; 
    } else {
        alert("Preencha todos os campos!");
    }
})

console.log(usuario)