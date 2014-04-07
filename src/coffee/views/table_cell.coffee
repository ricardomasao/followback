module.exports = class TableCell

  dom:{}

  constructor:(name, id, bio, picture, username, website)->
    @dom = $ '<a href="" target="_blank"><li class="row item"></li></a>'
    DOM_MEDIA_COLUMN = $ '<div class="col-xs-2 col-sm-2 col-md-2 media"><a href="#" target="_blank"><img class="media-object" src="" alt=""></a></div>'
    DOM_NAME_COLUMN = $ '<div class="col-xs-8 col-sm-8 col-md-8 texto"><p><span></span></p></div>'
    DOM_BUTTON_COLUMN = $ '<div class="col-xs-2 col-sm-2 col-md-2 container-button"><span class="bt"></span></div>'
    DOM_BUTTON_FOLLOW = $ '<button id="follow" type="button" class="btn btn-success btn-sm"><strong>+</strong> FOLLOW</button>'
    DOM_BUTTON_UNFOLLOW = $ '<button id="follow" type="button" class="btn btn-success btn-sm"><strong>-</strong> UNFOLLOW</button>'

    @dom.attr('href',@link+username)
    DOM_MEDIA_COLUMN.find('img').attr('src',picture)
    DOM_MEDIA_COLUMN.find('a').attr('href',picture)
    DOM_NAME_COLUMN.find('p').find('span').append name

    @dom.find('li').append DOM_MEDIA_COLUMN
    @dom.find('li').append DOM_NAME_COLUMN

    @dom.find('li').append DOM_BUTTON_COLUMN

  add_cell_to_table:(parent)->
    parent.append @dom
