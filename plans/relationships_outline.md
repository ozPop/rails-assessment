class User
  has_many :transactions
  has_many :purchases, class_name: 'Transaction', foreign_key: :buyer_id
  belongs_to :current_cart, class_name: 'Cart', optional: true

  # as artist
  has_many :artworks, foreign_key: :artist_id
  has_many :sales, class_name: 'Transaction', foreign_key: :artwork_id
  has_many :buyers, through: :transactions, source: 'User'

  # EXTRAS
    has_many :reviews, foreign_key: :buyer_id

end

class Artwork (currently has only one category)
  belongs_to :artist, class_name: 'User' # fk :artist_id
  belongs_to :category
end

class Category
  has_many :artworks
end

class Transaction
  belongs_to :artwork
  belongs_to :buyer, class_name: "User"
end

class Cart
  has_many :cart_items
  has_many :artworks, through: :cart_items
  belongs_to :user
end

class CartItem
  belongs_to :artwork # (reference to artwork)
  belongs_to :cart
end


EXTRAS:

class artwork_review

  belongs_to :artwork # fk artwork_id
  belongs_to :buyer, class_name: "User" # fk buyer_id

end

class artist_review

  belongs_to :artist # fk artist_id
  belongs_to buyer, class_name: "User # fk buyer_id"

end

class Store
  belongs_to :artist, class_name: "User" # ????
  has_many :items, class_name: "Artwork"
end