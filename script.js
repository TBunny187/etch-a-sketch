const container = document.querySelector('#container');
const content = document.createElement('div');
content.classList.add('grid')
container.setAttribute('style', 'display: flex; justify-content: space-evenly; flex-wrap: wrap; width: 1312px; margin: auto;');
//content.setAttribute('style', 'height: 50px; width: 80px; background-color: #c0c0c0; border: 1px solid #000000;')

for(let i = 0; i < 40; i++) {
    for(let j = 0; j < 40; j++) {
        container.appendChild(content.cloneNode(true));
    }
}

const grids = document.querySelectorAll('.grid');
grids.forEach((grid) => {
    grid.addEventListener('mouseover', () => {
        grid.setAttribute('style', 'background-color: red;')
    })
})