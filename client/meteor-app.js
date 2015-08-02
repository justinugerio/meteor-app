
// Global namespace object
MeteorApp = {};

// Namespace variables
MeteorApp.listRanks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K'];
MeteorApp.listSuits = ['D', 'C', 'H', 'S'];
MeteorApp.deck = [];
MeteorApp.initializeDeck;
MeteorApp.shuffleDeck;

// initialize deck
MeteorApp.initializeDeck = function() {

    MeteorApp.deck = [];    // clear existing deck
    Session.set('deck', MeteorApp.deck);

    _.forEach(MeteorApp.listRanks, function (rank) {
        _.forEach(MeteorApp.listSuits, function (suit) {
            MeteorApp.deck.push(rank + suit);
        }); // end suits
    }); // end ranks

    Session.set('deck', MeteorApp.deck);
    MeteorApp.setGameHands();
    return MeteorApp.deck;
};

// shuffle deck
MeteorApp.shuffleDeck = function () {
    MeteorApp.deck = _.shuffle(MeteorApp.deck);
    Session.set('deck', MeteorApp.deck);
    MeteorApp.setGameHands();
    return MeteorApp.deck;
}

// set game hands, i.e. deal hands too players and game
MeteorApp.setGameHands = function() {
    var deck = MeteorApp.deck;

    // player1 hands
    Session.set('player1-starting-hand', deck.slice(0, 5));
    Session.set('player1-reserve-hand', deck.slice(5, 20));

    // game hands
    Session.set('game-reset1-hand', deck.slice(20, 25));;
    Session.set('game-start1-hand', deck.slice(25, 26));
    Session.set('game-start2-hand', deck.slice(26, 27));
    Session.set('game-reset2-hand', deck.slice(27, 32));

    // player 2 hands
    Session.set('player2-starting-hand', deck.slice(32, 37));
    Session.set('player2-reserve-hand', deck.slice(37, 52));
};


// Main start function
MeteorApp.initializeDeck();

/*
// Tracker autorun for debugging to console
Tracker.autorun(function () {
    console.log('Contents of Deck: ' + Session.get('deck'));
});
*/
