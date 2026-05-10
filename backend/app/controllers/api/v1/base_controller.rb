module Api
  module V1
    class BaseController < ApplicationController
      before_action :find_bank_account

      private
      def find_bank_account
        if params[:account_number].present?
          begin
            account_number = Integer(params[:account_number])

            @bank_account = BankAccount
              .find_by_account_number(account_number)

            if !@bank_account
              render json: { error: 'We could not find a bank account with that number, please try again.' }, status: :not_found
            end
          rescue ArgumentError
            render json: { error: 'Account number must be a valid integer' }, status: :unprocessable_entity
          end
        else
          render json: { error: 'Account number is required' }, status: :unprocessable_entity
        end
      end
    end
  end
end