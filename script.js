function fetchGithub(username) {
    fetch(`https://api.github.com/users/${username}`)
        .then((response) => {
            if(!response.ok) {
                console.log('Usuário não encontrado')
            } else {
                return response.json()
            }
        })
        .then((user) => {
            console.log('user', user)
            createUser(user)
        })
        .catch((error) => {
            console.error(error)
            const app = document.getElementById('app')
            app.innerHTML = `<p>${error.message}</p> ` 
        })
    }
function createUser(user) {
    const app = document.getElementById('app')
    const card = document.createElement('div')
    card.className = 'card'
    const infosDiv = document.createElement('div')
    infosDiv.className = 'infos'

    const linkPerfil = document.createElement('a')
    linkPerfil.classList.add('linkPerfil')
    linkPerfil.href = user.html_url
    linkPerfil.innerText = 'Visite'
    linkPerfil.target = '_blank'

    const userAvatar = document.createElement('img')
    userAvatar.src = user.avatar_url //Adiciona a foto de perfil do usuário
    userAvatar.alt = `Imagem de perfil de ${user.login}`
    userAvatar.classList.add('fotoPerfil')

    const name = document.createElement('h2')
    name.innerText = `${user.name}`

    const userName = document.createElement('p')
    userName.innerText = `@${user.login}`

    infosDiv.append(name)
    infosDiv.append(userName)
    infosDiv.append(linkPerfil)
    card.append(userAvatar)
    card.append(infosDiv)
    app.append(card)
}
fetchGithub('matheusbattisti') 