# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Pin.destroy_all
Board.destroy_all

demo_user = User.create!(email: "demo@danterest.com", password: "123123", username: "demo", age: 25, first_name: "Demo", last_name: "Demoson")
user1 = User.create!(email: "rventure@gmail.com", password: "123123", username: "rustyV", age: 25, first_name: "Rusty", last_name: "Venture")
user2 = User.create!(email: "bsampson@gmail.com", password: "123123", username: "icarus227", age: 25, first_name: "Brock", last_name: "Sampson")
user3 = User.create!(email: "monarch@gmail.com", password: "123123", username: "TheMightyMonarch!", age: 25, first_name: "The Mighty Monarch")
user4 = User.create!(email: "pwhite@gmail.com", password: "123123", username: "pwhite2315", age: 25, first_name: "Pete", last_name: "White")
user5 = User.create!(email: "dbowie@gmail.com", password: "123123", username: "ziggy", age: 25, first_name: "David", last_name: "Bowie")
user6 = User.create!(email: "hankco@gmail.com", password: "123123", username: "HankCo", age: 25, first_name: "Hank V")
user7 = User.create!(email: "msmonarch@gmail.com", password: "123123", username: "msmonarch", age: 25, first_name: "Dr. Ms.", last_name: "The Monarch")

demo_board = Board.create!(user_id: 1, title: 'test-board', description: 'this is a test board')
board1 = Board.create!(user_id: 1, title: 'Ocean Life', description: 'paintings of ocean life')
board2 = Board.create!(user_id: 1, title: 'Park Posters', description: 'park poster graphic art')
board3 = Board.create!(user_id: 1, title: 'Landscapes', description: 'beautiful landscapes')



pin1 = Pin.create!(title: "Colorful Snake", description: "A drawing of a shiny and colorful snake", author_id: 1)
pin2 = Pin.create!(title: "Anenome drawing", description: "A digital art depiction of an anenome", author_id: 2)
pin3 = Pin.create!(title: "Arches National Park", description: "Digital art of arches", author_id: 3)
pin4 = Pin.create!(title: "Arches National Park live", description: "Photo of arches national park", author_id: 4)
pin5 = Pin.create!(title: "Succulent!", description: "Photo of a succulent", author_id: 5)
pin6 = Pin.create!(title: "Cactus in the sun", description: "Digital artwork of a cactus in the sun", author_id: 6)
pin7 = Pin.create!(title: "Canyonlands National Park Poster", description: "Poster of Canyonlands", author_id: 7)
pin8 = Pin.create!(title: "Curious Robot", description: "Digital artwork of a robot", author_id: 1)
pin9 = Pin.create!(title: "Electric Skulls", description: "Seems like they're having quite the discussion", author_id: 8)
pin10 = Pin.create!(title: "Cool fish artwork", description: "Digital artwork of a fish", author_id: 2)
pin11 = Pin.create!(title: "Doggo in the grass!", description: "A good doggo by the name of Gidget!", author_id: 3)
pin12 = Pin.create!(title: "Pretty Plant", description: "Digital artwork of a plant", author_id: 1)
pin13 = Pin.create!(title: "Groovy Froggo", description: "Just a banjo pickin' froggo", author_id: 4)
pin14 = Pin.create!(title: "Hammerhead Shark", description: "Digital artwork of a hammerhead shark", author_id: 5)
pin15 = Pin.create!(title: "Jellyfish", description: "Digital artwork of jellfish", author_id: 1)
pin16 = Pin.create!(title: "Joshua Tree Poster", description: "Poster for Joshua Tree National Park", author_id: 6)
pin17 = Pin.create!(title: "Snowy Day in Jtree", description: "A very snowy day in Jtree!", author_id: 7)
pin18 = Pin.create!(title: "Koi Fish!", description: "Digital Artwork of koifish", author_id: 1)
pin19 = Pin.create!(title: "A lone tree", description: "Digital artwork of a tree before the sunrise", author_id: 1)
pin20 = Pin.create!(title: "Swimming in Antigua", description: "Beautiful photo of the water in Antigua", author_id: 8)
pin21 = Pin.create!(title: "Mushroom House", description: "Digital artwork of a mushroom house!", author_id: 1)
pin22 = Pin.create!(title: "Octopus", description: "Digital artwork of an octopus", author_id: 2)
pin23 = Pin.create!(title: "Pretty Flowers", description: "Some pretty flowers", author_id: 3)
pin24 = Pin.create!(title: "Pink Snake", description: "digital artwork of a pink snake", author_id: 4)
pin25 = Pin.create!(title: "Fish in pond", description: "Digital artwork of a fish in a pond", author_id: 5)
pin26 = Pin.create!(title: "Saturn", description: "Digital artwork of Saturn", author_id: 6)
pin27 = Pin.create!(title: "Snowy Arch", description: "A very snowy arch", author_id: 1)
pin28 = Pin.create!(title: "Tiger", description: "Digital artwork of a tiger", author_id: 7)
pin29 = Pin.create!(title: "Yosemite Colors", description: "Digital artwork of the Yosmeite Valley", author_id: 8)
pin30 = Pin.create!(title: "Under Water", description: "Beautiful photo from under the sea", author_id: 2)
pin31 = Pin.create!(title: "Yosemite Valley", description: "Beautiful photo of Yosemite Valley", author_id: 1)
pin32 = Pin.create!(title: "Green Yosemite", description: "Green photo of Yosemite Valley", author_id: 3)
pin33 = Pin.create!(title: "Tree Sun Mountain", description: "Moutain Tree Sun", author_id: 4)
pin34 = Pin.create!(title: "Gator", description: "Aligator!", author_id: 5)
pin35 = Pin.create!(title: "Green swirling plants", description: "Plantos!", author_id: 1)
pin36 = Pin.create!(title: "Pretty cloud!", description: "Photo of a colorful cloud", author_id: 6)
pin37 = Pin.create!(title: "Underwater!", description: "Underwater photography", author_id: 7)


