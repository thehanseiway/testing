function checkForShip(player, coords) {
    var shipPresent = false;
    var ship;

    for(var i = 0; i < player.ships.length; i+=1) {
        var ship = player.ships[i];

        shipPresent = ship.locations.filter(function(actualCoords) {

            return (actualCoords[0] === coords[0]) && (actualCoords[1] === coords[1]);

        })[0];

        if(shipPresent) {
            return true;
        }
    }
    
    return false;
}

module.exports.checkForShip = checkForShip;
