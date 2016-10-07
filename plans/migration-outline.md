User
    t.string :username
    t.string  :current_cart_id
    t.boolean :seller       default: false
    # Devise generated fields

Product
    t.string :title
    t.text :description
    t.decimal :price
    t.integer :category_id # art style?
    t.integer :artist_id

    Extras:
    # t.string :product_type # eg: sculpture, painting, photograph

Category
    t.string title

Store
    t.integer :user_id

Transaction (formerly Sale)
    t.integer :artist_id
    t.integer :buyer_id

Cart
    t.integer :user_id
    t.string :status,   default: "empty" # Should we keep this?

Cart_Items
    t.integer :cart_id
    t.integer :product_id
    t.integer :quantity,    default: 1

EXTRAS:

Review # of the product
    description
    rating
    buyer_id
    product_id
