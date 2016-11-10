class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :seller, :owner
  has_many :artworks
end
