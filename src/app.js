import {http} from "./easyhttp3";
import {games} from "./games";
import {ui} from "./ui";

//Event Listeners

//Submit steamid
document.querySelector(".btn-submit").addEventListener('click', verifyInput);

//Enter a Different Steam Id
document.querySelector(".changeID").addEventListener('click', changeState);
//Example button
document.querySelector(".btn-example").addEventListener('click',
	showExample);

//calls state change from UI class
function changeState(){
	ui.showSubmitState();
}
//verifies that the input is a 17-digit number and not empty
function verifyInput(e){
	const idInput = document.querySelector("#steamID").value;
	const re = /^[0-9]{17}?/
	if(idInput === '' || !re.test(idInput)){
		ui.showAlert('Please enter a valid steamID', 'error');
	} else{	
		//switches state form submit to view 
		ui.showDisplayState();
		displayGames(idInput);
	}
}
//called when user submits their id
//getgames function sends the request and then sorts the games and returns an object with sorted arrays and game count*/
function displayGames(steamid) {
	
	games.getPlayerName(steamid)
		.then(response =>{
			ui.displayName(response)})
		.catch(err => {
			ui.showAlert('Sorry, there was an error getting your information. Please check your steam community settings and make sure you have input the correct Steam64 ID.', 'error');
			console.log(err)
		});

	games.getGames(steamid)
		.then(response =>{
			console.log(response);
			if(response === 'error'){
				ui.showError();
			} else{
				ui.paint(response);
			}
		})
		.catch(err => {
			ui.showAlert('Sorry, there was an error getting your information. Please check your steam community settings and make sure you have input the correct Steam64 ID.', 'error');
			console.log(err)});	
}
//shows an example state with designer's steamID
function showExample(){
	ui.showDisplayState();
	displayGames('76561197999989160');
}

	