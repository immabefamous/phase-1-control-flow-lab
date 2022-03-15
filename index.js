function scuberGreetingForFeet(x){
  // Write your code here!
  let result;
  if (x <= 400){ 
    result = 'This one is on me!'
  }
    else if ( x > 2000 && x < 2500){
      result = 'I will gladly take your thirty bucks.'
    }
    else if (x >= 2500){
      result = 'No can do.'
  }

  return result
}

function ternaryCheckCity(x){
  // Write your code here!
  let re;
  if (x === 'NYC') {
    re = "Ok, sounds good."
  }
  else if (x !== 'NYC') {
    re = "No go."
  }
  return re
}

function switchOnCharmFromTip(x){
  // Write your code here!

  let option;
  switch (x) {
    case 'generous':
     option = "Thank you so much.";
     break;
  
    case 'not as generous':
      option = "Thank you."
      break;

    case 'thanks for everything':
      option = "Bye."
      break;
    
    default:
      option = "Unknown"
      break;
  }
  return option
}