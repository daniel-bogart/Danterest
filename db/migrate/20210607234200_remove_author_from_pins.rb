class RemoveAuthorFromPins < ActiveRecord::Migration[5.2]
  def change
    remove_column :pins, :author_id
  end
end
