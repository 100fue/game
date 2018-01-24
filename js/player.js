function Player(x, y, bg, name) {
    this.x = x;
    this.y = y;
    this.vx = 7;
    this.vy = 7;
    this.bg = bg;
    this.frogInAir = [false, false];
    this.element = $("<div>").attr("class", name);
    this.element.css({ bottom: this.y, left: this.x, position: "absolute", background: "url(" + this.bg + ") no-repeat", height: "50px", width: "50px", "background-size": "cover" });
    $("#board").append(this.element);
    this.canIExecute=true;
}
Player.prototype.moveRightOne = function () {
        if (this.x < 900) {
            this.x += this.vx;
            var a = (this.x - 400) ** 2;
            this.y = (a - 101000) / -301;
        }
        if (this.y < 50 && this.x > 400) {
            this.y = 50;
            this.x = 695;
            this.element.css({ "background": "url(./img/rana-i-prueba.png)", "background-size": "cover" });
            this.element.removeClass("right").addClass("left");
            this.frogInAir[0] = false;
        }
}
Player.prototype.moveLeftOne = function () {
        if (this.x > 100) {
            this.x -= this.vx;
            var a = (this.x - 400) ** 2;
            this.y = (a - 101000) / -301;
        }
        if (this.y < 50 && this.x < 400) {
            this.y = 50;
            this.x = 100;
            this.element.css({ "background": "url(./img/rana-d-prueba.png)", "background-size": "cover" });
            this.element.removeClass("left").addClass("right");
            this.frogInAir[1] = false;
        }
}
Player.prototype.moveRightTwo = function () {
    if (this.x < 900) {
        this.x += this.vx;
        var a = (this.x - 400) ** 2;
        this.y = (a - 101000) / -301;
    }
    if (this.y < 50 && this.x > 400) {
        this.y = 50;
        this.x = 750;
        this.element.css({ "background": "url(./img/rana-i-prueba.png)", "background-size": "cover" });
        this.element.removeClass("right").addClass("left");
        this.frogInAir[0] = false;
    }
}
Player.prototype.moveLeftTwo = function () {
    if (this.x > 100) {
        this.x -= this.vx;
        var a = (this.x - 400) ** 2;
        this.y = (a - 101000) / -301;
    }
    if (this.y < 50 && this.x < 400) {
        this.y = 105;
        this.x = 100;
        this.element.css({ "background": "url(./img/rana-d-prueba.png)", "background-size": "cover" });
        this.element.removeClass("left").addClass("right");
        this.frogInAir[1] = false;
    }
    console.log(this.y);
}
Player.prototype.render = function () {
    this.element.css({ bottom: this.y, left: this.x });
}
Player.prototype.delay = function(){
    this.canIExecute = false
    var that = this;
    setTimeout(function(){
        that.canIExecute = true;
    },2050)
}







