class CreateOrderItems < ActiveRecord::Migration[5.0]
  def change
    create_table :order_items do |t|
      t.integer :artwork_id
      t.integer :order_id
      t.integer :quantity,    default: 1

      t.timestamps
    end
  end
end
