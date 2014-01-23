module.exports = class Main

  constructor:()->
    @window = $(window)
    console.log 'Main'

$(document).ready ->
  @main = new Main
