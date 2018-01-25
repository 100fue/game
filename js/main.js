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
    function checkInsects() {
        if ($(".insectOneLeft").collision(".tongueOne").length > 0 ){
            game.cont1.sumOne();
            $(".insectOneLeft").remove();
            game.createInsectOneLeft();
        }
        if ($(".insectTwoLeft").collision(".tongueOne").length > 0 ){
            game.cont1.sumOne();
            $(".insectTwoLeft").remove();
            game.createInsectTwoLeft();
        }
        if ($(".insectOneRight").collision(".tongueOne").length > 0 ){
            game.cont1.sumOne();
            $(".insectOneRight").remove();
            game.createInsectOneRight();
        }
        if ($(".insectTwoRight").collision(".tongueOne").length > 0 ){
            game.cont1.sumOne();
            $(".insectTwoRight").remove();
            game.createInsectTwoRight();
        }

        if ($(".monster").collision(".tongueOne").length > 0 ){
            game.cont1.restOne();
        }
        if ($(".monster").collision(".playerOne").length > 0){
            game.cont1.restOne();
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

        // game.insectLeft.update(); 
        // game.insectRight.update();
        // game.monster1.update();
        checkInsects();
        
    }
    
    setInterval(update,1500/60);

});