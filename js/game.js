function Game() {

    this.player1 = new Player(100, 50, "./img/julio-i.png", "playerOne right", 48, 70);
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

    this.bgsound = new Audio();
    this.bgsound.src = "./audio/background-music.mp3";
    this.soundTwo = new Audio();
    this.soundTwo.src = "./audio/chiquito_de_la_calzada_al_ataque.mp3";
    this.soundThree = new Audio();
    this.soundThree.src = "./audio/chiquito_de_la_calzada_fuegorrrlll.mp3";
    this.jump = new Audio();
    this.jump.src = "./audio/jump.wav";
    this.tongue = new Audio();
    this.tongue.src = "./audio/tongue.wav";
}
Game.prototype.createInsectOneLeft = function () {
    for (var i = 0; i < 1; i++) {
        var insectOneLeft = new Insects(950, Math.ceil(Math.random() * 100) + 150, 40 + "px", 47 + "px", "./img/rabbit-i.png", (Math.ceil(Math.random() * 3) * -1), "insectOneLeft");
        this.insOneLeft.push(insectOneLeft);
    }
}
Game.prototype.createInsectTwoLeft = function () {
    for (var i = 0; i < 1; i++) {
        var insectTwoLeft = new Insects(950, Math.ceil(Math.random() * 100) + 150, 40 + "px", 47 + "px", "./img/rabbit-i.png", (Math.ceil(Math.random() * 3) * -1), "insectTwoLeft");
        this.insTwoLeft.push(insectTwoLeft);
    }
}
Game.prototype.createInsectOneRight = function () {
    for (var i = 0; i < 1; i++) {
        var insectOneRight = new Insects(950, Math.ceil(Math.random() * 100) + 150, 40+ "px", 47+ "px", "./img/rabbit-d.png", (Math.ceil(Math.random()+1)), "insectOneRight");
        this.insTwoLeft.push(insectOneRight);
    }
}
Game.prototype.createInsectTwoRight = function () {
    for (var i = 0; i < 1; i++) {
        var insectTwoRight = new Insects(950, Math.ceil(Math.random() * 100) + 250, 40 + "px", 47 + "px", "./img/rabbit-d.png", (Math.ceil(Math.random()*2)+1), "insectTwoRight");
        this.insTwoLeft.push(insectTwoRight);
    }
}
