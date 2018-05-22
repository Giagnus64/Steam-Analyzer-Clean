import {http} from "./easyhttp3";
import {games} from "./games";
import {ui} from "./ui";

//Think about somehow incorporating metacritic games API?

//function to get games while passing in 64-bit steam ID(needs different HTTP request)
/*games.getPlayerName('76561197999989160')
.then(response =>{
	ui.displayName(response)})
.catch(err => console.log(err));

games.getGames('76561197999989160')
.then(response =>{
	ui.paint(response);
})
.catch(err => console.log(err));*/


//Event Listeners

//Submit steamid
document.querySelector(".btn-submit").addEventListener('click', verifyInput);

//Enter a Different Steam Id
document.querySelector(".changeID").addEventListener('click', changeState);

function changeState(){
	ui.showSubmitState();
}

function verifyInput(e){
	//e.preventDefault();
	const idInput = document.querySelector("#steamID").value;
	const re = /^[0-9]{17}?/
	if(idInput === '' || !re.test(idInput)){
		ui.showAlert('Please enter a valid steamID', 'error');
	} else{	
		ui.showDisplayState();
		displayGames(idInput);

	}
}

function displayGames(steamid) {
	//called when user submits their id
	//switches state from submit to view
	//getgames function sends the request and then sorts the games and returns an object with sorted arrays and game count
	games.getPlayerName(steamid)
		.then(response =>{
			ui.displayName(response)})
		.catch(err => {
			ui.showAlert('Sorry, there was an error getting your imformation. Please check your steam community settings and make sure you have input the corrent Steam64 ID.', 'error');
			console.log(err)
		});

	games.getGames(steamid)
		.then(response =>{
			ui.paint(response);
		})
		.catch(err => {
			ui.showAlert('Sorry, there was an error getting your imformation. Please check your steam community settings and make sure you have input the corrent Steam64 ID.', 'error');
			console.log(err)});	
}


/*
//******* NEXT STEPS *******
Allow user to sort by game name, total playtime, and other things? if adding metacritic data sort by rating????.. maybe store in local data if sorting

 Add links to bototm

FIX CSS
COMMENT CODE
figure out error testing regarding wrong ID
maybe improt ui class and call show alert if possible?
CONSIDER MORE FEATURES



	//List of Games

*/
	