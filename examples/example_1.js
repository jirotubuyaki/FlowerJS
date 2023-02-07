var start = function() {
    canvas = document.getElementById("mycanvas");
    stage = new createjs.Stage(document.getElementById("mycanvas"));

    var flower_obj_1 = new Flower();
    var flower_obj_2 = new Flower();
    flower_obj_1.init().setSize(50).setPetalSize(56).setColor("#ff1493").setPetal(8).setPile(2,1.2).setAlpha(0.5).create(200,200);
    flower_obj_2.init().setSize(10).setPetalSize(56).setColor("#ff1493").setPetal(8).setPile(3,1.2).setAlpha(0.5).create(200,200);

    stage.addChild(flower_obj_1.flower);
    stage.addChild(flower_obj_2.flower);

    var flowerrnd_obj_1 = new FlowerRnd();
    var flowerrnd_obj_2 = new FlowerRnd();
    flowerrnd_obj_1.init().setSize(50).setPetalSize(56).setColor("#ff1493").setPetal(8).setPile(2,1.2).setNoise(1.0).setAlpha(0.5).create(400,200);
    flowerrnd_obj_2.init().setSize(10).setPetalSize(56).setColor("#ff1493").setPetal(8).setPile(3,1.2).setNoise(1.0).setAlpha(0.5).create(400,200);

    stage.addChild(flowerrnd_obj_1.flower);
    stage.addChild(flowerrnd_obj_2.flower);

    var timeline = new createjs.Timeline({ start: 0 }, { paused: true });
    var flower_1_tween = createjs.Tween.get(flower_obj_1.flower)
    .to({rotation:360,x:200,y:300},1000)
    .to({x:200,y:200,petal_index:0,petal_scale_0:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_1:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_2:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_3:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_4:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_5:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_6:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_7:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_0:0.8,petal_scale_1:0.8,petal_scale_2:0.8,petal_scale_3:0.8,petal_scale_4:0.8,petal_scale_5:0.8,petal_scale_6:0.8,petal_scale_7:0.8},600,createjs.Ease.cubicOut);

    var flower_2_tween = createjs.Tween.get(flower_obj_2.flower)
    .to({rotation:360,x:200,y:300},1000)
    .to({x:200,y:200,petal_index:0,petal_scale_0:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_1:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_2:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_3:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_4:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_5:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_6:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_7:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_0:0.8,petal_scale_2:0.8,petal_scale_4:0.8,petal_scale_6:0.8},600,createjs.Ease.cubicOut);

    var flowerrnd_1_tween = createjs.Tween.get(flowerrnd_obj_1.flower)
    .to({rotation:360,x:400,y:300},1000)
    .to({x:400,y:200,petal_index:0,petal_scale_0:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_1:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_2:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_3:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_4:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_5:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_6:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_7:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_0:0.8,petal_scale_1:0.8,petal_scale_2:0.8,petal_scale_3:0.8,petal_scale_4:0.8,petal_scale_5:0.8,petal_scale_6:0.8,petal_scale_7:0.8},600,createjs.Ease.cubicOut);

    var flowerrnd_2_tween = createjs.Tween.get(flowerrnd_obj_2.flower)
    .to({rotation:360,x:400,y:300},1000)
    .to({x:400,y:200,petal_index:0,petal_scale_0:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_1:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_2:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_3:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_4:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_5:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_6:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_7:1.3},300,createjs.Ease.cubicOut)
    .to({petal_scale_0:0.8,petal_scale_2:0.8,petal_scale_4:0.8,petal_scale_6:0.8},600,createjs.Ease.cubicOut);

    timeline.addTween(flower_1_tween, flower_2_tween,flowerrnd_1_tween, flowerrnd_2_tween);
    timeline.gotoAndPlay('start');

    createjs.Ticker.addEventListener("tick", handleTick);
    createjs.Ticker.framerate = 60;
    function handleTick(){      
        stage.update();
    }
};