module.exports = class NavigationType

  constructor:(wrapper)->
    @wrapper = wrapper

  show:()=>
    TweenLite.set @wrapper,{display:'inline-block', opacity:0}
    TweenLite.to @wrapper, .5, { opacity:1, ease:Expo.easeOut, onComplete: =>
      @init()
    }

  init:()=>
    if @current_type?
      @update()
    else
      @current_type = 'following'
      @update()

    @wrapper.find('.btn').bind 'click', @on_type_click
    $(@wrapper.find('.btn')[0]).trigger 'click'

  update:()=>
    @change_button_status()

  change_button_status:()=>
    i = 0
    len = @wrapper.find('.btn').length
    while i < len
      if $(@wrapper.find('.btn')[i]).attr('id') == @current_type
        @wrapper.find('a#'+@current_type).addClass 'btn-primary active disable'
        @wrapper.find('a#'+@current_type).removeClass 'btn-default'
      else
        $(@wrapper.find('.btn')[i]).addClass 'btn-default'
        $(@wrapper.find('.btn')[i]).removeClass 'btn-primary active disable'

      i++

  on_type_click:(e)=>
    @current_type = $(e.currentTarget).attr 'id'
    $(this).trigger 'onTypeUpdate'
    @update()
