class CreateProducts < ActiveRecord::Migration[5.0]
  def change
    create_table :products do |t|
      t.string :title
      t.text :description
      t.decimal :price,     precision: 8, scale: 2
      t.integer :category_id
      t.integer :artist_id
      t.integer :store_id
      t.string :availability,  default: 'available'

      t.timestamps
    end
  end
end
