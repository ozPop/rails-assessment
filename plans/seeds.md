User.destroy_all
Artwork.destroy_all
Category.destroy_all
Order.destroy_all
OrderItem.destroy_all
Transaction.destroy_all

seller = User.create(username: 'seller')

buyer = User.create(username: 'buyer')

category = Category.create(title: 'SomeTitle')

artwork = Artwork.create(title: 'SomeTitle', description: 'some desc', price: 125.23, category: category, artist: seller, inventory: 5)

order = Order.create(buyer: buyer)

orderitem = OrderItem.create(order: order, artwork: artwork)

buyer.update(current_order: order)

transaction = Transaction.create(buyer: buyer, seller: seller, order: order)
