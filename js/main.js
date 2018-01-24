$(document).ready(function() {

    var game = new Game();


    $(document).keydown(function(e){
        switch (e.keyCode){
            case 39 : 
                game.player1.frogInAir[0] = true;
                game.player1.moveRight();
                
                if (game.player1.frogInAir[0] = true){
                    game.player1.frogInAir[1] = false;
                }
            break;

            case 37 :
                game.player1.frogInAir[1] = true;
                game.player1.moveLeft();
                
                if (game.player1.frogInAir[1] = true){
                    game.player1.frogInAir[0] = false;
                }
            break;

            case 77 :
            console.log(e.keyCode)    
                game.tongue1.tongueOut();
            break;

        }
    })

    $(document).keyup(function(e){
        switch (e.keyCode){

            case 77 :
            console.log(e.keyCode)    
                game.tongue1.tongueIn();
            break;

        }
    })

    function update(){
        if(game.player1.frogInAir[0]){
            game.player1.moveRight();
        }

        if(game.player1.frogInAir[1]){
            game.player1.moveLeft();
        }

        game.player1.render();
        game.insect1.update(); 
        game.insect2.update();
        game.monster1.update();
        // game.tongue1.tongueOut();
        game.tongue1.render();
       
     
    }

    setInterval(update,1500/60);

});