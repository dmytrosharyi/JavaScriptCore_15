function hideText(){
  var elem = document.getElementById('text');
  elem.style.display = 'none';
}
function hideButton(){
  var elem = document.getElementsByTagName('input')[1];
  elem.style.display = 'none';
}

var menuElem = document.getElementById('university');
var titleElem = menuElem.querySelector('.title');
titleElem.onclick = function(){
  menuElem.classList.toggle('open');
}