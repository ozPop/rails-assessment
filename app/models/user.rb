class User < ApplicationRecord
  has_many :transactions
  has_many :purchases, class_name: 'Transaction', foreign_key: :buyer_id
  # belongs_to :current_cart, class_name: 'Cart'

  # as artist
  has_many :products, foreign_key: :artist_id
  has_many :sales, class_name: 'Transaction', foreign_key: :artist_id # ????

  has_many :customers, through: :transactions, class_name: 'User' # ????
end