pin1.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/acidSnake.JPG'), filename:'acidSnake.JPG')
pin2.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/anenome.JPG'), filename:'anenome.JPG')
pin3.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/arches.JPG'), filename:'arches.JPG')
pin4.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/archesNICE.JPG'), filename:'archesNICE.JPG')
pin5.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/succulent1.JPG'), filename:'succulent1.JPG')
pin6.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/cactusSun.JPG'), filename:'cactusSun.JPG')
pin7.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/canyonLands.JPG'), filename:'canyonLands.JPG')
pin8.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/curiousRoboty.JPG'), filename:'curiousRoboty.JPG')
pin9.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/electricSkulls.JPG'), filename:'electricSkulls.JPG')
pin10.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/fish1.JPG'), filename:'fish1.JPG')
pin11.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/gidget1.JPG'), filename:'gidget1.JPG')
pin12.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/greenPlantPink.JPG'), filename:'greenPlantPink.JPG')
pin13.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/groovy-frog.JPG'), filename:'groovy-frog.JPG')
pin14.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/hammerhead.JPG'), filename:'hammerhead.JPG')
pin15.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/jellyFish.JPG'), filename:'jellyFish.JPG')
pin16.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/joshuaPoster.JPG'), filename:'joshuaPoster.JPG')
pin17.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/joshuaTreeSnow.JPG'), filename:'joshuaTreeSnow.JPG')
pin18.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/koiFish.JPG'), filename:'koiFish.JPG')
pin19.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/loneTree.JPG'), filename:'loneTree.JPG')
pin20.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/maggieAntigua.JPG'), filename:'maggieAntigua.JPG')
pin21.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/mushroomHouse.JPG'), filename:'mushroomHouse.JPG')
pin22.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/octopus.JPG'), filename:'octopus.JPG')
pin23.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/pinkBlackFlowers.JPG'), filename:'pinkBlackFlowers.JPG')
pin24.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/pinkSnake.JPG'), filename:'pinkSnake.JPG')
pin25.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/pondFish.JPG'), filename:'pondFish.JPG')
pin26.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/saturn.JPG'), filename:'saturn.JPG')
pin27.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/snowyArch.JPG'), filename:'snowyArch.JPG')
pin28.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/tigerpedals.JPG'), filename:'tigerpedals.JPG')
pin29.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/YosemiteColor.JPG'), filename:'YosemiteColor.JPG')
pin30.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/underTheSea.JPG'), filename:'underTheSea.JPG')
pin31.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/Yosemite1.JPG'), filename:'Yosemite1.JPG')
pin32.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/Yosemite2.JPG'), filename:'Yosemite2.JPG')
pin33.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/DTseed/TreeMountainSun.JPG'), filename:'TreeMountainSun.JPG')
pin34.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/aligator.JPG'), filename:'aligator.JPG')
pin35.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/greenSwirlPlants.JPG'), filename:'greenSwirlPlants.JPG')
pin36.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/prettyCloud.JPG'), filename:'prettyCloud.JPG')
pin37.photo.attach(io: open('https://danterest-dev.s3-us-west-1.amazonaws.com/underTheSeaClear.JPG'), filename:'underTheSeaClear.JPG')