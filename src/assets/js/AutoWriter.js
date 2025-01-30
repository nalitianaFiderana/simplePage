class AutoWriter {
    constructor(containerId, text, speed = 100) {
        this.container = document.getElementById(containerId);
        this.text = text;
        this.index = 0;
        this.speed = speed;
        this.container.innerHTML = "";
    }

    start() {
        return this.writeText();
    }

    writeText() {
        if (this.index < this.text.length) {
            this.container.innerHTML += this.text.charAt(this.index);
            this.index++;
            setTimeout(() => this.writeText(), this.speed);
            return false;
        }else{clearTimeout();return true;}
    }
    
}

export default AutoWriter;