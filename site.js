//Get element by id

const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

//select all element in the id and image
const img = document.querySelectorAll('#imgs img')


//Assign a variable idx to 0
let idx = 0

let interval = setInterval(run, 2000)

//Declare a function to take in the loop
function run() {
    idx++
    changeImage()
}

//Declaring an if statement in a function 
function changeImage() {
    if (idx > img.length - 1){
            idx = 0
    } else if(idx < 0){
        idx = img.length - 1
    }

    //applying styling to the const variable
    imgs.style.transform = `translateX(${-idx * 500}px)`
}



function resetInterval (){
    clearInterval(interval)
    interval = setInterval(run, 2000)
}


//Adding an event listener click to perform an action

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})



