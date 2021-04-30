/**
 * Définition des variables
 */

let resize = false
let move = false
let edit = false
let sourisX
let sourisY
let tabPostIt = []
let numCase = 0

/**
 * Ajout d'un post-it
 */

let boutAjout = document.getElementById('ajPost')

let tabCookie = JSON.parse(readCookie("tabPostIt"))

console.log(tabCookie)

for(let i in tabCookie) {
    //console.log(tabCookie[i])
    numCase = tabPostIt.length
    tabPostIt.push(new PostIt(numCase))
    tabPostIt[numCase].majPostIt(tabCookie[i].x, tabCookie[i].y, tabCookie[i].Width, tabCookie[i].Height, tabCookie[i].text, tabCookie[i].Color)
    tabPostIt[numCase].display()
}

boutAjout.addEventListener('click', () => {
    numCase = tabPostIt.length
    tabPostIt.push(new PostIt(numCase))
    tabPostIt[numCase].display()
})

setInterval(inter, 50)

/**
 * Fonction qui insère l'état des variables en temps réel
 */

function inter() {
    document.querySelector('#etaVar').innerHTML = "Move : " + move.toString() + "| Resize : " + resize.toString() + "| Edit : " + edit.toString() + "| SourisX : " + sourisX + "px | SourisY : " + sourisY + "px"
}

/**
 * Gestion du click
 */

document.body.addEventListener('click', () => {
    resize = false
    move = false
    edit = false
})

/**
 * Déplacement et redimensionnement d'un post-it
 */

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

/**
 * Gestion de l'édition avec touches spéciales
 */

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

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/; SameSite=None; Secure";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

setInterval(saveTableau, 1000)

function saveTableau() {
    createCookie("tabPostIt", JSON.stringify(tabPostIt), 7)
}



