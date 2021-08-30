json.extract! board, :description, :title, :user_id, :id
json.pins do
  json.array! board.pins do |pin|
    json.extract! pin, :id, :description, :title
    json.photoUrl url_for(pin.photo)
  end
end