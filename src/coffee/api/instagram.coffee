module.exports = class Instagram

  constructor:()->
    console.log 'Instagram()'

  start:()->
    url = 'https://instagram.com/oauth/authorize/?client_id=07afc136d1d94461bec600cd7ea5e515&redirect_uri=http://local.followback/oauth.html&response_type=token&scope=basic+relationships'
    windowName = 'oauth'
    w = 620
    h = 490
    left = ($(window).width()/2)-(w/2);
    top = ($(window).height()/2)-(h/2);
    windowSize = 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left
    window.open url, windowName, windowSize

  loged:(token)->
    alert 'LOGED = ' + token
