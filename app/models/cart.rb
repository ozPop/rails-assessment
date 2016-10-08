class Cart < ApplicationRecord
  has_many :cart_items

  # Renamed this has many from :products, to :artworks
  # Otherwise, the association wouldn't work for getting all artworks from
  # a particular Cart instance
  has_many :artworks, through: :cart_items
  belongs_to :user
end
