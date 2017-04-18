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

ActiveRecord::Schema.define(version: 20170417222352) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "authorizations", force: :cascade do |t|
    t.string   "provider"
    t.string   "uid"
    t.integer  "user_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
    t.string   "oauth_token"
    t.string   "oauth_verifier"
    t.string   "user_oauth_token"
    t.string   "user_oauth_secret"
  end

  create_table "blockings", force: :cascade do |t|
    t.integer  "routine_id"
    t.integer  "block_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["block_id"], name: "index_blockings_on_block_id", using: :btree
    t.index ["routine_id"], name: "index_blockings_on_routine_id", using: :btree
  end

  create_table "blocks", force: :cascade do |t|
    t.string   "difficulty"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.integer  "intensity_id"
    t.index ["intensity_id"], name: "index_blocks_on_intensity_id", using: :btree
  end

  create_table "exercises", force: :cascade do |t|
    t.string   "name"
    t.text     "description"
    t.string   "picture"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "exercisings", force: :cascade do |t|
    t.integer  "exercise_id"
    t.integer  "block_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["block_id"], name: "index_exercisings_on_block_id", using: :btree
    t.index ["exercise_id"], name: "index_exercisings_on_exercise_id", using: :btree
  end

  create_table "intensities", force: :cascade do |t|
    t.integer  "level"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "name"
  end

  create_table "routines", force: :cascade do |t|
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_routines_on_user_id", using: :btree
  end

  create_table "twitter_data", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "tweets"
    t.integer  "likes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_twitter_data_on_user_id", using: :btree
  end

  create_table "twitterings", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "tweets"
    t.integer  "likes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_twitterings_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
    t.string   "name"
    t.integer  "intensity_id"
    t.string   "token"
    t.index ["intensity_id"], name: "index_users_on_intensity_id", using: :btree
  end

  add_foreign_key "blockings", "blocks"
  add_foreign_key "blockings", "routines"
  add_foreign_key "blocks", "intensities"
  add_foreign_key "exercisings", "blocks"
  add_foreign_key "exercisings", "exercises"
  add_foreign_key "routines", "users"
  add_foreign_key "twitter_data", "users"
  add_foreign_key "twitterings", "users"
  add_foreign_key "users", "intensities"
end
