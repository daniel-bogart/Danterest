json.extract! user, :username, :id, :email, :age, :first_name, :last_name, :pronouns
json.photoUrl url_for(pin.photo) if user.photo.attached?