class User
  has_many :reviews, foreign_key: :buyer_id

  # as artist
  has_one :store
  has_many :products, foreign_key: :artist_id
  has_many :customers, through: :sales, :class_name: 'User' # ????
  has_many :sales, class_name: "Sale", foreign_key: :artist_id # ????

  # as buyer
  has_many :purchases, class_name: "Sale", foreign_key: :buyer_id

end

class Product

  belongs_to :artist, class_name: "User" # fk :artist_id
  belongs_to :auction # fk :auction_id
  has_many :bids
  has_many :product_reviews # fk :product_review_id

end

class Bid

  belongs_to :product
  belongs_to :buyer, class_name: "User" # fk :buyer_id


end

class Sale

  # Don’t actually need the foreign key in this case (since the default is association name + _id (from rails 2.0)

  belongs_to :artist, class_name: "User"
  belongs_to :buyer, class_name: "User"

end

class Auction

  belongs_to :artist
  has_many :products

end

class product_review

  belongs_to :product # fk product_id
  belongs_to :buyer, class_name: "User" # fk buyer_id

end

class artist_review

  belongs_to :artist # fk artist_id
  belongs_to buyer, class_name: "User # fk buyer_id"

end