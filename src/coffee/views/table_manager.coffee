module.exports = class TableManager

  dom:null

  constructor:(dom)->
    @dom = dom

  increment:(data, page)->
    console.log data[page]
