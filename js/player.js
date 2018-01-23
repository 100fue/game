function Player(x,y,bg,name){
    this.x = x;
    this.y = y;
    this.vx = 5;
    this.vy = 5;
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
        this.x += 5,66;
        var a = (this.x - 400)**2;
        this.y = (a-101000)/-301;
        console.log(this.y);
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
// Player.prototype.update = function(){

// }








