const btn = document.querySelector('#GetBtn')

btn.addEventListener('click', () => {
    const req = new XMLHttpRequest()
    req.open('GET', 'people.json')
    req.setRequestHeader('Content-type', 'application/json')
    req.send()

    req.addEventListener('load', () => {
        const data = JSON.parse(req.response)
        data.forEach(human => {
            const div = document.createElement('div')
            div.innerHTML = human.name
            document.body.append(div)
        })
        
    })
})