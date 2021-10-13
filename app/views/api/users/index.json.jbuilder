@users.each do |user|
  json.set! user.id do 
      json.partial! 'user', user: user
      json.photoUrl url_for(pin.photo) if user.photo.attached?
  end
end