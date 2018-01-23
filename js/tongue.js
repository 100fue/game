function Tongue(x,y,name){
    this.x = x;
    this.y = y;
    this.h = 0;
    this.w = 0;
    this.element = $("<div>").attr("class", name);
    this.element.css({top: this.y,left: this.x,position: "absolute", height: this.h, width: this.w,background: "red"});
    $("#board").append(this.element);
}
Tongue.prototype.tongueOut = function (){
    this.h = 5 + "px";
    this.w = 30 + "px";
}
Tongue.prototype.tongueIn = function (){

}
Tongue.prototype.render = function (){
    this.element.css({bottom:this.y,left:this.x});
}