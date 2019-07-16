// add solution here

function theBeatlesPlay(musicians, instruments) {
  let arrayHolder = [];
  
  // musicians.forEach( function(player){
  //   let statement = player + ' plays '; 
  //   instruments.forEach(function(tool){
      
  //   })
  //   arrayHolder.push(statement);
  // });
  
  for(var i=0; i < musicians.length && i < instruments.length; i++){
    let statement = musicians[i] + ' plays ' + instruments[i];
    
    arrayHolder.push(statement);
  }
  
  return arrayHolder;
}

function johnLennonFacts(facts) {
  let jFacts = facts;
  let i = 0;
  let emptyArr = [];
  
  while(i < jFacts.length) {
    let newText = jFacts[i] + '!!!';
    emptyArr.push(newText);
    i++;
  }

  return emptyArr;
}



function iLoveTheBeatles(number) {
  let iterate = number - 15;
  let emptyArr = [];
  
  do {
    let text = 'I love the Beatles!';
    emptyArr.push(text);
    iterate--;
  } while(iterate < 15);
  
  return emptyArr;
}




