function Board(x,y){
    this.x = x;
    this.y = y;
    // this.text = text;
    this.name = name;
    this.contUp = 0;
    this.element = $("<div>").attr("class", name).append("<p>Don Julio Iglesias</p>");
    this.elementSpan = $("<span>").attr("class", "spanOne").text(this.contUp);
    $("#board").append(this.elementSpan);
    this.yes = $("<div>").attr("class", "yes").append("<a href='index.html'>JUGAR OTRA VEZ</a>");
    $("#board").append(this.yes);
    this.no = $("<div>").attr("class", "no").append("<a href='index.html'>JUGAR OTRA VEZ</a>");
    $("#board").append(this.no);
    // this.element.append(this.elementSpan);
    // this.element.css({top: this.y, left: this.x});
    $("#board").append(this.element);
    this.imgCounter = $("<div>").attr("class","countrab");
    $("#board").append(this.imgCounter);

}
Board.prototype.render = function () {
    this.element.css({ bottom: this.y, left: this.x });
}
Board.prototype.sumOne = function () {
    $(".spanOne").text(this.contUp += 1);
}
Board.prototype.restOne = function () {
    $(".spanOne").text(this.contUp -= 1);
}
