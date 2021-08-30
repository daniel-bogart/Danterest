json.extract! pin_on_board, :id, :pin_id, :board_id
json.photoUrl url_for(pin_on_board.pin.photo)