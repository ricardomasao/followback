module.exports = class Instagram

  @token = '';

  constructor:()->
    #console.log 'New Instagram()'

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
        success: @on_user_loged,
        error: @on_error
    })

  on_user_loged:(data)=>
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

  loadByType:(type)=>
    @next_url = null
    @array_data = []
    @total_pages = 0
    @current_page = 0

    if @data_loader?
        @data_loader.abort()

    if type == 'following'
        url = 'https://api.instagram.com/v1/users/'+@user_id+'/follows'
    else
        url = 'https://api.instagram.com/v1/users/'+@user_id+'/followed-by'

    @load url

  load:(url)=>
    @data_loader = $.ajax({
        method: "GET",
        url: url,
        dataType: "jsonp",
        data: { access_token:@token },
        jsonp: "callback",
        jsonpCallback: "jsonpcallback",
        success: @on_user_data,
        error: @on_error
    })

  on_user_data:(data)=>
    @next_url = data.pagination.next_url

    currentData = data.data

    @array_data.push currentData
    @total_pages = @array_data.length

    if @next_url isnt undefined or @next_url?
        $(this).trigger 'partial_load_complete'
        @current_page++
    else
        $(this).trigger 'load_complete'

  get_relationship:(user_id)=>
    #relationship = new Relationship @token
    #$(relationship).on 'relationship_loaded', @_on_relationship_lodaded
    #relationship.load user_id

  _on_relationship_lodaded:(id)=>
    #console.log id
