function Game(){
    this.player1 = new Player(100,50,"./img/rana-d-prueba.png","playerOne right");
    this.player2 = new Player(750,50,"./img/rana-i-prueba.png","playerTwo");
    this.insect1 = new Insects(950,Math.ceil(Math.random()* 100) + 150,30+"px",30+"px","./img/mosca-i-prueba.png",(Math.ceil(Math.random()*3)*-1),"insectOne");
    this.insect2 = new Insects(0,Math.ceil(Math.random()* 100) + 150,30+"px",30+"px","./img/mosca-d-prueba.png", Math.ceil(Math.random()*2)+3, "insectTwo");
    this.monster1 = new Insects(950,Math.ceil(Math.random()* 100) + 150,50+"px",50+"px","./img/bee-i-prueba.png", Math.ceil(Math.random()*2)+3, "monsterOne");
    // this.insect3 = new Insects(950,Math.ceil(Math.random()* 250) + 50,"./img/mosca-d-prueba.png",3);
    this.tongue1 = new Tongue(this.player1.x + 35,this.player1.y + 42,"tongueOne");
    // this.tongue1 = new Tongue(135,92,"tongueOne");
}
Game.prototype.startGame = function(){

}
Game.prototype.startEnd = function(){
    
}
// Game.prototype.render = function (){
//     this.tongue1.css({bottom:this.player1.y,left:this.player1.x,height:this.h,width:this.w});
// }