$(document).ready(function() {

    var game = new Game();

    $(document).keydown(function(e){
        switch (e.keyCode){
            case 39 :
            if(game.player1.canIExecute&&game.player1.directionRigth){
                game.player1.frogInAir[0] = true;
                game.player1.moveRightOne();
                game.player1.delay();
                game.player1.directionRigth=false;
            }
            break;

            case 37 :
            if(game.player1.canIExecute&&!game.player1.directionRigth){
                game.player1.frogInAir[1] = true;
                game.player1.moveLeftOne();
                game.player1.delay();
                game.player1.directionRigth=true;
            }
            break;

            case 77 :
                game.tongue1.tongueOut();
            break;

        }
    })

    $(document).keyup(function(e){
        switch (e.keyCode){
            case 77 :  
                game.tongue1.tongueIn();
            break;

        }
    })
    function checkObstacles() {
        if ($(".insect").collision(".tongueOne").length > 0 ){
            console.log("te di!")
        }
        if ($(".monster").collision(".tongueOne").length > 0 ){
            console.log("te reste!")
        }
        if ($(".monster").collision(".playerOne").length > 0){
            console.log("te reste2!");
        }

    }

    function update(){
        if(game.player1.frogInAir[0])game.player1.moveRightOne();
        if(game.player1.frogInAir[1])game.player1.moveLeftOne();
        game.player1.render();
        game.tongue1.render(game.player1.x, game.player1.y);
        game.cont1.render();
        game.insect1.update(); 
        game.insect2.update();
        game.monster1.update();
        checkObstacles()

        var tonDomX = $(".tongueOne").css("left");
        var tonDomY = $(".tongueOne").css("bottom");

        function colisionOne(){
            if(tonDomX < game.insect1.x + game.insect1.w  && tonDomX + 60  > game.insect1.x &&
                tonDomY < game.insect1.y + game.insect1.h && tonDomY + 5 > game.insect1.y) {
                console.log("pasa");
                game.player1.eat();
                game.cont1.sumOne();
            }
        }
        colisionOne();   

        
    }
    
    setInterval(update,1500/60);

    

    // var posXinsecOne = game.insect1.x;
    // var posYinsecOne = game.insect1.y;
    // var heightInsectOne = game.insect1.h;
    // var widthInsectOne = game.insect1.w;
    // var posXplayerOne = game.player1.x;
    // var posYplayerOne = game.player1.y;


});