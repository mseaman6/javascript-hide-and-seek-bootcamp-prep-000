function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested.target');
  //what does "pull out of" mean
}

function increaseRankBy(n) {
  const rankedLis = document.querySelectorAll('ul.ranked-list li');
  for(var i=0; i<rankedLis.length; i++) {
    rankedLis[i].innerHTML = parseInt(rankedLis[i].innerHTML) + n;
  }
}

function deepestChild() {
  const childs = document.getElementById('grand-node').querySelectorAll();
  let next = [];
  for(var i=0; i<childs.length; i++) {
    if (childs[i].children !== undefined) {
      next.push(childs[i].children);
    }
    childs = childs.shift();
  }
}

//other questions: what is the difference between const = and var = and let =

