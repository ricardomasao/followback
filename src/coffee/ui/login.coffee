module.exports = class Login

  constructor:()->
    @setup()

  setup:()->
    @login_button = $('.login-wrapper #login')

    @login_button.bind 'click', @on_login_click
    @instagram = new Instagram
    $(@instagram).bind 'onLoginSuccess', @on_login_success
    $(@instagram).bind 'onLoginError', @on_login_error

  on_login_click:(e)=>
    @instagram.start()

  on_login_success:(e)=>
    @login_button.unbind 'click', @on_login_click
    $(@instagram).unbind 'onLoginSuccess', @on_login_success
    $(@instagram).unbind 'onLoginError', @on_login_error
    TweenLite.to @login_button, .5, { opacity:0, ease:Expo.easeOut, onComplete:@on_button_hidden }

  on_login_error:(e)=>
    @login_button.unbind 'click', @on_login_click
    $(@instagram).unbind 'onLoginSuccess', @on_login_success
    $(@instagram).unbind 'onLoginError', @on_login_error

  on_button_hidden:(e)=>
    TweenLite.set(@login_button,{display:'none'})
    $(this).trigger('onLoginSuccess');
