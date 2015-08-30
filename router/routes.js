/**
 * Created by justin on 7/28/15.
 */

Router.configure({
    layoutTemplate: 'layout'
});

Router.route('/', {
    template: 'home'
});

Router.route('/speed/', {
    template: 'speed'
});

Router.route('/about', {
    template: 'about'
});
