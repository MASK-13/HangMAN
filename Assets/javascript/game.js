


window.onload = function () {
    

      var arrAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
            'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
            't', 'u', 'v', 'w', 'x', 'y', 'z'];
      var arrWords;         // Array of topics
      var word ;              // Selected word
      var guess ;             // Geuss
      var arrGuesses = [ ];      // Stored arrGuesses
      var lives ;             // Lives
      var RightCnt ;           // Count RightGuess arrGuesses
      var imgcount=0;         //img counter
      var imgSrcBase = "Assets/images/";
      var imgSrcEnd = ".png";


      // Get elements
      var LiveCounter = document.getElementById("livesCounter");
      var manImg = document.getElementById("manImg");
      var reset = document.getElementById('reset');
    
      // creates List with alphabet letts in it. 
      function buttons () {
        myButtons = document.getElementById('alphabuttons');
        letters = document.createElement('ul');
        for (var i = 0; i < arrAlphabet.length; i++) {
          letters.id = 'alphabet';
          alphaList = document.createElement('li');
          alphaList.id = 'letter';
          alphaList.innerHTML = arrAlphabet[i];
          guessCheck();
          myButtons.appendChild(letters);
          letters.appendChild(alphaList);
        }
      }
        
      // handles image cycling
      function Cut (){
        manImg.src=imgSrcBase+imgcount+imgSrcEnd;
        imgcount++;
        manImg.src=imgSrcBase+imgcount+imgSrcEnd;  
    }

      // Create guesses array List
        function result () {
        wordHolder = document.getElementById('man');
        RightGuess = document.createElement('ul');
    
        for (var i = 0; i < word.length; i++) {
          RightGuess.setAttribute('id', 'WordBlanks');
          guess = document.createElement('li');
          guess.setAttribute('class', 'guess');
          guess.innerHTML = "_";
    
          arrGuesses.push(guess);
          wordHolder.appendChild(RightGuess);
          RightGuess.appendChild(guess);
        }
      }
      
      // lives counter and change text of counter
        function changeText () {
        LiveCounter.innerHTML = "You have " + lives + " lives";
        if (lives == 0) {
          LiveCounter.innerHTML = "Game Over";
          letters.parentNode.removeChild(letters);
          reset.innerHTML="Play Again";
        }
        for (var i = 0; i < arrGuesses.length; i++) {
          if (RightCnt  === arrGuesses.length) {
            LiveCounter.innerHTML = "You Win!";
            reset.innerHTML="Play Again";
          }
        }
      }
    
     
    
      // Checks guesses
        function guessCheck () {
        alphaList.onclick = function () {
          var guessText = (this.innerHTML);
          this.setAttribute("class","clicked");
          for (var i = 0; i < word.length; i++) {
            if (word[i] === guessText) {
              arrGuesses[i].innerHTML = guessText;
              RightCnt += 1;
            } 
          }
          var j = (word.indexOf(guessText));
          if (j === -1) {
            lives -= 1;
            changeText();
            Cut();
          } else {
            changeText();
          }
          console.log(imgcount);
        }
      }
      
        
      // Play
       function play () {
        arrWords = [
          "lumber"	,
          "unibrow"	,
          "work"	,
          "health"	,
          "stove"	,
          "humdrum"	,
          "pie"	,
          "direct"	,
          "nutty"	,
          "dysfunctional"	,
          "tramp"	,
          "awful"	,
          "cactus"	,
          "sloppy"	,
          "trashy"	,
          "harmony"	,
          "nifty"	,
          "curve"	,
          "invite"	,
          "rock"	,
          "connection"	,
          "tranquil"	,
          "corn"	,
          "reward"	,
          "dust"	,
          "return"	
          ];
        word = arrWords[Math.floor(Math.random() * arrWords.length)];
        console.log(word);
        buttons();
        arrGuesses = [ ];
        lives = 9;
        RightCnt = 0;
        result();
        changeText();
        imgcount=0;
        manImg.src=imgSrcBase+imgcount+imgSrcEnd;
        console.log(imgcount);
        reset.innerHTML="Reset";
      }
      play();
      
      
    
       // Reset
      reset.onclick = function() {
        if (reset.innerHTML=="Reset"){
          letters.parentNode.removeChild(letters);
          RightGuess.parentNode.removeChild(RightGuess);
          play();
        }
        else {
          RightGuess.parentNode.removeChild(RightGuess);
          play();
        }

      }
    }
    
    
    