// GET
/*
fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    if (!response.ok) {
        console.log(`Error ${response.status}`)
    } else {
        return response.json()
    }
  })
  .then((posts) => { // Aqui é onde acontece todo a lógica do bagui
    const container = document.getElementById('container')
    posts.map(post => {
        const h2 = document.createElement('h2')
        h2.innerText = post.title
        container.append(h2)
    })
    //const container = document.getElementById('container')
  });
*/

// POST
/*
fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'Hello',
        body: 'This it', 
        userId: 10
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})
    .then(response => response.json())
    .then(post => {
        const container = document.getElementById('container')
        container.innerHTML = `Título: ${post.title}<br>
        Conteúdo: ${post.body}<br>
        Id de Usuário: ${post.userId}`
    })
*/

// PATCH
/*
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'foo'
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})
    .then(response => response.json())
    .then(posts => console.log(posts))
*/

// DELETE
fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE'
})