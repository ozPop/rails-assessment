class CreateOrders < ActiveRecord::Migration[5.0]
  def change
    create_table :orders do |t|
      t.integer :buyer_id
      t.string :status,   default: 'not submitted'

      t.timestamps
    end
  end
end
