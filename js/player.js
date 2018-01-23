function Player(x,y,bg,name){
    this.x = x;
    this.y = y;
    this.vx = 7;
    this.vy = 7;
    this.bg = bg;
    this.element = $("<div>").attr("class", name);
    this.element.css({bottom:this.y, left:this.x, position:"absolute", background: "url(" + this.bg + ") no-repeat", height: "50px", width: "50px", "background-size": "cover"});
    $("#board").append(this.element);
    // this.gravity = 1;
    // this.fps = 60;
}
Player.prototype.moveRight = function(){


    // console.log(this.x);

    // if(this.x > 400){
    //     this.x += 10;
    //     this.y -= 10;
    // }
    // else if(this.y < 50 ){
    //     this.x = 50;
    //     this.y = 50;
    // }
    // else{
    //     this.x += 10;
    //     this.y += 10;
    // }


    // if(this.x > 400){
        
    // }



    // if(this.x < 850){
    //     this.y += 5,66;
    //     this.x = 781,99;
    //     console.log(this.y);
    // }else{
    //     console.log("you cant move");
    // }


    if(this.x < 850){
        this.x += this.vx;
        var a = (this.x - 400)**2;
        this.y = (a-101000)/-301;
        console.log(this.y);
    }
    if(this.y < 50 && this.x > 400){
        this.y = 50;
        this.x = 695;
        this.element.css({"background":"url(./img/rana-i-prueba.png)","background-size":"cover"})
    }
}
Player.prototype.moveLeft = function(){
    if(this.x > 100){
        this.x -= this.vx;
        var a = (this.x - 400)**2;
        this.y = (a-101000)/-301;
        console.log(this.y);
    }
    if(this.y < 50 && this.x < 400){
        this.y =50;
        this.x = 100;
        this.element.css({"background":"url(./img/rana-d-prueba.png)","background-size":"cover"})
    }
    
}
Player.prototype.render = function(){
    this.element.css({bottom:this.y,left:this.x});
}
// Player.prototype.update = function(){

// }








