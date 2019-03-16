require 'test_helper'

class StadiumControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get stadium_index_url
    assert_response :success
  end

end
