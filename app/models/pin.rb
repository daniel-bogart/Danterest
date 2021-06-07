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
class Pin < ApplicationRecord
  validates :title, :description, presence: true

  has_one_attached :photo

  has_one :user,
  class_name: :User,
  foreign_key: :user_id

  has_many :boards,
  through: :pins_on_board
end
