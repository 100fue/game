function Insects(x, y, bg, speed) {
    this.x = x;
    this.y = y;
    this.bg = bg;
    this.speed = speed;
    this.tobeDeleted = false;
    this.element = $("<div>").attr("class", "insectOne");
    this.element.css({top: this.y,left: this.x,position: "absolute",background: "url(" + this.bg + ") no-repeat", height: "30px", width: "30px", "background-size": "cover"});
    $("#board").append(this.element);
  }
  
  Insects.prototype.update = function() {
    this.x = (this.x - this.speed);
    this.element.css({left: this.x});
  
    // if(this.x == -150){
    //   this.x = (this.x - this.speed);
    //   this.element.css({left: this.x--});
    // }
    // if(this.y > $("#board").height()+this.element.height()){
    //   this.element.remove();
    //   this.tobeDeleted = true;
    // }
  };