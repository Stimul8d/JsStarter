
var availableTickets = 0;

export default () => {
    this.Given(/^there is (\d+) tickets$/, function (numberOfTickets, callback) {
        availableTickets = numberOfTickets;
        callback();
    });

    this.When(/^i buy (\d+) ticket$/, function (numberOfTickets, callback) {
        // Write code here that turns the phrase above into concrete actions
        callback(null, 'pending');
    });

    this.Then(/^I have (\d+) tickets$/, function (numberOfTickets, callback) {
         // Write code here that turns the phrase above into concrete actions
         callback(null, 'pending');
       });
}