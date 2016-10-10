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


# Create some regular users / buyers
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

# Create categories
3.times do
  Category.create(
    title: Faker::Book.genre
  )
end

# Create artworks for seller id 1
1.times do
  Artwork.create(
    title: Faker::Book.title,
    description: Faker::Hipster.paragraph,
    price: Faker::Number.between(3, 5),
    category_id: Faker::Number.between(1, 3),
    inventory: 5,
    artist_id: 1,
    image: File.new("#{Rails.root}/test/seed-images/black_dragon_knight_ver_f_by_shanku-d25f5lb.jpg")
  )
end


# Create artworks for seller id 2
1.times do
  Artwork.create(
    title: Faker::Book.title,
    description: Faker::Hipster.paragraph,
    price: Faker::Number.between(3, 5),
    category_id: Faker::Number.between(1, 3),
    inventory: 5,
    artist_id: 2,
    image: File.new("#{Rails.root}/test/seed-images/eternal_mana___splash_by_shanku-d6f3aws.jpg")
  )
end