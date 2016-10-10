class Artwork < ApplicationRecord
  belongs_to :artist, class_name: 'User'
  belongs_to :category
  has_many :transactions
  has_attached_file :image
end
