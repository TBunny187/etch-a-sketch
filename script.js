const container = document.querySelector('#container');
const content = document.createElement('div');
container.setAttribute('style', 'display: flex; justify-content: space-evenly; flex-wrap: wrap; width: 48px; margin: auto;');
content.setAttribute('style', 'height: 1px; width: 1px; background-color: #c0c0c0; border: 1px solid #000000;')

for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        container.appendChild(content.cloneNode(true));
    }
}