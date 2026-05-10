class BankAccount < ApplicationRecord
  validates :account_number, presence: true, uniqueness: true
  validates_numericality_of :balance, greater_than_or_equal_to: 0
end
