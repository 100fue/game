function Game() {

    this.player1 = new Player(100, 50, "./img/rana-d-prueba.png", "playerOne right", 50, 50);
    // this.insectLeft = new Insects(950,Math.ceil(Math.random()* 100) + 150,30+"px",30+"px","./img/mosca-i-prueba.png",(Math.ceil(Math.random()*3)*-1),"insect");
    // this.insectRight = new Insects(0,Math.ceil(Math.random()* 100) + 150,30+"px",30+"px","./img/mosca-d-prueba.png", Math.ceil(Math.random()*2)+3, "insect");
    // this.monster1 = new Insects(950,Math.ceil(Math.random()* 100) + 150,50+"px",50+"px","./img/bee-i-prueba.png", Math.ceil(Math.random()*2)+3, "monster");
    this.tongue1 = new Tongue(this.player1.x + 35, this.player1.y + 42, "tongueOne");
    this.cont1 = new Board(50, 50, "contOne", "Paco", "spanOne");
    this.insects = [
        new Insects(950, Math.ceil(Math.random() * 100) + 150, 30 + "px", 30 + "px", "./img/mosca-i-prueba.png", (Math.ceil(Math.random() * 3) * -1), "insect",1),
        new Insects(950, Math.ceil(Math.random() * 100) + 150, 30 + "px", 30 + "px", "./img/mosca-i-prueba.png", (Math.ceil(Math.random() * 3) * -1), "insect",2)
    ];

}
Game.prototype.startGame = function () {

}
Game.prototype.endGame = function () {

}
Game.prototype.createInsects = function () {
    for (var i = 0; i < 4; i++) {
        var insectLeft = new Insects(950, Math.ceil(Math.random() * 100) + 150, 30 + "px", 30 + "px", "./img/mosca-i-prueba.png", (Math.ceil(Math.random() * 3) * -1), "insect");
        this.insects.push(insectLeft);
    }
}
Game.prototype.eliminateInsects = function () {
    $(".insect").remove();
}
