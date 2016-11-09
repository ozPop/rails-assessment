class ArtworkSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :price, :category_id, :artist_id, :available, :inventory
  # the line below lets us access the actual artist and cateory objects
  # attributes :id, :title, :description, :price, :category, :artist, :available, :inventory, :image_file_name
  belongs_to :artist
  belongs_to :category
end
