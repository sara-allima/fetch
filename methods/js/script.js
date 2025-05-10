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
