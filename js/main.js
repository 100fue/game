$(document).ready(function() {

    var game = new Game();
    game.bgsound.play();

    

    $(document).keydown(function(e){
        switch (e.keyCode){
            case 39 :
            if(game.player1.canIExecute&&game.player1.directionRigth){
                game.player1.frogInAir[0] = true;
                game.player1.moveRightOne();
                game.player1.delay();
                game.player1.directionRigth=false;
                game.jump.play();
            }
            break;

            case 37 :
            if(game.player1.canIExecute&&!game.player1.directionRigth){
                game.player1.frogInAir[1] = true;
                game.player1.moveLeftOne();
                game.player1.delay();
                game.player1.directionRigth=true;
                game.jump.play();
            }
            break;

            case 32 :
                game.tongue1.tongueOut();
                game.tongue.play();

                if($(".playerOne").hasClass("right")){
                    $(".playerOne").css({ "background": "url(./img/julio-mouth-i.png)", "background-size": "cover" });
                }

                if($(".playerOne").hasClass("left")){
                    $(".playerOne").css({ "background": "url(./img/julio-mouth-d.png)", "background-size": "cover" });
                }

            break;

        }
    })

    $(document).keyup(function(e){
        switch (e.keyCode){
            case 32 :  
                game.tongue1.tongueIn();
                if($(".playerOne").hasClass("right")){
                    $(".playerOne").css({ "background": "url(./img/julio-i.png)", "background-size": "cover" });
                }

                if($(".playerOne").hasClass("left")){
                    $(".playerOne").css({ "background": "url(./img/julio-d.png)", "background-size": "cover" });
                }
            break;

        }
    })
    
    function checkInsects() {
        if ($(".insectOneLeft").collision(".tongueOne").length > 0 ){
            game.cont1.sumOne();
            game.soundTwo.play();
            $(".insectOneLeft").remove();
            game.createInsectOneLeft();
            
        }
        if ($(".insectTwoLeft").collision(".tongueOne").length > 0 ){
            game.cont1.sumOne();
            game.soundTwo.play();
            $(".insectTwoLeft").remove();
            game.createInsectTwoLeft();
        }
        if ($(".insectOneRight").collision(".tongueOne").length > 0 ){
            game.cont1.sumOne();
            game.soundTwo.play();
            $(".insectOneRight").remove();
            game.createInsectOneRight();
        }
        if ($(".insectTwoRight").collision(".tongueOne").length > 0 ){
            game.cont1.sumOne();
            game.soundTwo.play();
            $(".insectTwoRight").remove();
            game.createInsectTwoRight();
        }

        if ($(".monster").collision(".tongueOne").length > 0 || $(".monster").collision(".playerOne").length > 0 ){
            game.cont1.restOne();
            game.soundThree.play();
        }
    }

    function update(){
        if(game.player1.frogInAir[0])game.player1.moveRightOne();
        if(game.player1.frogInAir[1])game.player1.moveLeftOne();
        game.player1.render();
        game.tongue1.render(game.player1.x, game.player1.y);
        game.cont1.render();
        for(var i = 0; i < game.insOneLeft.length; i++){
            game.insOneLeft[i].update();
        }
        for(var i = 0; i < game.insTwoLeft.length; i++){
            game.insTwoLeft[i].update();
        }
        for(var i = 0; i < game.insOneRight.length; i++){
            game.insOneRight[i].update();
        }
        for(var i = 0; i < game.insTwoRight.length; i++){
            game.insTwoRight[i].update();
        }
        for(var i = 0; i < game.monst.length; i++){
            game.monst[i].update();
        }
        checkInsects();  
    }
    
    setInterval(update,1500/60);

});