function Player(x,y,bg,name){
    this.x = x;
    this.y = y;
    this.vx = 20;
    this.vy = 20;
    this.bg = bg;
    this.element = $("<div>").attr("class", name);
    this.element.css({bottom:this.y, left:this.x, position:"absolute", background: "url(" + this.bg + ") no-repeat", height: "50px", width: "50px", "background-size": "cover"});
    $("#board").append(this.element);
    // this.gravity = 1;
    // this.fps = 60;
}
Player.prototype.moveRight = function(){

    
    if(this.x < 850){
        this.x += 5,66;
        var a = (this.x - 400)**2;
        this.y = (a-31950)/-71;
    }else{
        console.log("you cant move");
    }
}
Player.prototype.moveLeft = function(){
    this.x -= this.vx;
    this.y -= this.vy;
    
}
Player.prototype.render = function(){
    this.element.css({bottom:this.y,left:this.x});
}








