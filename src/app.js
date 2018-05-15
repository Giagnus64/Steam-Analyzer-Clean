//Construct games class to pull from SteamAPI
class Games {
 	constructor(steamID){
 		this.APIkey = 'AF45FA8544E0799673BE364C8E8F97E2';
 		//My steam ID for testing purposes
		this.steamID = steamID;
 	}
 	//Get Game List using Steam API
	async getGames(){
	const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${this.APIkey}&include_appinfo=1&steamid=${this.steamID}&format=json`);

	const responseData = await response.json();
	
	return responseData.response;	

	}
}

//Depending on pattern used (module or state?) - potentially place sortGames Function into the games class - that way the data is already in place when calling the results - can pass them to a UI class which will them "paint" the UI
//Think about somehow incorporating metacritic games API?



//Creates games object and passed in Steam ID - for now will just take id from form, will configure OpenID authorization at a later date
const games = new Games('76561197999989160');

function displayGames() {
	let gamesObj;
	games.getGames()
	  .then(results =>{
	  	//maybe place sortGames in the class Games? dunno yet
	  	let sortedArrays = sortGames(results);	  	
	  	console.log(sortedArrays);
	  	//UI.paint(sortedArrays);
	  })
	  .catch(err => console.log(err));


}
//Sorts Games into played and unplayed arrays, by playtime and name, respectively
function sortGames(gamesObj){
	const gamesArray = gamesObj.games;
	let unplayedArr = [];
	let playedArr = [];
	let totalArr = gamesArray;
	let sortedArrays = [];

	gamesArray.forEach(function(game){
		if (game.playtime_forever > 0){
			playedArr.push(game);
		
		} else {
			unplayedArr.push(game);
		}
		
	});
	// sort played games by time
	playedArr.sort(timeCompare);
	//sort unplayed games by name
	unplayedArr.sort(nameCompare);
	//sort all games by name
	totalArr.sort(nameCompare);

	//console.log(unplayedArr, playedArr, totalArr);
	//function to sort (played) games by playtime largest to smallest
	function timeCompare(a,b){
		if(a.playtime_forever < b.playtime_forever){
			return 1;
		}else if(a.playtime_forever > b.playtime_forever){
			return -1;
		}
		return 0;
	}
	//function to sort (unplayed) games alphabetically
	function nameCompare(a,b){
		if(a.name < b.name){
			return -1;
		}else if(a.name > b.name){
			return 1;
		}
		return 0;
	}
	//Remember to return both arrays in ONE array as you cnnot return multiple data values in JS

	sortedArrays.push(unplayedArr, playedArr, totalArr);
	

	return sortedArrays;

}
displayGames();



//******* NEXT STEPS *******
//Convert playtime data to minutes
//Start designing the UI PAINT method?
//BUILD the UI
//THink of possible states when building UI - allow user to sort by game name, total playtime, and other things? if adding metacritic data sort by rating????


/*
			`
			<h2> You have ${games.game_count} games in your library. 
			You have played ${playedArr.length} games. 
			You have not played ${unplayedArr.length} games. 
			document.querySelector('.game-display').innerHTML =
			`<h2>${game1.name}</h2>
			<h4>Time Played: ${game1.playtime_forever}</h4>
			<img src="http://media.steampowered.com/steamcommunity/public/images/apps/${game1.appid}/${game1.img_icon_url}.jpg">
			<img src="http://media.steampowered.com/steamcommunity/public/images/apps/${game1.appid}/${game1.img_logo_url}.jpg">`

}

}

getGames();
this.steamID = '76561197999989160';

//Generate the UI with Results
	//Quick Facts/Minor UI
	//Most Played
	//Least Played(minus games with 0)
	//Never Played
	//List of Games

//Make a games object/Array and sort it according to the playtime numbers
//convert playtimes to proper formates - i.e. convert inutes to Hours/Days/Etc
//Filter out results according to DLC/Toybox/Etc.?
*/
	