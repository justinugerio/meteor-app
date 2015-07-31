/**
 * Created by justin on 7/23/15.
 */
/** MeteorApp Namespace file **/

// For user accounts, only require username
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

// Card template helpers
Template.templateListCards.helpers({
    getDeck: function () {
        return _.map(Session.get('deck'), function (val) {
            return {card: val};
        });
    }
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
