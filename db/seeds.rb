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
# Transaction.destroy_all

# Create some sellers / buyers

User.create(
  email: 'a@a.com',
  password: 'qwerty',
  seller: true
)

2.times do
  User.create(
    email: Faker::Internet.email,
    password: 'qwerty',
    seller: true
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
  Artwork.create(
    title: Faker::Book.title,
    description: Faker::Hipster.paragraph,
    price: Faker::Number.between(3, 5),
    category_id: Faker::Number.between(1, 3),
    inventory: 5,
    artist_id: 1,
    image: File.new(Dir.glob("#{Rails.root}/test/seed-images/*").sample)
  )
end


# Create artworks for seller id 2
3.times do
  Artwork.create(
    title: Faker::Book.title,
    description: Faker::Hipster.paragraph,
    price: Faker::Number.between(3, 5),
    category_id: Faker::Number.between(1, 3),
    inventory: 5,
    artist_id: 2,
    image: File.new(Dir.glob("#{Rails.root}/test/seed-images/*").sample)
  )
end

# Create artworks for seller id 3
1.times do
  Artwork.create(
    title: Faker::Book.title,
    description: Faker::Hipster.paragraph,
    price: Faker::Number.between(3, 5),
    category_id: Faker::Number.between(1, 3),
    inventory: 2,
    artist_id: 3,
    image: File.new(Dir.glob("#{Rails.root}/test/seed-images/*").sample)
  )
end