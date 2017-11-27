function getFirstSelector(el) {
  return document.querySelector(el)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}
let gn = document.querySelector('#grand-node');
function deepestChild(ch = gn) {
  if (ch.children.length === 0) {
    return ch;
  }
  else {
    return deepestChild(ch.children[0])
  }
}

function increaseRankBy(n) {
  debugger;
  let a = document.querySelectorAll('.ranked-list li');
  a.forEach((e) => {e.innerHTML = ((Number.parseInt(e.innerHTML) + n))})
}
