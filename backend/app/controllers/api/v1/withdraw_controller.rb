module Api
  module V1
    class WithdrawController < BaseController
      before_action :set_transaction_amount, :balance_is_enough?
      
      def create
        @bank_account.balance -= @transaction_amount
        if @bank_account.save
          render json: { withdraw_amount: @transaction_amount, message: 'Your money was withdrawn successfully!' }, status: :ok
        else
          render json: { error: 'Transaction failed' }, status: :unprocessable_entity
        end
      end

      private
      def balance_is_enough?
          if (@bank_account.balance - @transaction_amount) < 0
            render json: { error: 'Your balance is not high enough for your transaction amount' }, status: :unprocessable_entity
            return
          end
      end

    end
  end
end