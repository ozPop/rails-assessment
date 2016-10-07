class Store < ApplicationRecord
  belongs_to :artist, class_name: 'User' # ????
  has_many :items, class_name: 'Product'
end
