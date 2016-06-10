$(document).ready(function () {
    //alert("ready");
    
    var app = new App ();
    
    
    
    
    /*
    var hue = jsHue();
    
    hue.discover(
        function(bridges) {
            if(bridges.length === 0) {
                console.log('No bridges found. :(');
            }
            else {
                bridges.forEach(function(b) {
                    console.log('Bridge found at IP address %s.', b.internalipaddress);
                });
            }
        },
        function(error) {
            console.error(error.message);
        }
    );
    */
    
    
    /*
    var bridge = hue.bridge('192.168.1.2');

    // create user account (requires link button to be pressed)
    bridge.createUser('foo application', function(data) {
        // extract bridge-generated username from returned data
        var username = data[0].success.username;

        console.log('New username:', username);

        // instantiate user object with username
        var user = bridge.user(username);
    });
    */
    
    
    
    /*
    user.setLightState(1, { on: true }, function(data) {  });
    */
});