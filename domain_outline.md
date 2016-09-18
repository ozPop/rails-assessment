User
    name
    artist # boolean value default false

Product
    name
    description
    price
    product_type # eg: sculpture, painting, photograph
    artist_id
    auction_id

Bid
    product_id
    buyer_id
    bid_status # ???

Sale
    artist_id
    buyer_id

Auction
    title
    description
    artist_id

Review # of the product
    description
    rating
    buyer_id
    product_id
