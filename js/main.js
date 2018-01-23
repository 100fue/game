$(document).ready(function() {

    var game = new Game();
    var jumpRigthOne = false;
    var jumpLeftOne = false;
    var jumpRigthTwo = false;
    var jumpLeftTwo = false;

    $(document).keydown(function(e){
        switch (e.keyCode){
            case 39 : 
                jumpRigthOne = true;
                game.player1.moveRight();
                // console.log(e.keyCode)
            break;
            case 37 :
                jumpLeftOne = true;
                game.player1.moveLeft();
                // console.log(e.keyCode)
            break;
            case 65 : 
                jumpRigthTwo = true;
                game.player2.moveRight();
                // console.log(e.keyCode)
            break;
            case 68 :
                jumpLeftTwo = true;
                game.player2.moveRight();
                // console.log(e.keyCode)
            break;
        }
    })

    // $(document).keyup(function(e){
    //     switch (e.keyCode){
    //         case 39 : 
    //             jumpRigth = false;
    //             game.player1.moveRight();
    //         break;
    //         case 37 :
    //             jumpLeft = false;
    //             game.player1.moveLeft();
    //         break;
    //     }
    // })

    game.player1.moveRight();

    function update(){
        if(jumpRigthOne){
            game.player1.moveRight();
        }

        if(jumpLeftOne){
            game.player1.moveLeft();
        }
        if(jumpRigthTwo){
            game.player2.moveRight();
        }

        if(jumpLeftTwo){
            game.player2.moveLeft();
        }

        game.player1.render();
        game.player2.render();
        // game.player1.update();
        game.insect1.update(); 
        game.insect2.update(); 
        game.insect3.update(); 
    }

    setInterval(update,1500/60);

});