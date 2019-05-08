var mainDiv = document.getElementsByTagName('div')[0]
mainDiv.setAttribute('class', 'container-fluid p-0')

// DIV 1
var div1 = document.createElement('div');
div1.setAttribute('class', 'mb-4 bg-primary text-white d-flex inline-block');

var h1 = document.createElement('h1')
h1.setAttribute('class', 'p-3')
h1.textContent = "HighOnCoding";
div1.appendChild(h1);

var h2 = document.createElement('h1');
h2.setAttribute('class', 'p-3');
h2.setAttribute('style', 'font-size: 1.5em;')
h2.textContent = 'Home';
div1.appendChild(h2);

var h3 = document.createElement('h1');
h3.setAttribute('class', 'p-3')
h3.setAttribute('style', 'font-size: 1.5em; font-weight: normal')
h3.textContent = 'Categories';
div1.appendChild(h3);

mainDiv.appendChild(div1);

// DIV 2
var div2 = document.createElement('div');
div2.setAttribute('class', 'mb-4 container p-5 bg-secondary text-dark')

var h4 = document.createElement('h2');
h4.setAttribute('class', 'pb-3')
h4.textContent = "Curse of the Current Reviews"
div2.appendChild(h4);

var text1 = document.createElement('p');
text1.textContent = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews."
div2.appendChild(text1);

mainDiv.appendChild(div2)

// DIV 3
var div3 = document.createElement('div');
div3.setAttribute('class', 'mb-4');

var h5 = document.createElement('h2');
h5.setAttribute('class', 'text-primary pb-2');
h5.textContent = "Hello WatchKit";
div3.appendChild(h5);


mainDiv.appendChild(div3);


// var ul = document.createElement('ul');

// var li1 = liTag("hot", "<em>fresh</em> figs", "one");
// ul.appendChild(li1);

// var li2 = liTag()

// function divTag(className, innerHTML, idName){
//     var li = document.createElement('li');
//     li.id = idName;
//     li.className = className;
//     li.innerHTML = innerHTML;
// }