User
    t.string :username
    t.string  :current_cart_id
    t.boolean :seller       default: false
    # Devise generated fields

Product
    t.string :name
    t.text :description
    t.decimal :price
    t.string :product_type # eg: sculpture, painting, photograph
    t.string :category # art style?
    t.integer :artist_id

Sale
    t.integer :artist_id
    t.integer :buyer_id

Auction
    title
    description
    artist_id

Review # of the product
    description
    rating
    buyer_id
    product_id
