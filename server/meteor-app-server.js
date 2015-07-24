/**
 * Created by justin on 7/23/15.
 */

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
