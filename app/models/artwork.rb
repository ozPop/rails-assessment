class Artwork < ApplicationRecord
  validates_presence_of :title, :description, :price, :category, :inventory, :image
  belongs_to :artist, class_name: 'User'
  belongs_to :category
  has_many :transactions
  has_attached_file :image
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/
end
