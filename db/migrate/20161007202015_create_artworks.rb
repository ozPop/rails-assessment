class CreateArtworks < ActiveRecord::Migration[5.0]
  def change
    create_table :artworks do |t|
      t.string :title
      t.text :description
      t.decimal :price
      t.integer :category_id
      t.integer :artist_id
      t.boolean :available, default: true
      t.integer :inventory

      t.timestamps
    end
  end
end
