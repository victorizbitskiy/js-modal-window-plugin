const fruits = [
  { id: 1, title: 'Яблоки', price: 20, img: 'https://e1.edimdoma.ru/data/ingredients/0000/2374/2374-ed4_wide.jpg?1487746348' },
  { id: 1, title: 'Апельсины', price: 20, img: 'https://www.prismamarket.ru/upload/iblock/9c0/2000650200001_Apelsiny.PNG.png' },
  { id: 1, title: 'Манго', price: 20, img: 'https://travel.miruvashihnog.ru/wp-content/uploads/2017/03/mango-1-300x199.jpg' }
]

const toHTML = fruit => `
<div class="col">
  <div class="card">
    <img class="card-img-top" style="height: 300px; width: 400px;" src="${fruit.img}" alt="${fruit.title}"/>
    <div class="card-body">
      <h5 class="card-title">${fruit.title}</h5>
      <a href="#" class="btn btn-primary">Посмотреть цену</a>
      <a href="#" class="btn btn-danger">Удалить</a>
    </div>
  </div>
</div>
`

function render() {
  const html = fruits.map(toHTML).join('') // fruits.map(fruit => toHTML(fruit)).join('')
  document.querySelector('#fruits').innerHTML = html
}

render()

const modal = $.modal({
  title: 'Victor Modal',
  closable: true,
  content: `
  <p>lorem ipsum dolor sit.</p>
  <p>lorem ipsum dolor sit.</p>
  `,
  width: '400px',
  footerButtons: [
    {
      text: 'Ok', type: 'primary', handler() {
        console.log('Primary btn clicked')
        modal.close()
      }
    },
    {
      text: 'Cancel', type: 'danger', handler() {
        console.log('Danger btn clicked')
        modal.close()
      }
    },

  ]
})
