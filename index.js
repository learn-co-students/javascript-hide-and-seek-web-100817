
function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return  document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let ranked = document.querySelectorAll('.ranked-list')
  // debugger;
    for (var i = 0; i < ranked.length; i++) {
      let ranks = ranked[i].children

      for (var j = 0; j < ranks.length; j++) {
        ranks[j].innerHTML = parseInt(ranks[j].innerHTML)+n
      }
    }
}

function deepestChild() {
  let nested = document.getElementById('grand-node');
  let nest = nested.querySelectorAll('div');
  // debugger;
  return nest[nest.length-1]
}
