var friendsData = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        res.json(friendsData);
    });

    app.post("/api/friends", function(req, res) {



var currentUser = friendsData[friendsData.length-1];
    var splicedArray = friendsData.slice(0, friendsData.length-1);

    for(var i=0; i<splicedArray.length; i++){
    var totalDifference = [] //array for total differences of each person
    var totDifofI = math.abs(currentUser.score[1]-splicedArray[i].score[1])+
    math.abs(currentUser.score[2]-splicedArray[i].score[2])+
    math.abs(currentUser.score[3]-splicedArray[i].score[3])+
    math.abs(currentUser.score[4]-splicedArray[i].score[4])+
    math.abs(currentUser.score[5]-splicedArray[i].score[5])+
    math.abs(currentUser.score[6]-splicedArray[i].score[6])+
    math.abs(currentUser.score[7]-splicedArray[i].score[7])+
    math.abs(currentUser.score[8]-splicedArray[i].score[8])+
    math.abs(currentUser.score[9]-splicedArray[i].score[9])+
    math.abs(currentUser.score[10]-splicedArray[i].score[10]); //total differnce per index
    totalDifference.push(totDifofI);

    var rearray = []; //array for sorting person based off total differences
    rearray.push({
      compositeScore: totalDifference[i];
      person: splicedArray[i];
    })
    rearray.sort(function(a, b){
      return a.compositeScore-b.compositeScore;
    }); //sort based off of total difference
    var matchData = rearray[0].person; //object-person with lowest total difference

    }
  

    // res.json(userData.name + userData.photo);
    // res.json(userData);
    friendsData.push(req.body);
    res.send(matchData);


        });

}

