// Template literal

function f(area, perimeter) {
  return Math.sqrt((perimeter * perimeter) - (16 * area));
}
function sides(literals, ...expressions) {
  const area = expressions[0];
  const perimeter = expressions[1];

  const s1 = (perimeter + f(area, perimeter)) / 4;
  const s2 = (perimeter - f(area, perimeter)) / 4;

  return [Math.min(s1, s2), Math.max(s1, s2)];
}

// Arrow function
function modifyArray(nums) {
  return nums.map(x => x % 2 === 0 ? x * 2 : x * 3);
}
