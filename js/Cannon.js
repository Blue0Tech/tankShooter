class Cannon {
    constructor(x,y,width,height) {
        var options = {
            isStatic : true
        }
        tankBodyWidth=width;
        tankBodyHeight=height;
        tankHeadWidth=width;
        tankHeadHeight=tankBodyHeight/3;
        circleY=y-(tankBodyHeight*1.5)+tankBodyWidth/4;
        tankHeadY=y-(tankBodyHeight*1.5);
        tankHeadX=x+(tankBodyWidth/1.5);
        var body1 = Bodies.rectangle(x,y,tankBodyWidth,tankBodyHeight,options);
        var body2 = Bodies.circle(x,circleY,tankBodyWidth/2,options);
        var body3 = Bodies.rectangle(tankHeadX,tankHeadY,tankHeadWidth,tankHeadHeight,options);
        this.body = Body.create({
            parts : [body1, body2, body3],
            isStatic : true
        });
        World.add(world, this.body);
    };

    display() { 
        var pos=this.body.position;
        rectMode(CENTER);
        fill("red");
        rect(pos.x,pos.y,tankBodyWidth,tankBodyHeight);
        circle(pos.x,circleY,tankBodyWidth/2);
        push();
        cannon.body.parts[3].angle=atan2(mouseY-tankHeadY, mouseX-tankHeadX);
        // cannon.body.parts[3].position.x=tankHeadX+0*cos(cannon.body.parts[3].angle);
        // cannon.body.parts[3].position.y=tankHeadY+0*sin(cannon.body.parts[3].angle);
        // translate(cannon.body.parts[3].position.x,cannon.body.parts[3].position.y);
        rotate(cannon.body.parts[3].angle,cannon.body.parts[3].position);
        rect(tankHeadX,tankHeadY,tankHeadWidth,tankHeadHeight);
        // rect(cannon.body.parts[3].position.x,cannon.body.parts[3].position.y,tankHeadWidth,tankHeadHeight);
        pop();
    }
}