
function getFirstSelector(selector){
  return document.querySelector(selector);
}

function nestedTarget(){
  return document.querySelector('#nested .target');
}

function increaseRankBy(n){
  const list = document.querySelectorAll('ul.ranked-list li');
  for(let i=0; i<list.length; i++){
    let li = parseInt(list[i].textContent);
    list[i].textContent = li + n
  }

}

function deepestChild(){
  return document.querySelector('#grand-node div div div div')
}
