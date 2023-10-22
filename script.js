const container = document.querySelector('.container')
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


addEventListener("mouseover", (e) => {
    let targetDiv = e.target
    let targetClass = e.target.classList.contains('box')
    if (targetClass) {
        let isItBright = e.target.classList.contains('bright')
        
        targetDiv.classList.add('bright')
        if (isItBright) {
            let bright = getComputedStyle(targetDiv).getPropertyValue('filter')
            //console.log(bright)
            let newBrightness = lowerBrightness(bright)
            //console.log(newBrightness)
            e.target.style.filter = 'brightness(' + newBrightness + ')'
        }
        else {
            let hue= Math.floor(Math.random()*300)
            let sat = Math.floor(Math.random()*100)
            let light = Math.floor(Math.random()*100)
            
            targetDiv.style.backgroundColor = 'hsl('+ hue + ', ' + sat + '%, ' + light + '%)'
            targetDiv.style.filter = 'brightness(100%)'
        }

}
})


function lowerBrightness(val) {
    let brightArray = val.split("")
    //console.log(brightArray)
    for ( i = 0; i < 11; i++) {
        brightArray.shift()
    }
    //console.log(brightArray)
    let popped = brightArray.pop()
    //console.log(brightArray);
    let brightInt = brightArray.join("")
    //console.log(brightInt)
    if (brightInt >= 0.1) {
        brightInt -= 0.1;
        console.log(brightInt)
        return brightInt
    }
    else if (brightInt > 0 && brightInt < 0.1) {
        brightInt -= brightInt;
        console.log(brightInt)
        return brightInt
    }
}