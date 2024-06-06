window.addEventListener('DOMContentLoaded', () => {
    const tabela = document.querySelector("#lista-cursos")

    fetch('/cursos')
    .then(response => response.json())
    .then(cursos => {
        console.log(cursos)
        cursos.forEach(curso => {
            let tr = document.createElement('tr')
            let td1 = document.createElement('td')
            td1.innerText = curso.id
            let td2 = document.createElement('td')
            td2.innerText = curso.nome
            tr.appendChild(td1)
            tr.appendChild(td2)
            tabela.appendChild(tr)    
        })
    })
})