class User < ApplicationRecord
  # as buyer
  has_many :purchases, class_name: 'Transaction', foreign_key: :buyer_id
  belongs_to :current_order, class_name: 'Order', optional: true

  # as artist
  has_many :artworks, foreign_key: :artist_id
  has_many :sales, class_name: 'Transaction', foreign_key: :artwork_id
  has_many :buyers, through: :sales, foreign_key: :buyer_id
end
