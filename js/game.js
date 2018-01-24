function Game(){
    
    this.player1 = new Player(100,50,"./img/rana-d-prueba.png","playerOne right");
    this.player2 = new Player(750,50,"./img/rana-i-prueba.png","playerTwo");

    this.insect1 = new Insects(950,Math.ceil(Math.random()* 100) + 150,30+"px",30+"px","./img/mosca-i-prueba.png",(Math.ceil(Math.random()*3)*-1),"insectOne");
    this.insect2 = new Insects(0,Math.ceil(Math.random()* 100) + 150,30+"px",30+"px","./img/mosca-d-prueba.png", Math.ceil(Math.random()*2)+3, "insectTwo");

    this.monster1 = new Insects(950,Math.ceil(Math.random()* 100) + 150,50+"px",50+"px","./img/bee-i-prueba.png", Math.ceil(Math.random()*2)+3, "monsterOne");

    this.tongue1 = new Tongue(this.player1.x + 35,this.player1.y + 42,"tongueOne");

    this.cont1 = new Board(50,50,"contOne", "Paco","spanOne");
    this.cont2 = new Board(750,50,"contTwo", "Mariano","spanTwo");


    // this.tongue1 = new Tongue(135,92,"tongueOne");
}
Game.prototype.startGame = function(){
    
}//$("<div>").attr("class", name);
Game.prototype.startEnd = function(){
    
}
Game.prototype.createInsects = function (){
    // var arrInsects = [this.insect1,this.insect2];

    // for (var i = 0 ; i < arrInsects.length; i++){
    //     return arrInsects[i];

    //     if (arrInsects[i] == 950 || arrInsects[i] == 0){

    //     }
    // }


}
// Game.prototype.render = function (){
//     this.tongue1.css({bottom:this.player1.y,left:this.player1.x,height:this.h,width:this.w});
// }