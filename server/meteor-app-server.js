/**
 * Created by justin on 7/23/15.
 */

// Meteor server startup function
Meteor.startup(function () {

    debugger;     // line used for debugging with 'meteor debug'

    console.log('Starting up the best Meteor App server in the world');

});

// Accounts create user
Accounts.onCreateUser(function (options, user) {
    //debugger;
    if (options.profile) {
        user.profile = options.profile;
    }
    else {
        user.profile = {};
    }

    user.profile.rank = 'White belt';
    return user;
});
