Login = require './ui/login.coffee'
Instagram = require './api/instagram.coffee'
NavigationType = require './views/nav_type.coffee'

module.exports = class Main

  constructor:()->
    @social_name = 'instagram'
    @container_list = $ '.container .list'
    @login = new Login
    @navigation_type = new NavigationType $('.login-wrapper .search-type')
    $(@login).bind 'onLoginSuccess', @on_login_success
    $(@navigation_type).bind 'onTypeUpdate', @on_type_update

    @ApiInstagram = @login.instagram

  set_token:(token)=>
    if @social_name == 'instagram'
      @ApiInstagram.loged(token)
      $(@ApiInstagram).bind 'partial_load_complete', @feed_table
      $(@ApiInstagram).bind 'load_complete', @close_table

  on_login_success:()=>
    @navigation_type.show()

  on_type_update:()=>
    if @social_name == 'instagram'
      @ApiInstagram.loadByType @navigation_type.current_type

  feed_table:(e)=>

  close_table:(e)=>


$(document).ready ->
  @main = new Main
