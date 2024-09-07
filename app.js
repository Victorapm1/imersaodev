function pesquisar(){

    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    console.log(campoPesquisa)

    if(campoPesquisa == ""){
        section.innerHTML = "<p> Digite algum texto</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()


let resultados = "";
let titulo = "";
let descricao = "";

for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()

    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){

        resultados += `
    <div class="item-resultado">

        
            <a href="#" target="_blank">${dado.titulo}</a>
        
        <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Saiba mais</a>

    </div>
    `;
    }

   if (!resultados) {
        resultados = "<h2>Nenhum resultado encontrado</h2>"
    }

//35:13
    
}

section.innerHTML = resultados
    
}

