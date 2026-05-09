module Api
  module V1
    class DepositController < BaseController
      def create
        if params[:amount].present?
          #TODO: catch error with non numerical number
          deposit_amount = params[:amount].to_f
          
          @bank_account.balance += deposit_amount
          @bank_account.save
          render json: {
            deposit_amount: deposit_amount,
            message: 'Your mony was deposited successfully!'
          }
        else
          render json: {
            error: 'Amount is required'
          }
        end
      end
    end
  end
end