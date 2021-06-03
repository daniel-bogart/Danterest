class AddAge < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :age, :integer
    change_column_null :users, :age, null: false
  end
end
