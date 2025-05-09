function setup() {
  createCanvas(800, 800);
  background('rgb(52,141,250)');
  
  
  stroke(0);
  strokeWeight(2);
  line(356,206,357,170);
  
  stroke(255);
  strokeWeight(1);
  
  fill('black');
  triangle(280,750,400,750,350,200);
  triangle(400,750,350,200,388,245);
  triangle(350,200,280,750,308,245);
  
  fill('rgb(250,250,32)');
  circle(800,0,200);
  
  fill('rgb(235,98,98)');
  rect(668,357,668,800,);
  fill('gray');
  rect(0,365,100,600);
  fill('rgb(206,103,76)');
  rect(167,600,100,200);
  fill(255);
  rect(458,501,100,400)
  line()
  
  fill(255);
  circle(127,70,25);
  circle(139,78,25);
  circle(124,84,25);
  circle(107,74,25);
  circle(625,167,25);
  circle(635,181,25);
  circle(612,184,25);
  circle(607,164,25);
  circle(131,243,25);
  circle(145,255,25);
  circle(122,260,25);
  circle(137,270,25);
  
  fill('gray');
  rect(280,750,120,750,);
  line(381,256,380,279);
  line(373,251,372,270);
  line(366,241,364,262);
  line(318,256,318,278);
  line(328,250,328,270);
  line(337,243,337,265);
}
  function draw(){
  console.log(mouseX,mouseY);
}
