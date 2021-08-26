@pins_on_boards.each do |pin_on_board|
  json.set! pin_on_board.id do
    json.board_id pin_on_board.board_id
    json.extract! pin_on_board.pin, :id, :description, :title
    json.photoUrl url_for(pin_on_board.pin.photo)
  end
end