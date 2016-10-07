class User
  has_many :transactions
  has_many :purchases, class_name: "Transaction", foreign_key: :buyer_id
  belongs_to :current_cart, class_name: 'Cart'

  # as artist
  has_many :products, foreign_key: :artist_id
  has_many :sales, class_name: "Transaction", foreign_key: :artist_id # ????

  has_many :customers, through: :transactions, class_name: 'User' # ????

  # EXTRAS
  # has_one :store # We don't actually need this inside of this model.
                   # By saying that a store belongs to a user we already have that one to one connection
    has_many :reviews, foreign_key: :buyer_id

end

class Product
  belongs_to :artist, class_name: 'User' # fk :artist_id
  belongs_to :store # fk :store_id

end

class Category
  has_many :products
end


class Store
  belongs_to :artist, class_name: "User" # ????
  has_many :items, through:
end


class Transaction
  belongs_to :artist, class_name: "User"
  belongs_to :buyer, class_name: "User"
end

class Cart
  has_many :cart_items
  has_many :products, through: :cart_items
  belongs_to :user
end

class CartItem
  belongs_to :product
  belongs_to :cart
end


EXTRAS:

class product_review

  belongs_to :product # fk product_id
  belongs_to :buyer, class_name: "User" # fk buyer_id

end

class artist_review

  belongs_to :artist # fk artist_id
  belongs_to buyer, class_name: "User # fk buyer_id"

end