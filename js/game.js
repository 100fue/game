function Game(){
    this.player1 = new Player(106,50,"./img/rana-d-prueba.png","playerOne");
    this.insect1 = new Insects(950,Math.ceil(Math.random()* 50) + 50,"./img/mosca-d-prueba.png",5);
    this.insect2 = new Insects(-50,Math.ceil(Math.random()* 150) + 50,"./img/mosca-d-prueba.png",4);
    this.insect3 = new Insects(950,Math.ceil(Math.random()* 250) + 50,"./img/mosca-d-prueba.png",3);
    


}
Game.prototype.startGame = function(){

}
Game.prototype.startEnd = function(){
    
}