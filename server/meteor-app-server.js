/**
 * Created by justin on 7/23/15.
 */

// Meteor server startup function
Meteor.startup(function () {


});

// Accounts create user
Accounts.onCreateUser(function (options, user) {
    if (options.profile) {
        user.profile = options.profile;
    }
    else {
        user.profile = {};
    }

    user.profile.rank = 'White belt';
    return user;
});
