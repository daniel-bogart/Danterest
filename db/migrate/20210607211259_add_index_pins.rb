class AddIndexPins < ActiveRecord::Migration[5.2]
  def change
    add_index :pins, :author_id
  end
end
