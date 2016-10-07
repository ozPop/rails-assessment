class Product < ApplicationRecord
  belongs_to :artist, class_name: 'User' # fk :artist_id
end
