# == Schema Information
#
# Table name: boards
#
#  id          :bigint           not null, primary key
#  user_id     :integer          not null
#  title       :string           not null
#  description :string
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Board < ApplicationRecord
  validates :title, :user_id, presence: true

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User 

  has_many :pins_on_board,
  foreign_key: :board_id,
  class_name: :PinsOnBoard

  has_many :pins,
  through: :pins_on_board
end
