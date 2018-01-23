$(document).ready(function() {

    var game = new Game();
    var jump = false;
    // var now = Date.now();
    // var delta = 0; 

    $(document).keydown(function(e){
        switch (e.keyCode){
            case 39 : 
                jump = true;
                game.player1.moveRight();
                console.log(e.keyCode)
            break;
            case 37 :
                game.player1.moveLeft();
                console.log(e.keyCode)
            break;
        }
    })

    // game.player1.moveRight();

    function update(){
        if(jump){
            game.player1.moveRight();
        }
        
        // console.log(game.player1.x);
        game.player1.render();
        // game.player1.update();
        game.insect1.update(); 
        game.insect2.update(); 
        game.insect3.update(); 
    }

    setInterval(update,1500/60);

});