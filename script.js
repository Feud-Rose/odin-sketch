const boxSideCount = 16
const boxCount = boxSideCount * boxSideCount
console.log(boxCount)
const container = document.querySelector('.container')
console.log(container)
let widHigh = 960 / boxSideCount
console.log(widHigh)

for ( let i = 0; i < boxCount; i++) {
    let box = document.createElement('div')
    box.classList.add('box');
    box.style.minWidth = widHigh + 'px';
    box.style.minHeight = widHigh + 'px';
    container.appendChild(box)

}