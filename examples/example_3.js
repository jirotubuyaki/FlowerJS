var start = function() {
    canvas = document.getElementById("mycanvas");
    stage = new createjs.Stage(document.getElementById("mycanvas"));

    var sunflower_obj_1 = new SunFlower();
    sunflower_obj_1.init().setSize(100).setPetalSize(45).setColor("#ffd700").setColorLine("#999").setPetal(16).setPile(1,1.2).setAlpha(0.9).create(200,200);
    stage.addChild(sunflower_obj_1.flower);

    createjs.Tween.get(sunflower_obj_1.flower)
    .to({petal_scale_0:1.1,petal_scale_2:1.1,petal_scale_4:1.1,petal_scale_6:1.1,petal_scale_8:1.1,petal_scale_10:1.1,petal_scale_12:1.1,petal_scale_14:1.1,petal_scale_16:1.1,petal_scale_18:1.1,petal_scale_20:1.1},900,createjs.Ease.cubicOut)
    .to({petal_scale_1:0.9,petal_scale_3:0.9,petal_scale_5:0.9,petal_scale_7:0.9,petal_scale_9:0.9,petal_scale_11:0.9,petal_scale_13:0.9,petal_scale_15:0.9,petal_scale_17:0.9,petal_scale_19:0.9},900,createjs.Ease.cubicOut)

    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.framerate = 60;
    function handleTick(){      
        stage.update();
    }
}