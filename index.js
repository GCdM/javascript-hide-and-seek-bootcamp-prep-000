function getFirstSelector(selector) {
  var result = document.querySelector(`${selector}`);
  return result;
}
function nestedTarget() {
  var tofind = document.getElementById('nested').querySelector('div div div div div.target');
  return tofind;
}
function increaseRankBy(n) {
  var lis = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + parseInt(n);
  }
}
function deepestChild() {
  var current = document.getElementById('grand-node');
  
  while (current.hasChildNodes()) {
    current = current.firstChild;
    if (current.firstChild === null) {
      return current.parentElement;
    }
  }
}