let resize = false
let move = false
let edit = false
let sourisX
let sourisY


let myPostIt = new PostIt("un");

myPostIt.display()

/*myPostIt.move(50, 50)
myPostIt.display()

myPostIt.resize(200, 200)
myPostIt.display()

myPostIt.modifText("Premier texte")
myPostIt.display()

myPostIt.modifColor("darkblue")
myPostIt.display()
*/


document.body.addEventListener('click', () => {
    resize = false
    move = false
    edit = false
})

document.body.addEventListener('mousemove', (e) => {
    sourisY = e.clientY
    sourisX = e.clientX
    if (move == true) {
        myPostIt.move(e.clientX - 20, e.clientY - 20)
        myPostIt.display()
    } else if (resize == true) {
        myPostIt.resize(myPostIt.largeurInit + (e.clientX - myPostIt.sourisXInit),
            myPostIt.hauteurInit + 25 + (e.clientY - myPostIt.sourisYInit))
        myPostIt.display()
    }
})


