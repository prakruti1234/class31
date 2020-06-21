var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle;
var gameState= "play";

var count=0;

var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text("1000", 20, 520);
  text("1000", 100, 520);
  text("300", 180, 520);
  text("500", 260, 520);
  text("500", 340, 520);
  text("500", 420, 520);
  text("500", 500, 520);
  text("300", 580, 520);
  text("1000", 660, 520);
  text("1000", 740, 520);

  Engine.update(engine);
 
  if(particle!= null){
    particle.display();

    if(particle.body.position.y > 760){
        if(particle.body.position.x < 20){
          score = score+500;
          particle=null;
          if (count >= 5) gameState= "end";
        }
    }
  }

  if(particle!= null){
    particle.display();

    if(particle.body.position.y > 760){
        if(particle.body.position.x < 100){
          score = score+500;
          particle=null;
          if (count >= 5) gameState= "end";
        }
    }
  }

  if(particle!= null){
    particle.display();

    if(particle.body.position.y > 760){
        if(particle.body.position.x < 180){
          score = score+500;
          particle=null;
          if (count >= 5) gameState= "end";
        }
    }
  }
  
  if(particle!= null){
    particle.display();

    if(particle.body.position.y > 760){
        if(particle.body.position.x < 260){
          score = score+500;
          particle=null;
          if (count >= 5) gameState= "end";
        }
    }
  }

  if(particle!= null){
    particle.display();

    if(particle.body.position.y > 760){
        if(particle.body.position.x < 340){
          score = score+500;
          particle=null;
          if (count >= 5) gameState= "end";
        }
    }
  }

  if(particle!= null){
    particle.display();

    if(particle.body.position.y > 760){
        if(particle.body.position.x < 420){
          score = score+500;
          particle=null;
          if (count >= 5) gameState= "end";
        }
    }
  }

  if(particle!= null){
    particle.display();

    if(particle.body.position.y > 760){
        if(particle.body.position.x < 500){
          score = score+500;
          particle=null;
          if (count >= 5) gameState= "end";
        }
    }
  }

  if(particle!= null){
    particle.display();

    if(particle.body.position.y > 760){
        if(particle.body.position.x < 580){
          score = score+500;
          particle=null;
          if (count >= 5) gameState= "end";
        }
    }
  }

  if(particle!= null){
    particle.display();

    if(particle.body.position.y > 760){
        if(particle.body.position.x < 660){
          score = score+500;
          particle=null;
          if (count >= 5) gameState= "end";
        }
    }
  }

  if(particle!= null){
    particle.display();

    if(particle.body.position.y > 760){
        if(particle.body.position.x < 740){
          score = score+500;
          particle=null;
          if (count >= 5) gameState= "end";
        }
    }
  }
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(30,770), 10,10));
    
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   //particle.score();
}

function mousePressed(){
  if(gameState!=="end"){
    count++
    particle= new Particle(mouseX,10,10,10);
  }
}