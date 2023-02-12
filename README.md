<p align="center"><img width="470px" src="https://raw.githubusercontent.com/jirotubuyaki/jirotubuyaki.github.io/master/gimp/profile.png"></p>

### Introduction
Create flower shapes and flexible animation framework for HTML5 Canvas. This framework extended CreateJS https://createjs.com/ .Now the three types of flowers are provided. You can change the petal number and color. Many easy coded motion properties are provided too. 

### Installation
This framework is based on CreateJS. So plese add script sources on HTML5 head.
tweenjs_ex.js is modified tweenjs.js.
```
<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<script src="easeljs.js"></script>
	<script src="tweenjs_ex.js"></script>
	<script src="flowerjs.js"></script>
	<script src="./examples/example_2.js"></script>
</head>
<body onload="start()">
	<div><canvas id="mycanvas" width="1600px" height="800px" style="width:800px;height:400px;"></canvas></div>
</body>
</html>
</head>
```

### How to Create Flowers 
<p align="center"><img width="420px" src="https://raw.githubusercontent.com/jirotubuyaki/jirotubuyaki.github.io/master/gimp/screen_flower_1.png"></p>

Firstly, please write Html5 Canvas accsess on your javascript codes.
```
var start = function() {
   canvas = document.getElementById("mycanvas");
   stage = new createjs.Stage(document.getElementById("mycanvas"));
};
```   

Codes for creating flowers are below.
```
var flower_obj_1 = new Flower();  // Normal Flower
var flower_obj_2 = new FlowerRnd(); // Noise Flower
var sunflower_obj_1 = new SunFlower(); // SunFlower

flower_obj_1.init().setSize(50).setPetalSize(56).setColor("#ff1493").setPetal(8).setPile(2,1.2).setAlpha(0.5).create(200,200);
flower_obj_2.init().setSize(10).setPetalSize(56).setColor("#ff1493").setPetal(8).setPile(3,1.2).setAlpha(0.5).setNoise(1.2).create(500,200);
sunflower_obj_1.init().setSize(100).setPetalSize(45).setColor("#ffd700").setColorLine("#999").setPetal(16).setPile(2,1.2).setAlpha(0.6).create(900,200);

stage.addChild(flower_obj_1.flower);
stage.addChild(flower_obj_2.flower);
stage.addChild(sunflower_obj_1.flower);
``` 

The Flower types are now three version. "Flower()" and "FlowerRnd()" and SunFlower().
* setSize(50): a flower base size.
* setPetalSize(56): a flower petals size.
* setColor("#ff1493"): a flower color.
* setPetal(8): a flower petals number.
* setPile(2, 1.2): a flower pile number.
* setAlpha(0.5): a flower transparent rate.
* setNoise(1.2): a flower noise rate for FlowerRnd()
* create(200, 200): creating flower at x and y points.

### How to use motion
This framework can use all TweenJS actions. Please look https://createjs.com/tweenjs .  
We also added new properties for flowers. "flower_obj_1.flower" is the flower shape object. So please send the object to .get() method. 

``` 
createjs.Tween.get(flower_obj_1.flower)
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
``` 

* New properties is {petal_scale_1:1.3}. The index number 1 petal scale up by 1.3 times.  
Finally, please update stage.

``` 
createjs.Ticker.addEventListener("tick", handleTick);
createjs.Ticker.framerate = 60;
function handleTick(){      
    stage.update();
}
``` 

### Examples

Motion Example. The Flower and FlowerRnd.  
https://jirotubuyaki.github.io/FlowerJS/examples/example_1.html  
<p align="left"><img src="https://raw.githubusercontent.com/jirotubuyaki/jirotubuyaki.github.io/master/gimp/example_1.png"></p>
 
Shapes Example. The Flower Colors and Shapes Randoms.  
https://jirotubuyaki.github.io/FlowerJS/examples/example_2.html  
<p align="left"><img width="250px" src="https://raw.githubusercontent.com/jirotubuyaki/jirotubuyaki.github.io/master/gimp/profile_2.png"></p>

Motion Example. Sunflower shapes.  
https://jirotubuyaki.github.io/FlowerJS/examples/example_3.html  


### Copyright
MIT License  
Copyright (c) 2023 Masashi OKADA  
I modified p._updateTargetProps method and added p.flower_sprite and p.flowerrnd_sprite in TweenJS.  
  
The MIT License (MIT)  
Copyright (c) 2014 gskinner.com, inc.  

### Acknowledgments
This activity would not have been possible without the support of my family and friends. To my family, thank you for lots of encouragement for me and inspiring me to follow my dreams. I am especially grateful to my parents, who supported me all aspects.
