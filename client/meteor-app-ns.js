/**
 * Created by justin on 7/23/15.
 */
/** MeteorApp Namespace file **/

// For user accounts, only require username
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

// Card template events
Template.templateControlButtons.events({
    'click #btn-reset-deck': function (event, template) {
        MeteorApp.initializeDeck();
    },
    'click #btn-shuffle-deck': function (event, template) {
        MeteorApp.shuffleDeck();
    }
});

// Card template helpers
Template.templateListCards.helpers({
    getDeck: function () {
        return _.map(Session.get('deck'), function (val) {
            return {card: val};
        });
    },
    getPlayer1StartingCards: function() {
        return _.map(Session.get('player1-starting-hand'), function (val) {
            return {card: val};
        })
    },
    getPlayer1ReserveCards: function() {
        return _.map(Session.get('player1-reserve-hand'), function (val) {
            return {card: val};
        })
    },
    getPlayer2StartingCards: function() {
        return _.map(Session.get('player2-starting-hand'), function (val) {
            return {card: val};
        })
    },
    getPlayer2ReserveCards: function() {
        return _.map(Session.get('player2-reserve-hand'), function (val) {
            return {card: val};
        })
    },
    getGameReset1Cards: function() {
        return _.map(Session.get('game-reset1-hand'), function (val) {
            return {card: val};
        })
    },
    getGameStart1Cards: function() {
        return _.map(Session.get('game-start1-hand'), function (val) {
            return {card: val};
        })
    },
    getGameStart2Cards: function() {
        return _.map(Session.get('game-start2-hand'), function (val) {
            return {card: val};
        })
    },
    getGameReset2Cards: function() {
        return _.map(Session.get('game-reset2-hand'), function (val) {
            return {card: val};
        })
    }
});


