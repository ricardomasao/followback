module.exports = class Relationship

  token:''
  url:''

  constructor:(token)->
    @token = token

  load:(id,type)->

    if type == 'instagram'
      @url = 'https://api.instagram.com/v1/users/'+id+'/relationship'

    console.log 'url =',@url
