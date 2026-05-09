module Api
  module V1
    class BalanceController < BaseController
      def show
        render json: {
          balance: @bank_account.balance
        }
      end
    end
  end
end