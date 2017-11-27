function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.getElementById('nested')
}

function deepestChild() {
  return Array.from(document.querySelectorAll('#grand-node div')).map(function(node) {return node})[3]
}

function increaseRankBy(n) {
   const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
   for (let i = 0; i < lis.length; i++) {
     lis[i].innerHTML = parseInt(lis[i].innerHTML) + n 
   }

   return lis

}
