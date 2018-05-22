import {http} from "./easyhttp3";
import {games} from "./games";

//Think about somehow incorporating metacritic games API?

//function to get games while passing in 64-bit steam ID
games.getGames('76561197999989160')
.then(response =>
	console.log(response))
.catch(err => console.log(err));


function displayGames() {
	//called when user submits their id
	//switches state from submit to view
	//getgames function sends the request and then sorts the games and returns an object with sorted arrays and game count
	//paint function passes in that object and paints the ui for the user

	
}


/*
//******* NEXT STEPS *******

//Convert playtime data to minutes - do during sort or in UI
//Start designing the UI PAINT method
Allow user to sort by game name, total playtime, and other things? if adding metacritic data sort by rating????.. maybe store in local data if sorting

//Make sure to validate the steamid using regexp or something else

.. make sure to add to error cases with promises and etc some sort of alert function

..make sure to add loading screen if necessary

..app will have display state and submit state, switch between two and hide appropriate buttons/content






			
USE BELOW AS PARAGRAPH OR LIST TO START OUT

			<h2> You have ${games.game_count} games in your library. 
			You have played ${playedArr.length} games. 
			You have not played ${unplayedArr.length} games. 
			document.querySelector('.game-display').innerHTML =
			`<h2>${game1.name}</h2>
			<h4>Time Played: ${game1.playtime_forever}</h4>
			<img src="http://media.steampowered.com/steamcommunity/public/images/apps/${game1.appid}/${game1.img_icon_url}.jpg">
			<img src="http://media.steampowered.com/steamcommunity/public/images/apps/${game1.appid}/${game1.img_logo_url}.jpg">`


//Generate the UI with Results
	//Quick Facts/Minor UI
	//Most Played
	//Least Played(minus games with 0)
	//Never Played
	//List of Games

*/
	