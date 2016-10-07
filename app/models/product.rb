class Product < 
  belongs_to :artist, class_name: 'User' # fk :artist_id
  belongs_to :store # fk :store_id
end
