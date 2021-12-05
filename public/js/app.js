const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message = document.querySelector('#message')
const locationResult = document.querySelector('#location')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    message.textContent = 'Loading...'
    locationResult.textContent = ''

    fetch('/weather?address=' + search.value).then((res) => {
        res.json().then((data) => {
            if (data.error) {
                message.textContent = data.error
            } else {
                locationResult.textContent = data.location
                message.textContent = data.forecast
            }
        })
    })
})
