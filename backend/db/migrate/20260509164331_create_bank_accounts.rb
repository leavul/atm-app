class CreateBankAccounts < ActiveRecord::Migration[8.1]
  def change
    create_table :bank_accounts do |t|
      t.integer :account_number, null: false
      t.decimal :balance, default: 0

      t.timestamps
    end

    add_index :bank_accounts, :account_number, unique: true
  end
end
