class CreatePinsOnBoards < ActiveRecord::Migration[5.2]
  def change
    create_table :pins_on_boards do |t|
      t.integer :pin_id, null: false
      t.integer :board_id, null: false
      t.string :description

      t.timestamps
    end
    remove_column :pins_on_boards, :description
  end
end
