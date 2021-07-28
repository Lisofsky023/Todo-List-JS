const input = document.querySelector('#input')
const btn = document.querySelector('#btn')
const result = document.querySelector('#result')
const total = document.querySelector('#total')
let i = 0;

btn.addEventListener('click', (e) => {
  if (input.value === '') return
  createDeleteElements(input.value)
  input.value = ''
  console.log(input.value)
})

// create and delet todo
function createDeleteElements(value) {
  debugger;
  i++  
  const btn = document.createElement('button')
  const li = document.createElement('li')
  
  li.className = 'li'
  li.textContent = value

  btn.className = 'btn'
  btn.textContent = 'delete'
  li.appendChild(btn)
  
  // remove todo
  btn.addEventListener('click', (e) => {

    i--
    total.textContent = i
    result.removeChild(li)
  })
  debugger;
  // toggle class active
  li.addEventListener('click', (e) => {
    li.classList.toggle('li-active')
  })

  total.textContent = i 
   
  result.appendChild(li)
}

