class User < ApplicationRecord
  has_many :transactions
  has_many :purchases, class_name: 'Transaction', foreign_key: :buyer_id
  belongs_to :current_cart, class_name: 'Cart', optional: true

  # as artist
  has_many :artworks, foreign_key: :artist_id
  has_many :sales, class_name: 'Transaction', foreign_key: :artwork_id
  has_many :buyers, through: :sales, source: :transaction
end
