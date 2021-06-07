class RemoveIndexPins < ActiveRecord::Migration[5.2]
  def change
    remove_index :pins, :title
  end
end
