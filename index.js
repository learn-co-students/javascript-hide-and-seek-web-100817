function getFirstSelector(selector) {
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  let rankedLists = document.querySelectorAll('.ranked-list')
  for (var i = 0; i < rankedLists.length; i++) {
    let rankedList = rankedLists[i]
    for(var j = 0; rankedList.length; j++){
      console.log(rankedList[j])
      rankedList[j].innerHTML = parseInt(rankedList[j].innerHTML) + n
      console.log(rankedList[j])
    }
  }
}



