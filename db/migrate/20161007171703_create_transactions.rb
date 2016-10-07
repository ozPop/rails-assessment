class CreateTransactions < ActiveRecord::Migration[5.0]
  def change
    create_table :transactions do |t|
      t.integer :product_id
      t.integer :buyer_id

      t.timestamps
    end
  end
end
