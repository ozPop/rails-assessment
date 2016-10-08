class Order < ApplicationRecord
  has_many :order_items
  has_many :items, through: :order_items, source: :artwork
  belongs_to :user
end
