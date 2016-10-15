require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Category.destroy_all
Artwork.destroy_all
Transaction.destroy_all

# Create some sellers / buyers

User.create(
  email: 'a@a.com',
  password: 'qwerty'
)

2.times do
  User.create(
    email: Faker::Internet.email,
    password: 'qwerty'
  )
end

2.times do
  User.create(
    email: Faker::Internet.email,
    password: 'qwerty'
  )
end

User.create(
  email: 'q@q.com',
  password: 'qwerty'
)

# Create categories

3.times do
  Category.create(
    title: Faker::Book.genre
  )
end

# Create artworks for seller id 1

2.times do
  user = User.find(1)
  Artwork.create(
    title: Faker::Book.title,
    description: Faker::Hipster.paragraph,
    price: Faker::Number.between(3, 5),
    category_id: Faker::Number.between(1, 3),
    inventory: 15,
    artist_id: user.id,
    image: File.new(Dir.glob("#{Rails.root}/test/seed-images/*").sample)
  )
  break if user.seller
  user.update(seller: true)
end


# Create artworks for seller id 2
3.times do
  user = User.find(2)
  Artwork.create(
    title: Faker::Book.title,
    description: Faker::Hipster.paragraph,
    price: Faker::Number.between(3, 5),
    category_id: Faker::Number.between(1, 3),
    inventory: 15,
    artist_id: user.id,
    image: File.new(Dir.glob("#{Rails.root}/test/seed-images/*").sample)
  )
  break if user.seller
  user.update(seller: true)
end

# Create artworks for seller id 3
2.times do
  user = User.find(3)
  Artwork.create(
    title: Faker::Book.title,
    description: Faker::Hipster.paragraph,
    price: Faker::Number.between(3, 5),
    category_id: Faker::Number.between(1, 3),
    inventory: 12,
    artist_id: user.id,
    image: File.new(Dir.glob("#{Rails.root}/test/seed-images/*").sample)
  )
  break if user.seller
  user.update(seller: true)
end

Transaction.create(artwork_id: 1, buyer_id: 6)
Transaction.create(artwork_id: 2, buyer_id: 6)
Transaction.create(artwork_id: 2, buyer_id: 6)
Transaction.create(artwork_id: 6, buyer_id: 6)
Transaction.create(artwork_id: 7, buyer_id: 6)
Transaction.create(artwork_id: 1, buyer_id: 5)
Transaction.create(artwork_id: 1, buyer_id: 5)
Transaction.create(artwork_id: 2, buyer_id: 5)
Transaction.create(artwork_id: 3, buyer_id: 4)
Transaction.create(artwork_id: 1, buyer_id: 4)
Transaction.create(artwork_id: 4, buyer_id: 4)
Transaction.create(artwork_id: 4, buyer_id: 4)
