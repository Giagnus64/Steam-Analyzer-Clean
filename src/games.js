import {http} from "./easyhttp3";

//Construct games class to pull from SteamAPI
class Games {
 	constructor(){
 		this.APIkey = 'AF45FA8544E0799673BE364C8E8F97E2';
 		//My steam ID for testing purposes
		this.steamID = '';
 	}

 	//Get Game List using Steam API
	getGames(steamid){
	//set steamID to user's entered id
	this.steamID = steamid;
	let sortedObj;
	//run get request via http library, and return sorted object
	return http.get(`https://cors-anywhere.herokuapp.com/http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=${this.APIkey}&include_appinfo=1&steamid=${this.steamID}&format=json`)
		.then(results => {
			//returns response within results.response
			//sort Games via function
			 sortedObj = this.sortGames(results.response);
			//return the sorted games object
			return sortedObj;
					})
		.catch(err => console.log(err));
		
		
	}

	//Sorts Games into played and unplayed arrays, by playtime and name, respectively
	sortGames(gamesObj){
		//establish variables to place in returned sorted object
		const game_count = gamesObj.game_count;
		const gamesArray = gamesObj.games;
		let unplayedArr = [];
		let playedArr = [];
		let totalArr = gamesArray;

		//set games in played and unplayed arrays
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

		//Place data in object to return using ES6 notation
		

		const data = {
			game_count,
			unplayedArr,
			playedArr,
			totalArr
		}

		return data;

	}
}
 export const games = new Games();