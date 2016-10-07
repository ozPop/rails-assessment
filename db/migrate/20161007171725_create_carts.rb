class CreateCarts < ActiveRecord::Migration[5.0]
  def change
    create_table :carts do |t|
      t.integer :user_id
      t.string :status,   default: 'not submitted'

      t.timestamps
    end
  end
end
