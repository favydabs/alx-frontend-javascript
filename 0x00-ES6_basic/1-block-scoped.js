export default function taskBlock(trueOrFalse) {
    // Use let instead of var
    let task = false;  
    let task2 = true;   
  
    if (trueOrFalse) {
      let task = true;  
      let task2 = false;  
    }
  
    return [task, task2];
  }

