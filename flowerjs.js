function Flower() {
    this.flower = new createjs.Container();
    this.flower.label = "normal";
    this.flower.out = new Array();
    this.flower.graphics_out = new Array();
    this.flower.rate_count = new Array();
    this.flower.size = 20;
    this.flower.color = "#ff1493";
    this.flower.alpha = 0.7;
    this.flower.petal = 6;
    this.flower.petal_size = 50;
    this.flower.pile = 1;
    this.flower.pile_scale = 1;
}
Flower.prototype = {
    init: function() {
        for(i = 0; i < this.flower.petal; i++){
            eval("this.flower.petal_scale_"+ i +" = 1;");
        }
        return this;
    },
    get: function(){
        return this;
    },
    setSize: function(num) {
        this.flower.size = num;
        return this;
    },
    setColor: function(color_str) {
        this.flower.color = color_str;
        return this;
    },
    setAlpha: function(num) {
        this.flower.alpha = num;
        return this;
    },
    setPetal: function(num) {
        this.flower.petal = num;
        for(i = 0; i < this.flower.petal; i++){
            eval("this.flower.petal_scale_"+ i +" = 1;");
        }
        return this;
    },
    setPetalSize: function(num) {
        this.flower.petal_size = num;
        return this;
    },
    setPetalThickness: function(num) {
        this.flower.petal_thickness = num;
        return this;
    },
    setPile: function(num, scale) {
        this.flower.pile = num;
        this.flower.pile_scale = scale;
        return this;
    },
    setRotation: function(num) {
        this.flower.rotation = num;
        return this;
    },
    create: function(x_in, y_in) {
        for(var i = 0; i < this.flower.pile; i++){
            for(var j = 0; j < this.flower.petal; j++){
                this.flower.rate_count[j] = 1;
            }
            var count = 0;
            this.flower.graphics_out[i] = new createjs.Graphics();
            this.flower.graphics_out[i].beginStroke(this.flower.color).beginFill(this.flower.color);
            var petal_size = 360 / this.flower.petal;
            for(var j = 0; j <= 360; j = j + petal_size){
                if(count == 0){
                    this.flower.graphics_out[i].moveTo(this.flower.size * Math.cos(0 * Math.PI / 180), this.flower.size * Math.sin(0 * Math.PI / 180));
                }
                if(j + petal_size > 360){
                    this.flower.graphics_out[i].quadraticCurveTo((this.flower.size + this.flower.petal_size) * Math.cos((j + petal_size - petal_size / 2) * Math.PI / 180), (this.flower.size + this.flower.petal_size) * Math.sin((j + petal_size - petal_size / 2) * Math.PI / 180), this.flower.size * Math.cos(0 * Math.PI/180), this.flower.size * Math.sin(0 * Math.PI/180));
                }
                else{
                    this.flower.graphics_out[i].quadraticCurveTo((this.flower.size + this.flower.petal_size) * Math.cos((j + petal_size - petal_size / 2) * Math.PI / 180), (this.flower.size + this.flower.petal_size) * Math.sin((j + petal_size - petal_size / 2) * Math.PI / 180), this.flower.size * Math.cos((j + petal_size) * Math.PI / 180), this.flower.size * Math.sin((j + petal_size) * Math.PI / 180));
                }
                count++;
            }
            this.flower.out[i] = new createjs.Shape(this.flower.graphics_out[i]);
            this.flower.out[i].x = x_in;
            this.flower.out[i].y = y_in;
            this.flower.x = x_in;
            this.flower.y = y_in;
            this.flower.regX = x_in;
            this.flower.regY = y_in;
            this.flower.out[i].rotation = Math.random()*360;
            this.flower.out[i].regX = this.flower.out[i].width/2;
            this.flower.out[i].regY = this.flower.out[i].height/2;
            this.flower.out[i].alpha=this.flower.alpha;
            this.flower.addChild(this.flower.out[i]);
        }

        return this;
    }
};
function FlowerRnd() {
    this.flower = new createjs.Container();
    this.flower.label = "rnd";
    this.flower.out = new Array();
    this.flower.graphics_out = new Array();
    this.flower.rate_count = new Array();
    this.flower.noise_1 = new Array();
    this.flower.noise_2 = new Array();
    this.flower.size = 20;
    this.flower.color = "#ff1493";
    this.flower.alpha = 0.7;
    this.flower.petal = 6;
    this.flower.petal_size = 50;
    this.flower.pile = 1;
    this.flower.pile_scale = 1;
}
FlowerRnd.prototype = {
    init: function() {
        for(i = 0; i < this.flower.petal; i++){
            eval("this.flower.petal_scale_"+ i +" = 1;");
            this.flower.noise_1.push(15 - Math.random() * 30);
            this.flower.noise_2.push(10 - Math.random() * 20);
        }
        return this;
    },
    get: function(){
        return this;
    },
    setSize: function(num) {
        this.flower.size = num;
        return this;
    },
    setColor: function(color_str) {
        this.flower.color = color_str;
        return this;
    },
    setAlpha: function(num) {
        this.flower.alpha = num;
        return this;
    },
    setPetal: function(num) {
        this.flower.petal = num;
        for(i = 0; i < this.flower.petal; i++){
            eval("this.flower.petal_scale_"+ i +" = 1;");
        }
        return this;
    },
    setNoise: function(num) {
        for(i = 0; i < this.flower.petal; i++){
            this.flower.noise_1.push((30 * num) / 2 - Math.random() * 30 * num);
            this.flower.noise_2.push((20 * num) / 2 - Math.random() * 20 * num);
        }
        return this;
    },
    setPetalSize: function(num) {
        this.flower.petal_size = num;
        return this;
    },
    setPetalThickness: function(num) {
        this.flower.petal_thickness = num;
        return this;
    },
    setPile: function(num, scale) {
        this.flower.pile = num;
        this.flower.pile_scale = scale;
        return this;
    },
    setRotation: function(num) {
        this.flower.rotation = num;
        return this;
    },
    create: function(x_in, y_in) {
        for(var i = 0; i < this.flower.pile; i++){
            for(var j = 0; j < this.flower.petal; j++){
                this.flower.rate_count[j] = 1;
            }
            var count = 0;
            this.flower.graphics_out[i] = new createjs.Graphics();
            this.flower.graphics_out[i].beginStroke(this.flower.color).beginFill(this.flower.color);
            var petal_size = 360 / this.flower.petal;
            for(var j = 0; j <= 360; j = j + petal_size){
                if(count == 0){
                    this.flower.graphics_out[i].moveTo(this.flower.size * Math.cos(0 * Math.PI / 180), this.flower.size * Math.sin(0 * Math.PI / 180));
                }
                if(j + petal_size > 360){
                    this.flower.graphics_out[i].quadraticCurveTo((this.flower.noise_2[count] + this.flower.size + this.flower.petal_size) * Math.cos((this.flower.noise_1[count] + j + petal_size - petal_size / 2) * Math.PI / 180), (this.flower.noise_2[count] + this.flower.size + this.flower.petal_size) * Math.sin((this.flower.noise_1[count] + j + petal_size - petal_size / 2) * Math.PI / 180), this.flower.size * Math.cos(0 * Math.PI/180), this.flower.size * Math.sin(0 * Math.PI/180));
                }
                else{
                    this.flower.graphics_out[i].quadraticCurveTo((this.flower.noise_2[count] + this.flower.size + this.flower.petal_size) * Math.cos((this.flower.noise_1[count] + j + petal_size - petal_size / 2) * Math.PI / 180), (this.flower.noise_2[count] + this.flower.size + this.flower.petal_size) * Math.sin((this.flower.noise_1[count] + j + petal_size - petal_size / 2) * Math.PI / 180), this.flower.size * Math.cos((j + petal_size) * Math.PI / 180), this.flower.size * Math.sin((j + petal_size) * Math.PI / 180));
                }
                count++;
            }
            this.flower.out[i] = new createjs.Shape(this.flower.graphics_out[i]);
            this.flower.out[i].x = x_in;
            this.flower.out[i].y = y_in;
            this.flower.x = x_in;
            this.flower.y = y_in;
            this.flower.regX = x_in;
            this.flower.regY = y_in;
            this.flower.out[i].rotation = Math.random()*360;
            this.flower.out[i].regX = this.flower.out[i].width/2;
            this.flower.out[i].regY = this.flower.out[i].height/2;
            this.flower.out[i].alpha=this.flower.alpha;
            this.flower.addChild(this.flower.out[i]);
        }

        return this;
    }
};