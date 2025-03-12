function gameObject() {
    let obj = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "White"], 
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7
                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                }
            }
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: [ "Turquoise", "Purple"], 
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },
                "Bismak Biyombo": { 
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12
                }
            }
        }
    }
    return obj;
}

    function numPointsScored(name){
        let obj = gameObject()
        if (obj.home.players[name]) {
            return obj.home.players[name].points;
        } else if (obj.away.players[name]) {
            return obj.away.players[name].points;
        } else {
            return "Player not found"; 
        }
        }


    function shoeSize(name){
        let obj = gameObject()
        if (obj.home.players[name]) {
            return obj.home.players[name].shoe;
          } else if (obj.away.players[name]) {
            return obj.away.players[name].shoe;
          } else {
            return "Player not found"; 
          }
        }

    
    function teamColors(teamName) {
        let obj = gameObject()
        if (teamName===obj.home.teamName) {
            return obj.home.colors;
          } else if (teamName===obj.away.teamName) {
            return obj.away.colors
          } else {
            return "Team not found"; 
          }
        }

    function teamNames(){
        let obj = gameObject()
        return [obj.home.teamName,obj.away.teamName]
    }

    
    function playerNumbers(teamName){
        let obj = gameObject()
        let team;
        if (obj.home.teamName === teamName) {
          team = obj.home;
        } else if (obj.away.teamName === teamName) {
          team = obj.away;
        } else {
          return "Team not found";
        }
        
        let numbers = []
        for (let player in team.players) {
          numbers.push(team.players[player].number);
        }
      
        return numbers;
      }
        
          
            
        
    function playerStats (playerName){
        let obj = gameObject()
        let player;
        if (obj.home.players[playerName]) {
            player = obj.home.players[playerName];
          } else if (obj.away.players[playerName]) {
            player = obj.away.players[playerName];
          } else {
            return "Player not found";
          }
          return {
            number: player.number,
            shoe: player.shoe,
            points: player.points,
            rebounds: player.rebounds,
            assists: player.assists,
            steals: player.steals,
            blocks: player.blocks,
            slamDunks: player.slamDunks
          };
        }
        
          

    function bigShoeRebounds (){
    let obj = gameObject()
    let largestShoeSize = 0;
    let rebounds = 0;

    for (let teamKey of ["home", "away"]) {
         let team = obj[teamKey];

    for (let player in team.players) {
        let playerStats = team.players[player];
        if (playerStats.shoe > largestShoeSize) {
            largestShoeSize = playerStats.shoe;
            rebounds = playerStats.rebounds;
        }
        }
      }

      return rebounds;
  }


    function mostPointsScored(){
    let obj = gameObject()
    let mostPoints = 0
    let topScorer = ""

    for (let teamKey of ["home", "away"]) {
      let team = obj[teamKey];

    for (let player in team.players) {
     let playerStats = team.players[player];
     if (playerStats.points > mostPoints) {
         mostPoints = playerStats.points;
         topScorer = player;
    
     }
     }
   }

    return topScorer

    }
  

    function winningTeam() {
      let obj = gameObject();
      let maxPoints = 0;
      let bestTeam = "";
  
      for (let teamKey of ["home", "away"]) {
          let team = obj[teamKey];
          let teamPoints = 0;
  
      for (let player in team.players) {
              teamPoints += team.players[player].points;
          }
          if (teamPoints > maxPoints) {
              maxPoints = teamPoints;
              bestTeam = team.teamName;
          }
      }
  
      return bestTeam;
          
    }


    function playerWithLongestName() {
      let obj = gameObject();
      let longestName = "";
  
      for (let teamKey of ["home", "away"]) {
          let team = obj[teamKey];
  
      for (let player in team.players) {
          if (player.length > longestName.length) {
              longestName = player;
          }
      }
      }
  
      return longestName;
  }
    
    
    function doesLongNameStealATon(){
      let obj = gameObject()
      let longestName = playerWithLongestName()
      let maxSteals = 0
  

      for (let teamKey of ["home","away"]){
        let team = obj[teamKey]
      

      for (let player in team.players) {
       let playerStats = team.players[player]


       if (playerStats.steals > maxSteals) { 
        maxSteals = playerStats.steals; 
        playerWithMostSteals = player; 
    }
      }
    }

    let longestPlayerStats = obj.home.players[longestName] || obj.away.players[longestName];

    return longestPlayerStats.steals === maxSteals; 
    }
          
  
  

 
  console.log(gameObject())
    
  
    

    


    