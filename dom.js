//console.dir(document);
//console.log(document.domain);
//console.log(document.URL)

/*var header=document.getElementById('main-header')
header.style.borderBottom='solid 3px #000'
var title = document.querySelector('.title');
title.style.color = 'green'; 
title.textContent = 'ADD ITEMS';*/

var item=document.getElementsByClassName('list-group-item')
item[2].style.backgroundColor='green'
for(var i=0;i<item.length;i++)
{
    item[i].style.fontWeight='bold';
    item[i].style.color='purple'
}


