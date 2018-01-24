function Board(x,y,name,text,span){
    this.x = x;
    this.y = y;
    this.text = text;
    this.name = name;
    this.contUp = 0;
    this.element = $("<div>").attr("class", name).text(this.text);
    this.elementSpan = $("<span>").attr("class", span).text(this.contUp);
    this.element.append(this.elementSpan);
    this.element.css({top: this.y, left: this.x});
    $("#board").append(this.element);
}
Board.prototype.render = function () {
    this.element.css({ bottom: this.y, left: this.x });
}
Board.prototype.sumOne = function () {
    $(".contOne").text(this.contUp += 1);
}
