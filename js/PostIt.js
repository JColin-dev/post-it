let resize = false
let move = false
let edit = false
let sourisX
let sourisY
let tabPostIt = []
let numCase = 0

let boutAjout = document.getElementById('ajPost')
boutAjout.addEventListener('click', () => {
    numCase = tabPostIt.length
    tabPostIt.push(new PostIt(numCase))
    tabPostIt[numCase].display()
})



setInterval(inter, 50)

function inter() {
    document.querySelector('#etaVar').innerHTML = "Move : " + move.toString() + "| Resize : " + resize.toString() + "| Edit : " + edit.toString() + "| SourisX : " + sourisX + "px | SourisY : " + sourisY + "px"
}

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
        tabPostIt[numCase].move(e.clientX - 20, e.clientY - 20)
        tabPostIt[numCase].display()
    } else if (resize == true) {
        tabPostIt[numCase].resize(tabPostIt[numCase].largeurInit + (e.clientX - tabPostIt[numCase].sourisXInit),
            tabPostIt[numCase].hauteurInit + 25 + (e.clientY - tabPostIt[numCase].sourisYInit))
        tabPostIt[numCase].display()
    }
})

document.body.addEventListener('keydown', (e) => {
    console.log(e)
    if (edit == true) {
        if (e.key == 'Backspace') {
            tabPostIt[numCase].editText(tabPostIt[numCase].text.substr(0, tabPostIt[numCase].text.length - 1))
            tabPostIt[numCase].display()
        } else if (e.key == 'Enter') {
            tabPostIt[numCase].editText(tabPostIt[numCase].text + '</br>')
            tabPostIt[numCase].display()
        } else if (e.key == 'Shift') {

        } else if (e.key == ' ') {
            tabPostIt[numCase].editText(tabPostIt[numCase].texte + "&nbsp;")
            tabPostIt[numCase].display()
        } else {
            tabPostIt[numCase].editText(tabPostIt[numCase].text + e.key)
            tabPostIt[numCase].display()
        }
    }
})



