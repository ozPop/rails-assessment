class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :seller
  has_many :artworks
end
