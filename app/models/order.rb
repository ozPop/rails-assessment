class Order < ApplicationRecord
  has_many :order_items, dependent: :destroy
  has_many :items, through: :order_items, source: :artwork
  has_many :transactions
  belongs_to :buyer, class_name: 'User'

  def add_item(item_id)
    order_item = order_items.find_by(artwork_id: item_id)
    if order_item
      order_item.quantity += 1
    else
      order_item = order_items.build(artwork_id: item_id)
    end
    order_item
  end

  def remove_item(item_id)
    items.delete(Artwork.find(item_id))
  end

  def total
    total = 0
    order_items.each do |order_item|
      total += order_item.artwork.price * order_item.quantity
    end
    total
  end

  def checkout
    self.status = 'submitted'
    buyer.remove_order
    update_inventory
    create_transactions
  end

  def update_inventory
    if self.status = 'submitted'
      self.order_items.each do |order_item|
        order_item.artwork.inventory -= order_item.quantity
        order_item.artwork.save
      end
    end
  end

  def create_transactions
    self.items.each do |artwork|
      Transaction.create(artwork: artwork, buyer: buyer)
    end
  end

end
