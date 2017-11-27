function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function deepestChild() {
  return document.querySelector('#grand-node div div div div');
}

function increaseRankBy(n) {
  let ranks = document.querySelectorAll('.ranked-list li')
  for(let i = 0; i < ranks.length; i++) {
    let rank = parseInt(ranks[i].textContent);
    ranks[i].textContent = rank + n;
  }
}
