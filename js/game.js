function Game() {

    this.player1 = new Player(100, 50, "./img/rana-d-prueba.png", "playerOne right", 50, 50);
    // this.insectLeft = new Insects(950,Math.ceil(Math.random()* 100) + 150,30+"px",30+"px","./img/mosca-i-prueba.png",(Math.ceil(Math.random()*3)*-1),"insect");
    // this.insectRight = new Insects(0,Math.ceil(Math.random()* 100) + 150,30+"px",30+"px","./img/mosca-d-prueba.png", Math.ceil(Math.random()*2)+3, "insect");
    // this.monster1 = new Insects(950,Math.ceil(Math.random()* 100) + 150,50+"px",50+"px","./img/bee-i-prueba.png", Math.ceil(Math.random()*2)+3, "monster");
    this.tongue1 = new Tongue(this.player1.x + 35, this.player1.y + 42, "tongueOne");
    this.cont1 = new Board(50, 50);
    this.insOneLeft = [
        new Insects(950, Math.ceil(Math.random() * 100) + 150, 40 + "px", 47 + "px", "./img/rabbit-i.png", (Math.ceil(Math.random() * 3) * -1), "insectOneLeft")
    ];
    this.insTwoLeft = [
        new Insects(950, Math.ceil(Math.random() * 100) + 150, 40 + "px", 47 + "px", "./img/rabbit-i.png", (Math.ceil(Math.random() * 3) * -1), "insectTwoLeft")
    ];
    this.insOneRight = [
        new Insects(950, Math.ceil(Math.random() * 100) + 150, 40 + "px", 47 + "px", "./img/rabbit-d.png", (Math.ceil(Math.random() +1)), "insectOneRight")
    ];
    this.insTwoRight = [
        new Insects(950, Math.ceil(Math.random() * 100) + 250, 40 + "px", 47 + "px", "./img/rabbit-d.png", (Math.ceil(Math.random()*2) +1), "insectTwoRight")
    ];
    this.monst = [
        new Insects(-50,Math.ceil(Math.random()* 100) + 150,60+"px",75+"px","./img/chicken.png", 9, "monster")
    ];
}
Game.prototype.startGame = function () {

}
Game.prototype.endGame = function () {

}
Game.prototype.createInsectOneLeft = function () {
    for (var i = 0; i < 2; i++) {
        var insectOneLeft = new Insects(950, Math.ceil(Math.random() * 100) + 150, 40 + "px", 47 + "px", "./img/rabbit-i.png", (Math.ceil(Math.random() * 3) * -1), "insectOneLeft");
        this.insOneLeft.push(insectOneLeft);
    }
}
Game.prototype.createInsectTwoLeft = function () {
    for (var i = 0; i < 2; i++) {
        var insectTwoLeft = new Insects(950, Math.ceil(Math.random() * 100) + 150, 40 + "px", 47 + "px", "./img/rabbit-i.png", (Math.ceil(Math.random() * 3) * -1), "insectTwoLeft");
        this.insTwoLeft.push(insectTwoLeft);
    }
}
Game.prototype.createInsectOneRight = function () {
    for (var i = 0; i < 2; i++) {
        var insectOneRight = new Insects(950, Math.ceil(Math.random() * 100) + 150, 40+ "px", 47+ "px", "./img/rabbit-d.png", (Math.ceil(Math.random()+1)), "insectOneRight");
        this.insTwoLeft.push(insectOneRight);
    }
}
Game.prototype.createInsectTwoRight = function () {
    for (var i = 0; i < 2; i++) {
        var insectTwoRight = new Insects(950, Math.ceil(Math.random() * 100) + 250, 40 + "px", 47 + "px", "./img/rabbit-d.png", (Math.ceil(Math.random()*2)+1), "insectTwoRight");
        this.insTwoLeft.push(insectTwoRight);
    }
}
// Game.prototype.createMonster = function () {
//     for (var i = 0; i < 1; i++) {
//         var monster = new Insects(-50,Math.ceil(Math.random()* 100) + 150,50+"px",50+"px","./img/bee-i-prueba.png", 8, "monster");
//     }
// }
