/**
 * Created by justin on 7/23/15.
 */
/** MeteorApp Namespace file **/

// Global namespace object
MeteorApp = {};

// For user accounts, only require username
Accounts.ui.config({
    passwordSignupFields: 'USERNAME_ONLY'
});
