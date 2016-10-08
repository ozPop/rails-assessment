class User < ApplicationRecord
  # as buyer
  has_many :purchases, class_name: 'Transaction', foreign_key: :buyer_id
  has_many :orders, through: :purchases, source: :order
  belongs_to :current_order, class_name: 'Order', optional: true

  # as artist
  has_many :artworks, foreign_key: :artist_id
  has_many :sales, class_name: 'Transaction', foreign_key: :order_id
  has_many :sold_orders, through: :sales, source: :order
  has_many :buyers, through: :sold_orders, foreign_key: :buyer_id
end
