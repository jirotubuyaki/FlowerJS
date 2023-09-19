var start = function() {
    canvas = document.getElementById("mycanvas");
    stage = new createjs.Stage(document.getElementById("mycanvas"));
    center_x = this.stage.canvas.width/2;
    center_y = this.stage.canvas.height/2-300;

    ImageRandom(stage, 200, 200);
};
var ImageRandom = function(stage,x_in,y_in){
    size = 100;
    flower = new Array();
    color_base = parseInt(Math.random()*17);
    color = color_base;
    for(var j = 0; j < 200; j++){
        color = parseInt(Math.random()*5);
        if(color == 0){color_str = "#ee69b1";}
        if(color == 1){color_str = "#ff1493";}
        if(color == 2){color_str = "#c61675";}
        if(color == 3){color_str = "#e82b91";}
        if(color == 4){color_str = "#ff0095";}

        flower[j] = new FlowerRnd();
        flower[j].init().setColor(color_str).setPetal(12).setPile(1,1.0).setNoise(1.2).setAlpha(0.45 - j*0.00085).setSize(size).setPetalSize(j/2 + 150).create(x_in, y_in);
        stage.addChild(flower[j].flower);
        size = size - 1.2;
    }
    stage.update();
};
