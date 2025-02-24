// Where to add
const placeList = document.getElementById('place-list');
// What to be added
const li = document.createElement('li');
li.innerText = 'Vienna'

// Add the child
placeList.appendChild(li)



// Where to add
const mainContent = document.getElementById('main-content');

// What to be added
const section = document.createElement('section')
const h1 = document.createElement('h1')
h1.innerText = 'Food List'
section.appendChild(h1)

const ul = document.createElement('ul')
const li1 = document.createElement('li')
li1.innerText = 'Biriyani'
ul.appendChild(li1)

const li2 = document.createElement('li')
li2.innerText = 'Borhani'
ul.appendChild(li2)
const li3 = document.createElement('li')
li3.innerText = 'Salad'
ul.appendChild(li3)


section.appendChild(ul)
mainContent.appendChild(section)



// Set innerHTML directly

const sectionDress = document.createElement('section')
sectionDress.innerHTML = 
`
<h1> Dress List </h1>
<ul>
    <li> Jersey </li>
    <li> T-Shirt </li>
    <li> Pant </li>
</ul>
`

mainContent.appendChild(sectionDress)