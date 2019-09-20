var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

         var wins = 0;
         var losses = 0;
         var numGuesses = 9;
         var guessChoices = [];

              var question = confirm("Zohar wants to test your psychic abilities?");
        
            
            if ( question == true ) {
            
             var name = prompt ("Ok here we go! so whats your name?");

               alert ( "Ok " + name +  " lets do this !!" );  
              
               } 
        
            else alert ("ok then.. see you LATER!");
               

         document.onkeyup = function(event) {

            var userGuess = event.key;

            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

            var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
             
            
            if (options.indexOf(userGuess) > -1) {

                if (userGuess === computerGuess) {
                    wins++;
                    numGuesses = 9;
                    guessChoices = [];
                }

                if (userGuess != computerGuess) {
                    numGuesses --;
                    guessChoices.push(userGuess);
                }

                if (numGuesses === 0) {

                numGuesses = 9;
                losses ++;
                guessChoices = [];
                
                }
                
            }

            var html = 
            "<h1> Zohar's Psychic Game </h1>" +
            "<p>Guess what letter I'm thinking of!</p>" +
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + numGuesses + "</p>" +
            "<p>Your Guesses so far: " + guessChoices.join(", ") + "</p>";

            document.querySelector("#game").innerHTML = html;

            
            }
        