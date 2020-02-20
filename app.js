function caesar(str, num){
  let lowerCaseStr = str.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newStr = '';
  let exception = '1234567890-=[];,./<>?:"{}!@#$%^&*()_+~`\\\' '.split('');
  let except = '';


  for (let i = 0; i < lowerCaseStr.length; i++) {
    let currentLetter = lowerCaseStr[i];

    for (let j = 0; j < exception.length; j++){
      
      if (currentLetter === exception[j]) {
        except = exception[j];
      }
    }

    if (currentLetter === except) {
      newStr += currentLetter;
      continue;
    }
    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + num;
    if (newIndex > 25) newIndex = newIndex - 26; 
    if(newIndex < 0) newIndex =  newIndex + 26 ; 
    if (str[i] === str[i].toUpperCase()){
      newStr += alphabet[newIndex].toUpperCase();
    }
    else newStr += alphabet[newIndex];

  }
  return newStr;
}







function textShow() {
  

  document.querySelector(".codeBtn").addEventListener('click', prompty);

  function prompty(){
    let userInputCode = "";
    let userInputNum = 0; 

    userInputCode = prompt('Enter a sentence', "abc");
    do {userInputNum = parseInt(prompt('Enter a number', "0"));}
    while (isNaN(userInputNum) || userInputNum > 25 || userInputNum < -25);
    document.getElementById("showTheText").textContent = caesar(userInputCode, userInputNum);
  }

  
   
}

textShow();



  
  






