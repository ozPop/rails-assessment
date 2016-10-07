class Artwork < ApplicationRecord
  belongs_to :artist, class_name: "User" # fk :artist_id
  belongs_to :category
end
