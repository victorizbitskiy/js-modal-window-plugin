const modal = $.modal({
  title: 'Victor Modal',
  closable: true,
  content: `
  <p>lorem ipsum dolor sit.</p>
  <p>lorem ipsum dolor sit.</p>
  `,
  width: '400px',
  footerButtons: [
    {text: 'Ok', type: 'primary', handler() {
      console.log('Primary btn clicked')
      modal.close()
    }},
    {text: 'Cancel', type: 'danger', handler() {
      console.log('Danger btn clicked')
      modal.close()
    }},

  ]
})