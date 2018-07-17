function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested div div div .target');
}

function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li');
  lis.forEach(li => li.innerHTML = parseInt(li.innerHTML) + parseInt(n));
}

function deepestChild() {
  let element = document.querySelector('#grand-node');

  while (element.querySelector('div') !== null) {
    element = element.querySelector('div');
  }

  return element;
}






// function getFirstSelector(selector) {
//   var result = document.querySelector(`${selector}`);
//   return result;
// }
// function nestedTarget() {
//   var tofind = document.getElementById('nested').querySelector('div div div div div.target');
//   return tofind;
// }
// function increaseRankBy(n) {
//   var lis = document.querySelectorAll('ul.ranked-list li');
//   for (var i = 0; i < lis.length; i++) {
//     lis[i].innerHTML = parseInt(lis[i].innerHTML) + parseInt(n);
//   }
// }
// function deepestChild() {
//   var current = document.getElementById('grand-node')
//
//   while (current.hasChildNodes() && current.querySelector('div') !== null) {
//       current = current.querySelector('div')
//   }
//   return current;
// }
