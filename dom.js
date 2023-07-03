//console.dir(document);
//console.log(document.domain);
//console.log(document.URL)

/*var header=document.getElementById('main-header')
header.style.borderBottom='solid 3px #000'
var title = document.querySelector('.title');
title.style.color = 'green'; 
title.textContent = 'ADD ITEMS';*/

/*var item=document.getElementsByClassName('list-group-item')
console.log(item)
item[2].style.backgroundColor='green'
for(var i=0;i<item.length;i++)
{
    item[i].style.fontWeight='bold';
    item[i].style.color='purple'
}*/


//GETELEMENTBYCLASS
 /*var li=document.getElementsByTagName('li')
 console.log(li)
 
 console.log(li[1])
 li[1].textContent='Hello 2'
 li[1].style.fontWeight='bold'
 li[1].style.backgroundColor='green'
 
 for(var i=0;i<li.length;i++)
 {
    li[i].style.backgroundColor='#f4f4f4'
 }

 //QUERYSELECTOR
 
 const thirdItem = document.querySelector('.list-group-item:nth-child(3)');


thirdItem.style.display = 'none';
const secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

//QUERYSELECTORALL
const itemList=document.querySelectorAll('#items li')
itemList[1].style.color='green'

var odd=document.querySelectorAll("li:nth-child(odd)")
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green'
}*/

//TRAVERSINGTHEDOM
var itemList=document.querySelector('#items')
//console.log(itemList.parentNode);

//parentElement
//console.log(itemList.parentElement)
//itemList.parentElement.style.backgroundColor='#f4f4f4'
//console.log(itemList.parentElement.parentElement)

//childNode
//console.log(itemList.childNodes)

//children
//console.log(itemList.children)
//console.log(itemList.children[1])

//FirstChild
//console.log(itemList.firstChild);
//console.log(itemList.firstElementChild)
//itemList.firstElementChild.textContent='Hello1'

//lastchild
//console.log(itemList.lastChild)
//console.log(itemList.lastElementChild)
//itemList.lastElementChild.textContent='hello4'

//nextsibling
//console.log(itemList.nextSibling)
//console.log(itemList.nextElementSibling)

//previousSiblings
//console.log(itemList.previousSibling)
//console.log(itemList.previousElementSibling)

//createDiv
/*var newDiv=document.createElement('div');
 var newDivText=document.createTextNode('HEllo')
 newDiv.appendChild(newDivText)

 var container=document.querySelector('header .container')
 var h1=document.querySelector('header h1')
 
 console.log(newDiv)
 container.insertBefore(newDiv,h1)*/


var newDivnext=document.createElement('ul')
 var nextDivText=document.createTextNode('HEllo')
 newDivnext.appendChild(nextDivText)
 var p=document.querySelector('items .list-group')
 var h2=document.querySelector('items .list-group-item')
 console.log(newDivnext)
 p.insertBefore(newDivnext,h2)






 

