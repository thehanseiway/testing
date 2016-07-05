var expect = require('chai').expect;

describe('checkForShip', function() {

    var checkForShip = require('../game-logic/ship-methods').checkForShip;

    it('should correctly report no ship at a given players coordinates', function() {

        var player = {
            ships: [
                {locations: [[0, 0]]},
            ],
        };

        expect(checkForShip(player, [8, 8])).to.be.false;

    });

    it('should correctly report a ship located at a given players coordinates', function() {

        var player = {
            ships: [
                {locations: [[0, 0]]},
            ],
        };

        expect(checkForShip(player, [0, 0])).to.be.true;

    });

    it('should handle multiple ships located at more than one coordinate', function() {

        var player = {
            ships: [
                {locations: [[0, 0], [0, 8]]},
            ],
        };

        expect(checkForShip(player, [0, 0])).to.be.true;
        expect(checkForShip(player, [0, 8])).to.be.true;
        expect(checkForShip(player, [8, 8])).to.be.false;

    });

    it('should handle multiple player ships locations', function() {

        var player = {
            ships: [
                {locations: [[0, 0], [0, 8]]},
                {locations: [[1, 0], [2, 8]]},
            ],
        };

        expect(checkForShip(player, [0, 0])).to.be.true;
        expect(checkForShip(player, [0, 8])).to.be.true;
        expect(checkForShip(player, [1, 0])).to.be.true;
        expect(checkForShip(player, [2, 8])).to.be.true;
        expect(checkForShip(player, [3, 3])).to.be.false;

    });
});
