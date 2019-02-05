const body = document.querySelector('body')

const listImagesBackground = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
]


getPage('card')
    .then(card => {
        listImagesBackground.forEach(img => {
            body.innerHTML += card.replace('${image}', img)
        })
    })



function getPage(page) {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest()
        xhttp.onreadystatechange = function() {
            if(this.status == 200 && this.readyState == 4) {
                resolve(this.responseText)
            }
        }
        xhttp.open('GET', `views/${page}.html`)
        xhttp.send()
    })
}