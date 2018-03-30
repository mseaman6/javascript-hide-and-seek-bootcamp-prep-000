function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target');
}

function increaseRankBy(n) {
  const rankedLis = document.querySelectorAll('ul.ranked-list li');
  for(var i=0; i<rankedLis.length; i++) {
    rankedLis[i].innerHTML = parseInt(rankedLis[i].innerHTML) + n;
  }
}

function deepestChild() {
  let parentNode = document.getElementById('grand-node');
  var childNode = parentNode.children;
  if(childNode !== undefined) {
    parentNode = childNode;
  } else {
    return parentNode;
  }
}

