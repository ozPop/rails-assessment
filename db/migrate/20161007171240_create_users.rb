class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :username
      t.integer :current_cart_id
      t.boolean :seller,    default: false

      t.timestamps
    end
  end
end
