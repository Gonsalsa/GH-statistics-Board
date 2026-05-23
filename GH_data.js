

async  function loadRepos() {
    const response = await fetch("/api/repos")
    const repos = await response.json()

    const container = document.getElementById("repos")

    repos.forEach(repo => {
        container.innerHTML += '' +
            '<div class="card">' +
            '   <h3>${repo.name}</h3>' +
                <p>${repo.stars}</p>
                <p>${repo.watchers}</p>
            '</div>'

    })
}

