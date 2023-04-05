function setup() {
  createCanvas(400, 400);
  
  
}

function draw() {
  background(220);
  
  let xCHORD= 20
  let yCHORD= 20
  let xCHORD2= 380
  let yCHORD2= 0
  
for(let counter =0; counter <20; counter++){
  fill(random(220));
ellipse(xCHORD,yCHORD,30,30)
xCHORD=xCHORD +30 
yCHORD=yCHORD +30
for(let counter =0; counter <20; counter++){
rect(xCHORD2, yCHORD2, 30,30)  
 xCHORD2=xCHORD2 -20 
yCHORD2=yCHORD2 +30 
  
}  
}
}
