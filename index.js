const fruits = [
  { id: 1, title: 'Яблоки', price: 20, img: 'https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348' },
  { id: 2, title: 'Апельсины', price: 30, img: 'https://www.prismamarket.ru/upload/iblock/9c0/2000650200001_Apelsiny.PNG.png' },
  { id: 3, title: 'Манго', price: 42, img: 'https://travel.miruvashihnog.ru/wp-content/uploads/2017/03/mango-1-300x199.jpg' }
]

const toHTML = fruit => `
<div class="col">
  <div class="card">
    <img class="card-img-top" style="height: 300px; width: 400px;" src="${fruit.img}" alt="${fruit.title}"/>
    <div class="card-body">
      <h5 class="card-title">${fruit.title}</h5>
      <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Посмотреть цену</a>
      <a href="#" class="btn btn-danger" data-btn="remove" data-id="${fruit.id}">Удалить</a>
    </div>
  </div>
</div>
`

function render() {
  const html = fruits.map(toHTML).join('') // fruits.map(fruit => toHTML(fruit)).join('')
  document.querySelector('#fruits').innerHTML = html
}

render()

const priceModal = $.modal({
  title: 'Цена на товар',
  closable: true,
  width: '400px',
  footerButtons: [
    {
      text: 'Закрыть', type: 'primary', handler() {
        console.log('Primary btn clicked')
        priceModal.close()
      }
    }
  ]
})

document.addEventListener('click', event => {
  event.preventDefault()
  const btnType = event.target.dataset.btn
  const id = +event.target.dataset.id
  const fruit = fruits.find(f => f.id === id)

  if (btnType === 'price') {
    priceModal.setContent(`
    <p>Цена на ${fruit.title}: <strong>${fruit.price}€</strong></p>
    `)

    priceModal.open()
  } else if (btnType === 'remove') {
    $.confirm({
      title: 'Вы уврены?',
      content: `<p>Вы удаляете фрукт: <strong>${fruit.title}</strong></p>`
    }).then(() => {
      console.log('Remove')
    }).catch(() => {
      console.log('Cancel')
    })
  }

})
