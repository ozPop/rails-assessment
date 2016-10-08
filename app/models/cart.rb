class Cart < ApplicationRecord
  has_many :cart_items

  # Renamed this has many from :artworks to :items for semantics and our own sanity
  # That meant I had to add the source option as well
  has_many :items, through: :cart_items, source: :artwork
  belongs_to :user
end
