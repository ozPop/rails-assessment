User
    t.string :username
    t.string  :current_order_id
    t.boolean :seller       default: false
    # Devise generated fields

Artwork
    t.string :title
    t.text :description
    t.decimal :price
    t.integer :category_id # art style?
    t.integer :artist_id
    t.boolean :available, default: true
    t.integer :inventory
    Extras:
    # t.string :product_type # eg: sculpture, painting, photograph

Category
    t.string title

Transaction (formerly Sale)
    t.integer :artwork_id
    t.integer :buyer_id

Order
    t.integer :buyer_id
    t.string :status,   default: 'not submitted'

Order_Items
    t.integer :artwork_id
    t.integer :order_id
    t.integer :quantity,    default: 1

EXTRAS:

Review # of the product
    description
    rating
    buyer_id
    product_id

Store
    t.integer :artist_id
