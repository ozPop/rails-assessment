
user = User.create(username: 'a')

user2 = User.create(username: 'buyer')

cart = Cart.create(user_id: 1)

category = Category.create(title: 'SomeTitle')

artwork = Artwork.create(title: 'SomeTitle', description: 'some desc', price: 125.23, category_id: 1, artist_id: 1, inventory: 5)

cartitem = CartItem.create(cart_id: 1, product_id: 1)

cartitem = CartItem.create(cart_id: 1, artwork_id: 1)

transaction = Transaction.create(artwork_id: 1, buyer_id: 2)
