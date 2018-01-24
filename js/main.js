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
            }else{console.log("No te puedes mover a la derecha")}
            break;

            case 37 :
            if(game.player1.canIExecute&&!game.player1.directionRigth){
                game.player1.frogInAir[1] = true;
                game.player1.moveLeftOne();
                game.player1.delay();
                game.player1.directionRigth=true;
            }else{console.log("no te puedes mover a la izquierda")}
            break;

            case 68 :
            if(game.player2.canIExecute){
                game.player2.frogInAir[0] = true;
                game.player2.moveRightTwo();
                game.player2.delay();
            }
            break;

            case 65 :
            if(game.player2.canIExecute){
                game.player2.frogInAir[1] = true;
                game.player2.moveLeftTwo();
                game.player2.delay();
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


    function update(){
        if(game.player1.frogInAir[0]){
            game.player1.moveRightOne();
        }

        if(game.player1.frogInAir[1]){
            game.player1.moveLeftOne();
        }

        if(game.player2.frogInAir[0]){
            game.player2.moveRightTwo();
        }

        if(game.player2.frogInAir[1]){
            game.player2.moveLeftTwo();
        }
       
        game.player1.render();
        game.player2.render();
        game.cont1.render();
        game.insect1.update(); 
        game.insect2.update();
        game.monster1.update();
        // game.player1.eat(game.insect1.x, game.insect1.y, game.insect1.h, game.insect1.w);
        game.tongue1.render(game.player1.x, game.player1.y);

        function colisionOne(){
            if(game.player1.y - 5 <= game.insect1.y && game.player1.y + 5 >= game.insect1.y && game.player1.x - 60 <= game.insect1.x && game.player1.x + 60 >= game.insect1.x) {
               console.log("pasa");
                game.player1.eat();
                game.cont1.sumOne();
            }
        }
        colisionOne();   
        // console.log("mosca" + game.insect1.x);
        // console.log("rana" + game.player1.x);
    }
    
    setInterval(update,1500/60);

    // var posXinsecOne = game.insect1.x;
    // var posYinsecOne = game.insect1.y;
    // var heightInsectOne = game.insect1.h;
    // var widthInsectOne = game.insect1.w;
    // var posXplayerOne = game.player1.x;
    // var posYplayerOne = game.player1.y;

    

   


});