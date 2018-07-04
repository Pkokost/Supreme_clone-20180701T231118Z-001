
var Summ_item = document.querySelector('ul').children.length;
var listItem = document.getElementsByClassName('gallery-list');
for(i=0; i<listItem[0].children.length;i++){
(function(i) {
listItem[0].children[i].onmouseover = function() { 
document.getElementById('item-number').innerHTML = i + 1 +'/' + Summ_item;
}
}(i));
}