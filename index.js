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
  
}

//other questions: what is the difference between const = and var = and let =