# == Schema Information
#
# Table name: pins_on_boards
#
#  id         :bigint           not null, primary key
#  pin_id     :integer          not null
#  board_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class PinsOnBoard < ApplicationRecord
  validates :board_id, :pin_id, presence: true

  belongs_to :board,
  foreign_key: :board_id,
  class_name: :Board

  belongs_to :pin,
  foreign_key: :pin_id,
  class_name: :Pin
end
