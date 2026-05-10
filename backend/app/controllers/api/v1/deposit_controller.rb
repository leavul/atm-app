module Api
  module V1
    class DepositController < BaseController
      def create
        if params[:amount].present?
          begin
            deposit_amount = Float(params[:amount])

            if deposit_amount <= 0
              render json: { error: 'Amount must be greater than zero' }, status: :unprocessable_entity
              return
            end

            @bank_account.balance += deposit_amount
            @bank_account.save
            render json: {
              deposit_amount: deposit_amount,
              message: 'Your money was deposited successfully!'
            }, status: :ok
          rescue ArgumentError
            render json: { error: 'Amount must be a valid number' }, status: :unprocessable_entity
          end
        else
          render json: { error: 'Amount is required' }, status: :unprocessable_entity
        end
      end
    end
  end
end