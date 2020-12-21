const card = document.createElement('div')
card.id = 'card'

const imageContainer = document.createElement('div')
imageContainer.id = 'image-container'

const image = document.createElement('img')
image.src = './images/apple-watch-white.jpg'

const textContainer = document.createElement('div')
textContainer.id = 'text-container'

const h1 = document.createElement('h1')
h1.textContent = 'Apple Watch Series 6'

const spanContainer = document.createElement('div')
spanContainer.id = 'span-container'

const watchColors = ['white', 'pink', 'red', 'yellow', 'blue']
watchColors.forEach(color => {
    const span = document.createElement('span')
    span.id = `watch-${color}`

    span.addEventListener('click', e => {
        image.src = `./images/apple-${span.id}.jpg`
    })

    spanContainer.appendChild(span)
})

const priceText = document.createElement('h2')
priceText.id = 'price-text'
priceText.textContent = 'P24,990.00'

const p = document.createElement('p')
p.textContent = `The aluminum case is lightweight and made from 100 percent recycled aerospace-grade alloy. 
The Sport Band is made from a durable yet surprisingly soft high-performance fluoroelastomer, with an innovative pin-and-tuck closure.`

textContainer.appendChild(h1)
textContainer.appendChild(spanContainer)
textContainer.appendChild(priceText)
textContainer.appendChild(p)
imageContainer.appendChild(image)
card.appendChild(imageContainer)
card.appendChild(textContainer)
document.querySelector('.container').appendChild(card)
