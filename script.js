const container = document.querySelector('.container')
console.log(container)
let userChoice = 0


const resetButton = document.querySelector('button')
resetButton.onclick = function(){
    while (container.hasChildNodes()) {
    container.removeChild(container.firstChild)
    }
    let userChoice = prompt ('How many squares per side (<=100) would you like?')
        if (userChoice > 100) {
            userChoice = 0
            alert("Please try again with a number less than 100.")
        }
    let boxSideCount = userChoice
    let boxCount = boxSideCount * boxSideCount
    console.log(boxCount)
    let widHigh = 960 / boxSideCount
    console.log(widHigh)
     
    
    for ( let i = 0; i < boxCount; i++) {
            let box = document.createElement('div')
            box.classList.add('box');
            box.style.minWidth = widHigh + 'px';
            box.style.minHeight = widHigh + 'px';
            container.appendChild(box)
    }
            
}

onmouseover = (e) => {
    if (e.target.classList == 'box') {
    e.target.classList.add('painted')}
};
