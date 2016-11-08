class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :seller
  has_many :artworks
  has_many :sales
  has_many :purchases
end
