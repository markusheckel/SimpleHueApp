var App = function () {
    //console.log('App');
    
    //this.clearAccess();
    //this.saveAccess({'ip': '192.168.9.27', 'user': '1q2w3e4r5t6z7u8i9o0p'});
    
    var accessData = this.loadAccess();
    if (accessData) {
        console.log("ip = " + accessData.ip + " | user = " + accessData.user);
    } else {
        console.log("NO ACCESS DATA.");
    }
}









// Load and save access data to local storage

App.prototype.loadAccess = function () {
    var storage = window.localStorage;
    
    if (storage.length > 0) {
        var ip = storage.getItem('bridge.ip');
        var user = storage.getItem('bridge.user');

        return ({'ip': ip, 'user': user});
    } else {
        return null;
    }
}

App.prototype.saveAccess = function (data) {
    var ip = data.ip;
    var user = data.user;
    
    var storage = window.localStorage;
    storage.setItem('bridge.ip', ip);
    storage.setItem('bridge.user', user);
    
}

App.prototype.clearAccess = function () {
    var storage = window.localStorage;
    
    storage.removeItem('bridge.ip');
    storage.removeItem('bridge.user');
    
    storage.clear();
}
