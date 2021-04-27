class PostIt {
    id;
    Width;
    Height;
    Color;
    x;
    y;
    text;

    constructor(id) {
        this.id = id;
        this.Width = 176;
        this.Height = 176;
        this.Color = "blue";
        this.x = 50;
        this.y = 50;
        this.text = "";
    }

    display() {
        let myPostIt = document.getElementById(this.id)
        if(myPostIt === null) {
            myPostIt = document.createElement('div');
            myPostIt.id = this.id
            document.body.appendChild(myPostIt)
        }

        
        myPostIt.draggable =true
        myPostIt.innerHTML = this.text
        myPostIt.style.position = "fixed"
        myPostIt.style.width = (+this.Width + "px")
        myPostIt.style.height = (+this.Height + "px")
        myPostIt.style.backgroundColor = this.Color 
        myPostIt.style.left = this.x + "px"
        myPostIt.style.top = this.y + "px"
    }

    move(newX, newY) {
        this.x = newX
        this.y = newY
    }

    resize(newWidth, newHeight) {
        this.Width = newWidth
        this.Height = newHeight
    }

    modifText(text) {
        this.text = text
    }

    modifColor(color) {
        this.Color = color
    }
    
}