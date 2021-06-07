class AddAuthorPins < ActiveRecord::Migration[5.2]
  def change
    add_column :pins, :author_id, :integer, null: false
  end
end
