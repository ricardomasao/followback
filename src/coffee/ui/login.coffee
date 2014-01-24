module.exports = class Login

  constructor:()->
    @setup()

  setup:()->
    $('.login-wrapper #login').bind 'click', @on_login_click
    @instagram = new Instagram

  on_login_click:(e)=>
    @instagram.start()
