module Api
  module V1
    class DepositController < BaseController
      before_action :set_transaction_amount

      def create
        @bank_account.balance += @transaction_amount
        @bank_account.save
        render json: {
          deposit_amount: @transaction_amount,
          message: 'Your money was deposited successfully!'
        }, status: :ok
      end
    end
  end
end