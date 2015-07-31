/**
 * Created by justin on 7/23/15.
 */
/** MeteorApp Namespace file **/

// Global namespace object
MeteorApp = {};

// Namespace variables
MeteorApp.list = function () {
    return ['abc', 'def', 'ghi', 'jkl', 'mno'];
}

// Meteor sessions
Session.setDefault('message', 'this is the default session message!');

// For user accounts, only require username
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});

Template.listCards.helpers({
    getList: function () {
        return MeteorApp.list();
    }
});
