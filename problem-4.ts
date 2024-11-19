type Circle = {
    shape: "circle";
    radius: number;
}

type Rectangle = {
    shape: 'rectangle';
    width: number;
    height: number;
}

type shapeType = Circle | Rectangle;
function calculateShapeArea(inputShape: shapeType): number | string {
    if (inputShape.shape === "circle") {
        return Math.PI * inputShape.radius * inputShape.radius;
    } else if (inputShape.shape === "rectangle") {
        return inputShape.width * inputShape.height;
    } else {
        return "Not a valid input"
    }
}

console.log(calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
}));