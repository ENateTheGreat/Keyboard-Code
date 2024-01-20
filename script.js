

document.body.addEventListener(`keypress`, e => {
    document.body.innerHTML = ``
    let text 
    let code
    let key = e.key
    let keycode = e.keyCode
    text = document.createElement(`div`)
    text.setAttribute(`id`, `child`)
    text.textContent = `You pressed ${key}`
    document.body.appendChild(text)
    code = document.createElement('div')
    code.setAttribute('class', 'code')
    code.textContent = `Key Code: ${keycode}`
    document.body.appendChild(code)
})