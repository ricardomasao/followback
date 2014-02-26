Login = require './ui/login.coffee'
Instagram = require './api/instagram.coffee'
NavigationType = require './views/nav_type.coffee'
TableManager = require './views/table_manager.coffee'
#Relationship = require './api/helpers/relationships.coffee'

module.exports = class Main

  constructor:()->
    @social_name = 'instagram'
    @container_list = $ '.container .list'
    @login = new Login
    @navigation_type = new NavigationType $('.login-wrapper .search-type')
    @table_manager = new TableManager @container_list
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

  feed_table:(event)=>
    @table_manager.increment event.currentTarget.array_data, event.currentTarget.current_page

  close_table:(event)=>
    console.log 'close_table'


$(document).ready ->
  @main = new Main
