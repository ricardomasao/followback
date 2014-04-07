module.exports = class TableManager

  dom:null
  type:''
  link:''
  TableCell:null

  constructor:(dom,type,cell)->
    @dom = dom
    @type = type
    @TableCell = cell

    if @type == 'instagram'
      @link = 'http://instagram.com/'

  increment:(data, page)->
    i = 0
    len = data[page].length

    while i < len
      name = data[page][i].full_name
      id = data[page][i].id
      bio = data[page][i].bio
      picture = data[page][i].profile_picture
      username = data[page][i].username
      website = data[page][i].website

      cell = new @TableCell name, id, bio, picture, username, website
      cell.add_cell_to_table @dom

      i++
