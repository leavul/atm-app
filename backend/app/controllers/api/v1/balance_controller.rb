module Api
  module V1
    class BalanceController < BaseController
      def show
        render json: { balance: @bank_account.balance }, status: :ok
      end
    end
  end
end