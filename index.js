document.addEventListener('DOMContentLoaded', function() {
    //prompts user for their name and then save it in local storage
    let userName = prompt ('Please enter your name:"); 
        let user = {
            name: userName,
            first: 0,
            wrongs; 0
        };
        //Strigfy the user stuff via JSON and save it to local storage 
        localStorage.setItem('user', JSON.stringify(user));
        //empty array to contain the 7 names then a  for 
        // loop to prompt user 7 times for a name from LOTR
    let names =[];
    for (let i=0; i < 7; i++) {
        let name = prompt ('Enter a name from Lord of the Rings:");
            names.push(name);
    }
    //random integer 0-6 value of math.random gives decimal 0 (inclusive)
    //to 1 (exclusive) then multiplying it by 7 gives 0-6 added the 
    //mathfloor to round the decimal down to a whole number 
    
    let randomIndex = Math.floor Math.floor(Math.random()
    * 7);
    //Display the random name with another for loop.  
    let namesContainer = document.getElementById('namesContainer');
    for (let i=0; i < names.length; i++) {
        //new paraggraph for the names.  
        let paragraph = document.createElement('p');
        //show paragraph with the random name and the i=index
        paragraph.textContent = i +": "+ names[i];
        //add the paragraph where the names are displayed in the html 
        //with appendchild the stickynote 
        namesContainer.appendChild(paragraph);
    
        //naming a variable to keep track of the score 
    let attempts = 0;

    //declare variables for the form and input
    // add event listner to the form to get the score without refreshing the page 
    let guessform = document.getElementById('guessform');
    let guessInput = document.getElementById('guessInput');

    guessform.addEventListener('submit', function(event) {
        //found online to stop it from refreshing the page like it would normally 
        event.preventDefault();

        //not for login but for game info for when someone makes a guess
        attempts++;
        //grabs the guessed number from the user input and converts it to an integer
let guess = parseInt(guessInput.value);
//get the userobject from above from local storage 
let storeduser = JSON.parse(localStorage.getItem('user'));

//Check if the guess is right 
if (guess === randomIndex) {
    // If the guess is right on the first try, add to the integer from the user input
    if (attempts === 1) {
        storedUser.first = storedUser. first + 1;
    }
    //Shows an aert for user with custom name and how many tries
    alert('Hooray for you, ' + storedUser.name + ' ! It only took you ' + attempts + '.')
}
    } else {
        //if the guess is not right then add 1 to the guess counter
        storedUser.wrongs = storedUser.wrongs + 1;
        //alert to tell them they guessed wrong
        alert( 'Try again,' + storedUser.name + 'Keep on guessing! Your current score is ' + storedUser.first +  ' correct and ' + storedUser . wrongs + ' wrong.');
    }
    //Updates the user stuff in local storage 
localStorage.setItem('user' , JSON.stringify(storedUser));
 
//Clear the box for the next round of guesses 
guessInput.value = '';

});
});
    