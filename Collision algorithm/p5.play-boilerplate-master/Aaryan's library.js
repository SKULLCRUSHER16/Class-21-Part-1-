// Here we have created two objects-object1 and object2
function COLLISION(object1,object2){
    if(object1.x-object2.x<object2.width/2+object1.width/2 && 
      object2.x-object1.x<object2.width/2+object1.width/2 && 
      object1.y-object2.y<object2.height/2+object1.height/2 && 
      object2.y-object1.y<object2.height/2+object1.height/2 ){
          // Here true means yes.This means the condition is working
      return true;
    }
    else{
        // Here false means no. This means the condition is not working
     return false;
    }
  
  
  
  
  }