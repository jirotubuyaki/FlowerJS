var start = function() {
    canvas = document.getElementById("mycanvas");
    stage = new createjs.Stage(document.getElementById("mycanvas"));
    center_x = this.stage.canvas.width/2;
    center_y = this.stage.canvas.height/2-300;

    ImageRandom(stage, 100, 100);
    ImageRandom(stage, 225, 100);
    ImageRandom(stage, 350, 100);
    ImageRandom(stage, 475, 100);
    ImageRandom(stage, 600, 100);
    ImageRandom(stage, 725, 100);
    ImageRandom(stage, 840, 100);

    ImageRandom(stage, 100, 225);
    ImageRandom(stage, 225, 225);
    ImageRandom(stage, 350, 225);
    ImageRandom(stage, 475, 225);
    ImageRandom(stage, 600, 225);
    ImageRandom(stage, 725, 225);
    ImageRandom(stage, 840, 225);

    ImageRandom(stage, 100, 350);
    ImageRandom(stage, 225, 350);
    ImageRandom(stage, 350, 350);
    ImageRandom(stage, 475, 350);
    ImageRandom(stage, 600, 350);
    ImageRandom(stage, 725, 350);
    ImageRandom(stage, 840, 350);

    ImageRandom(stage, 100, 475);
    ImageRandom(stage, 225, 475);
    ImageRandom(stage, 350, 475);
    ImageRandom(stage, 475, 475);
    ImageRandom(stage, 600, 475);
    ImageRandom(stage, 725, 475);
    ImageRandom(stage, 840, 475);

};
var ImageRandom = function(stage,x_in,y_in){
    size = 42;
    flower = new Array();
    for(var j = 0; j < 20; j++){
        color = parseInt(Math.random()*254);
        color_16_1 = color.toString(16);
        color = parseInt(Math.random()*254);
        color_16_2 = color.toString(16);
        color = parseInt(Math.random()*254);
        color_16_3 = color.toString(16);
        color_str = "#" + color_16_1 + color_16_2 + color_16_3;
        flower[j] = new FlowerRnd();
        flower[j].init().setColor(color_str).setPetal(12).setPile(1,1.0).setNoise(1.2).setAlpha(0.5).setSize(size).setPetalSize(size+5).create(x_in, y_in);
        stage.addChild(flower[j].flower);
        size = size - 2.2;
    }
    stage.update();
};