class ArtworkSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :available, :inventory, :image_file_name, :artist, :category
  belongs_to :artist
  belongs_to :category
end
