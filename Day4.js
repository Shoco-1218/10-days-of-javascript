// Create a rectangle object
function Rectangle(a, b){
  const length = a;
  const width = b;
  const perimeter = 2*(a+b);
  const area = a*b;
  return {length, width, perimeter, area};
}


// 
// const result = array.reduce((前回の値, 現在の値, 現在currentとして処理されている要素のインデックス, reduceによって操作されている配列自身) => {
//   return 次の値;
// }, 初期値);

class Polygon{

  constructor(sideLengths){
      this.sideLengths = sideLengths;
  }

  perimeter(){
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      return this.sideLengths.reduce(reducer);
  }
}
