class User

  # as painter
  has_many :paintings, foreign_key: :painter_id
  has_many :sales, class_name: "Sale", foreign_key: :painter_id
  has_many :customers, through: :sales, source: ???? # NOT COMPLETE

  # as buyer
  has_many :bids
  has_many :purchases, class_name: "Sale", foreign_key: :buyer_id

end

class Painting

  belongs_to :painter, class_name: "User" # fk :painter_id
  belongs_to :auction # fk :auction_id
  has_many :bids

end

class Bid

  belongs_to :painting
  belongs_to :buyer, class_name: "User" # fk :buyer_id


end

class Sale

  # Don’t actually need the foreign key in this case (since the default is association name + _id (from rails 2.0)

  belongs_to :painter, class_name: "User"
  belongs_to :buyer, class_name: "User"

end

class Auction

  belongs_to :painter
  has_many :paintings


end

# class City

# end