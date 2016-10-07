class CartItem < ApplicationRecord
  belongs_to :artwork
  belongs_to :cart
end
