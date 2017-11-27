function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  let nested = document.getElementById('nested')
  return nested
}

function deepestChild(){
  let start = document.getElementById('grand-node')
  let child = start.children[0]
  let child2 = child.children[0]
  let child3 = child.children[0]
  let child4 = child3.children[0]
  let child5 = child4.children[0]
  return child5
}

function increaseRankBy(n){
  const lis = document.querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (parseInt(i) + n)
  }
}
