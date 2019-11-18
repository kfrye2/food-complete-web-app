require("isomorphic-fetch");
import BPromise from "bluebird";

async function getProfile(foodname){
    return fetch(`http://35.245.126.165/api/info?q=${foodname}`).then(function(resp) {
    //return fetch(`http://localhost:8080/api/info?q=${foodname}`).then(function(resp) {
        //console.log(resp)
        return resp.json();
    })
};

function handleError(error){
    console.warn(error);
    return null;
};

/*function getJson(url) {
    return fetch(url).then(function(resp){
        console.log(url, resp);
        return resp.json();
    })
}*/

function getUserData(food) {
    return BPromise.all([getProfile(food)]).then(function([profile, repos]){
        //console.log(profile);
        return{ profile };
    });
}

module.exports = {
    getInfo: async function(food) {
        //console.log("HERE!");
        return getUserData(food).catch(handleError);
    }
}
