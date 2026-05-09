module Api
  module V1
    class BalanceController < ApplicationController
      def show
        @bank_account = BankAccount
          .find_by_account_number(params[:account_number])

        if @bank_account
          render json: {
            balance: @bank_account.balance
          }
        else
          render json: {
            error: 'We could not find a bank account with that number, please try again.'
          }
        end
      end
    end
  end
end