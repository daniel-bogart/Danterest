# == Schema Information
#
# Table name: pins
#
#  id          :bigint           not null, primary key
#  author_id   :integer
#  title       :string           not null
#  description :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class PinTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
