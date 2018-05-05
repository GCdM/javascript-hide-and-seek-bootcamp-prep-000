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
  function isParent(element) {
    var bool = element.hasChildNodes();
    return bool;
  }
  var current = document.getElementById('grand-node');
  var next = [];
  while (current.childNodes.length > 0) {
    current = current.querySelector('div');
  }
  return current;
}