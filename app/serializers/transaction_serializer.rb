class TransactionSerializer < ActiveModel::Serializer
  attributes :id, :artwork, :buyer
  belongs_to :artwork
  belongs_to :buyer
end
