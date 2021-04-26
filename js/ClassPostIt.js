class PostIt {
    Width;
    Height;
    Color;
    Position;

    constructor(width, height, color, position) {
        this.Width = width;
        this.Height = height;
        this.Color = color;
        this.Position = position;
    }

    display() {
        let myPostIt = document.createElement('div');
        myPostIt.classList.add('postit')

        div.style.width = (+this.Width + px)
        div.style.height = (+this.Height + px)
        div.style.color = this.Color 

        div.appendChild(myPostIt)
    }

    move() {

    }

    resize() {

    }
}