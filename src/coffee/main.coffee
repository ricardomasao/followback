Login = require './ui/login.coffee'
Instagram = require './api/instagram.coffee'

module.exports = class Main

  constructor:()->
    @login = new Login

  set_token:(token)->
    @login.instagram.loged(token)

$(document).ready ->
  @main = new Main
