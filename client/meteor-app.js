
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
    return MeteorApp.deck;
};

// shuffle deck
MeteorApp.shuffleDeck = function () {
    MeteorApp.deck = _.shuffle(MeteorApp.deck);
    Session.set('deck', MeteorApp.deck);
    return MeteorApp.deck;
}


// Main start function
MeteorApp.initializeDeck();

/*
// Tracker autorun for debugging to console
Tracker.autorun(function () {
    console.log('Contents of Deck: ' + Session.get('deck'));
});
*/
