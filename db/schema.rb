# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161008171021) do

  create_table "artworks", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.decimal  "price"
    t.integer  "category_id"
    t.integer  "artist_id"
    t.boolean  "available",   default: true
    t.integer  "inventory"
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  create_table "categories", force: :cascade do |t|
    t.string   "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "order_items", force: :cascade do |t|
    t.integer  "artwork_id"
    t.integer  "order_id"
    t.integer  "quantity",   default: 1
    t.datetime "created_at",             null: false
    t.datetime "updated_at",             null: false
  end

  create_table "orders", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "status",     default: "not submitted"
    t.datetime "created_at",                           null: false
    t.datetime "updated_at",                           null: false
  end

  create_table "transactions", force: :cascade do |t|
    t.integer  "artwork_id"
    t.integer  "buyer_id"
    t.integer  "seller_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "username"
    t.integer  "current_order_id"
    t.boolean  "seller",           default: false
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
  end

end
