class Rope{

    constructor(bodyA,pointB){
        var options = {
           bodyA: bodyA,
           pointB: pointB,
           stiffness: 1.2,
           length: 250
        }
        this.pointB=pointB;
        this.rope=Constraint.create(options);
        World.add(world,this.rope);
    }
display(){
    if(this.rope.bodyA){

        var a = this.rope.bodyA.position;
        var b = this.pointB;
        push()
        stroke("white");
        strokeWeight(3);
        line(b.x,b.y,a.x,a.y);
        pop();
}

}

}