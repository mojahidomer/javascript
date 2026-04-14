class Shap {
    name;
    sides;
    sideLength;

    constructor(name,sides,sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength

    }
  calArea(){

    console.log(`The  Paramter of this shap ${this.name} is ${this.sideLength*this.sides}:`)
  }


}

class Squre extends Shap{
    
    constructor(sideLength){
        super('Squre shape',4,sideLength)
    }
}

let React = new Shap("React",4,4)
React.calcPerimeter()

let squre = new Squre(8)
squre.calArea()