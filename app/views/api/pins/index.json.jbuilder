@pins.each do |pin|
  json.set! pin.id do
    json.extract! pin, :title, :description, :author_id, :id
    json.photoUrl url_for(pin.photo)
  end
end