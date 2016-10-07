class Transaction < ApplicationRecord
  belongs_to :artwork
  belongs_to :buyer, class_name: "User"
end
