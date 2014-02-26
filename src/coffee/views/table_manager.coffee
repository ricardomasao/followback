module.exports = class TableManager

  dom:null

  constructor:(dom)->
    @dom = dom

  increment:(data, page)->
    i = 0
    len = data[page].length
    console.log data[page]
    return
    while i < len
      DOM_ITEM = $ '<li class="row item"></li>'
      DOM_MEDIA_COLUMN = $ '<div class="col-xs-2 col-sm-2 col-md-2 media"><a href="#" target="_blank"><img class="media-object" src="" alt=""></a></div>'
      DOM_NAME_COLUMN = $ '<div class="col-xs-8 col-sm-8 col-md-8 texto"><p><span></span></p></div>'
      DOM_BUTTON_COLUMN = $ '<div class="col-xs-2 col-sm-2 col-md-2 container-button"><span class="bt"></span></div>'
      DOM_BUTTON_FOLLOW = $ '<button id="follow" type="button" class="btn btn-success btn-sm"><strong>+</strong> FOLLOW</button>'
      DOM_BUTTON_UNFOLLOW = $ '<button id="follow" type="button" class="btn btn-success btn-sm"><strong>-</strong> UNFOLLOW</button>'

      name = data[page][i].full_name
      id = data[page][i].id
      bio = data[page][i].bio
      picture = data[page][i].profile_picture
      username = data[page][i].username
      website = data[page][i].website

      DOM_MEDIA_COLUMN.find('img').attr('src',picture)
      DOM_MEDIA_COLUMN.find('a').attr('href',picture)

      DOM_ITEM.append DOM_MEDIA_COLUMN
      DOM_ITEM.append DOM_NAME_COLUMN

      DOM_ITEM.append DOM_BUTTON_COLUMN
      i++

    console.log data[page]
