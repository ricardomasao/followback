module.exports = class Instagram

  @token = '';

  constructor:()->
    console.log 'Instagram()'

  start:()->
    url = 'https://instagram.com/oauth/authorize/?client_id=07afc136d1d94461bec600cd7ea5e515&redirect_uri=http://local.followback/oauth.html&response_type=token&scope=basic+relationships'
    windowName = 'oauth'
    w = 620
    h = 490
    left = ($(window).width()/2)-(w/2)
    top = ($(window).height()/2)-(h/2)
    windowSize = 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left
    window.open url, windowName, windowSize

  loged:(token)=>
    @token = token
    $.ajax({
        method: "GET",
        url: 'https://api.instagram.com/v1/users/self',
        dataType: "jsonp",
        data: { access_token:@token },
        jsonp: "callback",
        jsonpCallback: "jsonpcallback",
        success: @on_user_data,
        error: @on_error
    })

  on_user_data:(data)=>
    @user_medias = data.data.counts.media
    @user_followers = data.data.counts.followed_by
    @user_follows = data.data.counts.follows
    @user_full = data.data.full_name
    @user_id = data.data.id
    @user_name = data.data.username
    @user_bio = data.data.bio
    @user_website = data.data.website
    @user_profile_picture = data.data.profile_picture

    $(this).trigger 'onLoginSuccess'

  on_error:(jqXHR, textStatus, errorThrown)=>
    $(this).trigger 'onLoginError'
