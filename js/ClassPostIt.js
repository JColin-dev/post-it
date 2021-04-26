class PostIt {
    id;
    Width;
    Height;
    Color;
    x;
    y;

    constructor(id) {
        this.id = id;
        this.Width = 176;
        this.Height = 176;
        this.Color = "blue";
        this.x = 100;
        this.y = 100;
    }

    display() {
        let myPostIt = document.getElementById(this.id)
        if(myPostIt === null) {
            myPostIt = document.createElement('div');
            myPostIt.id = this.id
            document.body.appendChild(myPostIt)
        }

        myPostIt.style.position = "fixed"
        myPostIt.style.width = (+this.Width + "px")
        myPostIt.style.height = (+this.Height + "px")
        myPostIt.style.backgroundColor = this.Color 
        myPostIt.style.top = this.x + "px"
        myPostIt.style.top = this.y + "px"
    }

    move() {

    }

    resize() {

    }
}