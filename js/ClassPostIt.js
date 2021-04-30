/**
 * @class Définition de la classe PostIt
 */

class PostIt {
    id;
    Width;
    Height;
    Color;
    x;
    y;
    text;
    largeurInit;
    hauteurInit;
    sourisXInit;
    sourisYInit;

    /**
     * Constructeur qui n'a qu'un seul paramètre, l'ID
     * @param {Number} id 
     */

    constructor(id) {
        this.id = id;
        this.Width = 176;
        this.Height = 176;
        this.Color = "blue";
        this.x = 1020;
        this.y = 20;
        this.text = "";
    }

    /**
     * Fonction qui permet l'affichage d'un post-it 
     */

    display() {
        let myPostIt = document.getElementById(this.id)
        if (myPostIt === null) {
            myPostIt = document.createElement('div');
            myPostIt.id = this.id
            document.body.appendChild(myPostIt)

            myPostIt.addEventListener('dragend', (e) => {
                this.x = e.screenX - Math.floor(this.Width / 2)
                this.y = e.screenY - Math.floor(this.Height / 2)
                this.display()
            })
        }

        /**
         * Définition du style du post-it
         */

        myPostIt.draggable = true
        myPostIt.innerHTML = this.text
        myPostIt.style.position = "fixed"
        myPostIt.style.width = (+this.Width + "px")
        myPostIt.style.height = (+this.Height + "px")
        myPostIt.style.backgroundColor = this.Color
        myPostIt.style.left = this.x + "px"
        myPostIt.style.top = this.y + "px"
        myPostIt.style.fontSize = 30 + "px"
        myPostIt.style.wordWrap = "break-word"

        /**
         * Affichage du menu du post-it
         */

        let menu = document.createElement('div')
        menu.style.height = '20px'
        menu.style.border = '1px solid black'
        menu.style.position = 'absolute'
        menu.style.width = "100px"
        menu.style.bottom = '0'
        menu.style.right = '0'
        myPostIt.appendChild(menu)

        /**
         * Création des boutons du menu du post-it
         */

        let bout1 = document.createElement('i')
        bout1.classList.add('fas')
        bout1.classList.add('fa-arrows-alt')
        bout1.addEventListener('click', (e) => {
            move = true
            numCase = this.id
            e.stopPropagation()
        })
        menu.appendChild(bout1)
        let bout2 = document.createElement('i')
        bout2.classList.add('fas')
        bout2.classList.add('fa-expand-alt')
        bout2.addEventListener('click', (e) => {
            numCase = this.id
            resize = true
            this.largeurInit = this.Width
            this.hauteurInit = this.Height
            this.sourisXInit = sourisX
            this.sourisYInit = sourisY
            e.stopPropagation()
        })
        menu.appendChild(bout2)
        let bout3 = document.createElement('i')
        bout3.classList.add('far')
        bout3.classList.add('fa-edit')
        bout3.addEventListener('click', (e) => {
            numCase = this.id
            edit = true
            e.stopPropagation()
        })
        menu.appendChild(bout3)
    }

    /**
     * Fonction de déplacement d'un post-it
     * @param {Number} newX - Nouvelle position du post-it sur l'axe des abscisses
     * @param {Number} newY - Nouvelle position du post-it sur l'axe des ordonnées
     */

    move(newX, newY) {
        this.x = newX
        this.y = newY
    }

    /**
     * Fonction permettant le redimensionnement d'un post-it
     * @param {Number} newWidth - Nouvelle largeur
     * @param {Number} newHeight - Nouvelle hauteur
     */

    resize(newWidth, newHeight) {
        this.Width = newWidth
        this.Height = newHeight
    }


    /**
     * Fonction qui permet d'éditer un texte
     * @param {Text} text - Nouveau texte
     */

    editText(text) {
        this.text = text
    }

    majPostIt(x,y, Width, Height, text, Color) {
        this.x = x
        this.y = y
        this.Width = Width
        this.Height = Height
        this.Color = Color
        this.text = text
    }
}

