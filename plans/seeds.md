User.destroy_all
Cart.destroy_all
Category.destroy_all
Artwork.destroy_all
CartItem.destroy_all
Transaction.destroy_all

seller = User.create(username: 'seller')

buyer = User.create(username: 'buyer')

order = Order.create(buyer_id: 2)

buyer.update(current_order: order)

category = Category.create(title: 'SomeTitle')

artwork = Artwork.create(title: 'SomeTitle', description: 'some desc', price: 125.23, category_id: 1, artist_id: 1, inventory: 5)

orderitem = OrderItem.create(order_id: 1, artwork_id: 1)

transaction = Transaction.create(artwork_id: 1, buyer_id: 2)
