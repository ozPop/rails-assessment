class Order < ApplicationRecord
  has_many :order_items
  has_many :items, through: :order_items, source: :artwork
  has_many :transactions
  belongs_to :buyer, class_name: 'User'
end
