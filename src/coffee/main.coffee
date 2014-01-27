Login = require './ui/login.coffee'
Instagram = require './api/instagram.coffee'
NavigationType = require './views/nav_type.coffee'

module.exports = class Main

  constructor:()->
    @social_name = 'instagram'
    @login = new Login
    @navigation_type = new NavigationType $('.login-wrapper .search-type')
    $(@login).bind 'onLoginSuccess', @on_login_success
    $(@navigation_type).bind 'onTypeUpdate', @on_type_update

  set_token:(token)=>
    if @social_name == 'instagram'
      @login.instagram.loged(token)

  on_login_success:()=>
    @navigation_type.show()

  on_type_update:()=>
    console.log 'UPDATE = '+@navigation_type.current_type

$(document).ready ->
  @main = new Main
