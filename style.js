const sections = document.querySelectorAll('section');
for (const section of sections) {
   section.style.border = '2px solid blue'
   section.style.marginBottom = '5px'
   section.style.borderRadius = '15px'
   section.style.paddingLeft = '10px'
   section.style.backgroundColor = 'antiquewhite'
}

const placeContainer = document.getElementById('place-container');
// placeContainer.style.backgroundColor = 'burlywood'
placeContainer.classList.add('bg')
placeContainer.classList.remove('large-text')