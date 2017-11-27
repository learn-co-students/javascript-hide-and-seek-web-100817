function getFirstSelector(selector){return document.querySelector(selector)}

function nestedTarget(){return document.getElementById('nested')}

function increaseRankBy(n){
  let ranks = document.querySelectorAll('.ranked-list')

  ranks.forEach(rank => {
    rank.children.forEach = Array.prototype.forEach
    rank.children.forEach(child => child.innerHTML = parseInt(child.innerHTML) + n)
   })
}

function deepestChild(){
  let grandNode = document.querySelectorAll('#grand-node div');

  return grandNode[grandNode.length -1];
}
