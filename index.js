let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e']
];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

function countSheep(num){
  console.log('Another sheep jumped over the fence');
  if(num===1){
    console.log('All sheep have jumped over the fence');
  }
  else{
    countSheep(num-1);
  }
}

function powerCalculator(num, power){
  if(power<0){
    return 'Power should be >= 0';
  }
  if(power===0){
    return 1;
  }
  if(power===1){
    return num;
  }
  return num*powerCalculator(num, power-1);
}

function reverseString(input){
  if(input.length===1 || input.length===0){
    return input;
  }
  return input.charAt(input.length-1) + reverseString(input.slice(0,input.length-1));
}

function nthTriangleNumber(n){
  if(n<=0){
    return '"n" must be a positive number';
  }
  if(n===1){
    return 1;
  }
  return n + nthTriangleNumber(n-1);
}

function splitter(string, split){
  if(!string.includes(split)){
    return string;
  }
  let newString = string.substring(0,string.indexOf(split));
  return [newString].concat(splitter(string.substring(newString.length + 1), split));
}

function fibonacci(n){
  if(n===1 || n===2){
    return 1;
  }
  return fibonacci(n-1) + fibonacci(n-2);
}

function factorial(num){
  if(num===1){
    return 1;
  }
  return num*factorial(num-1);
}

function solveMaze(maze, point, currentSolution = ''){
  if(!point){
    point = [0,0];
  }
  let R;
  let L;
  let U;
  let D;
  const y = point[0];
  const x = point[1];

  if(x !== maze[0].length-1)
    R = maze[y][x+1];
  if(x !== 0)
    L = maze[y][x-1];
  if(y !== maze.length-1)
    D = maze[y+1][x];
  if(y !== 0)
    U = maze[y-1][x];
  maze[y][x] = '*';
  if(R==='e'){
    console.log('A solution is: ' + currentSolution + 'R');
    maze[y][x] = ' ';
    return;
  }
  if(R===' '){
    let newSolution = currentSolution + 'R';
    solveMaze(maze, [point[0],point[1]+1],newSolution);
  }
  if(L==='e'){
    console.log('A solution is: ' + currentSolution + 'L');
    maze[y][x] = ' ';
    return;
  }
  if(L===' '){
    let newSolution = currentSolution + 'L';
    solveMaze(maze, [point[0],point[1]-1],newSolution);
  }
  if(U==='e'){
    console.log('A solution is: ' + currentSolution + 'U');
    maze[y][x] = ' ';
    return;
  }
  if(U===' '){
    let newSolution = currentSolution + 'U';
    solveMaze(maze, [point[0]-1,point[1]],newSolution);
  }
  if(D==='e'){
    console.log('A solution is: ' + currentSolution + 'D');
    maze[y][x] = ' ';
    return;
  }
  if(D===' '){
    let newSolution = currentSolution + 'D';
    solveMaze(maze, [point[0]+1,point[1]],newSolution);
  }

  maze[y][x] = ' ';
  

    
}

function findAnagrams(word, prefix = ''){
  if(word.length === 1){
    return word;
  }
  if(word.length === 2){
    return [word.charAt(1) + word.charAt(0), word.charAt(0) + word.charAt(1)];
  }
  let anagrams = [];
  for(let i = 0; i < word.length; i++){
    anagrams.push(findAnagrams(word.substring(0,i) + word.substring(i+1)).map(anagram => {
      anagram.split(',');
      word.charAt(i) + anagram;
    }));
  }

  return anagrams;

}

console.log(findAnagrams('east'));