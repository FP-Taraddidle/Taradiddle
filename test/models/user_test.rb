require 'test_helper'

class UserTest < ActiveSupport::TestCase
  should have_db_column :token

  should have_secure_token
  # test "the truth" do
  #   assert true
  # end
end
