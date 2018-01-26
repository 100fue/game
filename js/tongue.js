function Tongue(x,y,name){
    this.x = x;
    this.y = y;
    this.h = 0;
    this.w = 0;
    this.element = $("<div>").attr("class", name);
    this.element.css({position: "absolute", height: this.h, width: this.w,background: "red"});
    $("#board").append(this.element);
}
Tongue.prototype.tongueOut = function (){

    this.h = 5 + "px";
    this.w = 60 + "px";
}
Tongue.prototype.tongueIn = function (){
    this.h = 0;
    this.w = 0;
}

Tongue.prototype.render = function (x,y){
    if($("div").hasClass("right")){
        this.element.css({height:this.h,width:this.w,bottom: y + 34,left: x + 25});
        
    }

    if($("div").hasClass("left")){
        this.element.css({height:this.h,width:this.w,bottom: y + 34,left: x - 35});
        
    }

}