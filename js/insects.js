function Insects(x, y, h, w, bg, speed, name) {
    this.x = x;
    this.y = y;
    this.bg = bg;
    this.h = h;
    this.w = w;
    this.speed = speed;
    this.tobeDeleted = false;
    this.element = $("<div>").attr("class", name);
    this.element.css({top: this.y,left: this.x,position: "absolute",background: "url(" + this.bg + ") no-repeat", height: this.h, width: this.w, "background-size": "cover"});
    $("#board").append(this.element);
  }
  
  Insects.prototype.update = function() {
    
    this.x = (this.x + this.speed);
    this.element.css({left: this.x});
  
    if(this.x <= this.end){
    //  $(".insectOne").removeAttr("style");
    //  $(".insectOne").css({"top": Math.ceil(Math.random()* 100) + 150,"left": "950" , "position": "absolute", "background": "url(./img/mosca-i-prueba.png) no-repeat","height": "30px", "width": "30px", "background-size": "cover"});
      

      this.x = 950;
    }

    if(this.x >= 990){
      this.x = 0;
    }
  };