const list = document.querySelector("ul")
console.log(list)

let picked = null
let pickedIndex = null
list.addEventListener("dragstart", (e) => {
  const obj = e.target
  picked = obj
  pickedIndex = [...obj.parentNode.children].indexOf(obj)
  //console.log([...obj.parentNode.children]. indexOf(obj))
})

list.addEventListener("dragover", (e) => {
  e.preventDefault()
  //console.log(e)
})

list.addEventListener("drop", (e) => {
  const obj = e.target
  const index = [...obj.parentNode.children].indexOf(obj)
  
  if(index > pickedIndex) {
    obj.after(picked)
  }
  else{
    obj.before(picked)
  }
})