class User
  # as buyer
  has_many :orders, foreign_key: :buyer_id
  has_many :purchases, class_name: 'Transaction', foreign_key: :buyer_id
  belongs_to :current_order, class_name: 'Order', optional: true

  # as artist
  has_many :artworks, foreign_key: :artist_id
  has_many :sales, through: :artworks, source: :transactions
  has_many :buyers, through: :sales

end

class Artwork
  belongs_to :artist, class_name: 'User'
  belongs_to :category
  has_many :transactions
end

class Category
  has_many :artworks
end

class Transaction
  belongs_to :artwork
  belongs_to :buyer, class_name: 'User'
end

class Order
  has_many :order_items
  has_many :items, through: :order_items, source: :artwork
  has_many :transactions
  belongs_to :buyer, class_name: 'User'
end

class OrderItem
  belongs_to :artwork
  belongs_to :order
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