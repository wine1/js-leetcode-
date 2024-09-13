var Plane = function () {
  this.blood = 100;
  this.attackLevel = 1;
  this.defenseLevel = 1;
};

var plane = new Plane();
plane.blood = 500;
plane.attackLevel = 10;
plane.defenseLevel = 7;

var clonePlane = Object.create(plane);
console.log(clonePlane.blood)         //输出500
console.log(clonePlane.attackLevel)   //输出10
console.log(clonePlane.defenseLevel)  //输出7
console.log(clonePlane instanceof Plane) // true
console.log(clonePlane instanceof plane) // Uncaught TypeError TypeError: Right-hand side of 'instanceof' is not callable