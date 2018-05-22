class UI{
	constructor(){
		//html selectors for dynamic input
		this.submitState = document.querySelector(".submit-state");
		this.displayState = document.querySelector(".display-state");
		this.quickLook = document.querySelector(".quick-look");
		this.steamName = document.querySelector(".steamname");
		this.majorGames = document.querySelector(".major-games");
		this.neverPlayed = document.querySelector(".np-table-body");
		this.allPlayed = document.querySelector(".all-played-body");
	}

	//paint ui
	paint(sortedObj){
		const lpIndex = (sortedObj.playedArr.length - 1);

		console.log(sortedObj);

		//generate first paragraph
		let outputQL = '';
		outputQL +=`
			<p>You have ${sortedObj.game_count} games in your library. 
			You have played ${sortedObj.playedArr.length} games. 
			You have not played ${sortedObj.unplayedArr.length} games.</p>`; 

		this.quickLook.innerHTML = outputQL;

		//generate major games lists
		let outputMG = '';
		outputMG += `
		<div class="most-played">
		  		<h2>Most Played Game</h2>
		  		<img class="mp-image" src="http://media.steampowered.com/steamcommunity/public/images/apps/${sortedObj.playedArr[0].appid}/${sortedObj.playedArr[0].img_logo_url}.jpg" alt="">
		  		<h3 class="mp-name">${sortedObj.playedArr[0].name}</h3>
		  		<h4 class="mp-time">${parseInt(sortedObj.playedArr[0].playtime_forever / 60)} Hours ${sortedObj.playedArr[0].playtime_forever % 60} Minutes</h4>
		    </div>
		    <div class="least-played">
				<h2>Least Played Game</h2>
				<img class="lp-image" src="http://media.steampowered.com/steamcommunity/public/images/apps/${sortedObj.playedArr[lpIndex].appid}/${sortedObj.playedArr[lpIndex].img_logo_url}.jpg" alt="">
		  		<h3 class="lp-name">${sortedObj.playedArr[lpIndex].name}</h3>
		  		<h4 class="lp-time">${parseInt(sortedObj.playedArr[lpIndex].playtime_forever/60)} Hours ${sortedObj.playedArr[lpIndex].playtime_forever%60} Minutes</h4>
		  	</div>`;

		this.majorGames.innerHTML = outputMG;
		
		//Generate never played table
		let outputNP = '';
		sortedObj.unplayedArr.forEach(function(gameObj){
			outputNP += `
			<tr>
		  		<td><img src="http://media.steampowered.com/steamcommunity/public/images/apps/${gameObj.appid}/${gameObj.img_icon_url}.jpg" alt="" class="logo"></td>
		  		<td><span class="game-name">${gameObj.name}</span></td>
		  		<td><span class="playtime">N/A</span></td>
		  	</tr>`;
		});
		this.neverPlayed.innerHTML = outputNP;

		//Generate all played table
		let outputAP = '';
		sortedObj.playedArr.forEach(function(gameObj){
			outputAP += `
			<tr>
		  		<td><img src="http://media.steampowered.com/steamcommunity/public/images/apps/${gameObj.appid}/${gameObj.img_icon_url}.jpg" alt="" class="logo"></td>
		  		<td><span class="game-name">${gameObj.name}</span></td>
		  		<td><span class="playtime">${parseInt(gameObj.playtime_forever / 60)} Hours ${gameObj.playtime_forever % 60} Minutes</span></td>
		  	</tr>`;
		});

		this.allPlayed.innerHTML = outputAP;

	}

	//display player name
	displayName(name){
		this.steamName.textContent= name;
		console.log(name);
	}	
		

}


export const ui = new UI();