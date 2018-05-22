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




function displayGames(steamid) {
	//called when user submits their id
	//switches state from submit to view
	//getgames function sends the request and then sorts the games and returns an object with sorted arrays and game count
	games.getPlayerName('76561197999989160')
		.then(response =>{
			ui.displayName(response)})
		.catch(err => console.log(err));

	games.getGames('76561197999989160')
		.then(response =>{
			ui.paint(response);
		})
		.catch(err => console.log(err));	
}


/*
//******* NEXT STEPS *******
Allow user to sort by game name, total playtime, and other things? if adding metacritic data sort by rating????.. maybe store in local data if sorting

//Make sure to validate the steamid using regexp or something else

.. make sure to add to error cases with promises and etc some sort of alert function

..make sure to add loading screen if necessary

..app will have display state and submit state, switch between two and hide appropriate buttons/content



//Generate the UI with Results
	//Quick Facts/Minor UI
	//Most Played
	//Least Played(minus games with 0)
	//Never Played
	//List of Games

*/
	