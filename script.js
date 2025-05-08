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

    const userAvatar = document.createElement('img')
    userAvatar.src = user.avatar_url //Adiciona a foto de perfil do usuário
    userAvatar.alt = `Imagem de perfil de ${user.login}`

    const name = document.createElement('h2')
    name.innerText = `${user.name}`

    const userName = document.createElement('p')
    userName.innerText = `@git add${user.login}`
    
    card.append(userAvatar)
    card.append(name)
    card.append(userName)
    app.append(card)
}
fetchGithub('sara-allima') 