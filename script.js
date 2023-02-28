let cont = document.querySelector('.container')

fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(res => reload(res))

function reload(arr) {
    for (let item of arr) {
        // create
        let div = document.createElement('div')
        let img = document.createElement('img')

        // classList
        div.classList.add('create')

        // img
        img.setAttribute('src', item.url)

        // append
        img.onclick = () => {
            let id = document.createElement('p')
            let ismarried = document.createElement('p')
            let name = document.createElement('p')
            let year = document.createElement('h1')


            id.innerHTML = `id: ${item.id}`,
                name.innerHTML = `name: ${item.name}`,
                ismarried.innerHTML = item.ismarried,
                year.innerHTML = `Год: ${item.year}`
            div.append(id, name, ismarried, year)
        }
        div.append(img)
        cont.append(div)
    }
}