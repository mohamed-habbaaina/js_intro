class Rectangle{

    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    get perimeter(){
        return (this.width + this.height) * 2;
    }

    get isValid(){
        return this.width > 0 && this.height > 0;
    }

    isBiggerThan(shape){
        return this.perimeter > shape.perimeter;
    }
}

class Square extends Rectangle{

    constructor(width){
        super(width, width);
    }
}

const r = new Rectangle(30,40);
console.log(r.perimeter, r.isValid);

const r2 = new Rectangle(-20, 60);
console.log(r2.isValid);

const sq = new Square(50);
console.log(sq.perimeter, sq.isValid);
console.log(sq.isBiggerThan(r));
console.log(r.isBiggerThan(sq));
