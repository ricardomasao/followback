Login = require './ui/login.coffee'
Instagram = require './api/instagram.coffee'

module.exports = class Main

  constructor:()->
    @login = new Login

$(document).ready ->
  @main = new Main
