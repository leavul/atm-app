class BankAccount < ApplicationRecord
  validates :account_number, presence: true, uniqueness: true 
end
