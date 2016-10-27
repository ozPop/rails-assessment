class Artwork < ApplicationRecord
  validates_presence_of :title, :description, :price, :category, :inventory, :image
  belongs_to :artist, class_name: 'User'
  belongs_to :category
  has_many :transactions
  has_attached_file :image,
                    url: "/system/images/:filename"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\z/

  scope :most_popular, -> {
    select('artworks.*, count(transactions.artwork_id) AS transactions_count')
      .joins(:transactions)
      .group('artwork_id')
      .order('transactions_count desc')
      .limit(5)
  }
end
