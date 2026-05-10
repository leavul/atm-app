module Api
  module V1
    class BaseController < ApplicationController
      before_action :find_bank_account

      private
      def find_bank_account
        unless params[:account_number].present?
          render json: { error: 'Account number is required' }, status: :unprocessable_entity
          return
        end

        begin
          account_number = Integer(params[:account_number])
          
          @bank_account = BankAccount
            .find_by_account_number(account_number)

          unless @bank_account
            render json: { error: 'We could not find a bank account with that number, please try again.' }, status: :not_found
          end
        rescue ArgumentError
          render json: { error: 'Account number must be a valid integer' }, status: :unprocessable_entity
        end
      end

      def set_transaction_amount
        unless params[:amount].present?
          render json: { error: 'Amount is required' }, status: :unprocessable_entity
          return
        end

        begin
          _transaction_amount = Float(params[:amount])
          
          if _transaction_amount <= 0
            render json: { error: 'Amount must be greater than zero' }, status: :unprocessable_entity
            return
          end
          
          @transaction_amount = _transaction_amount
        rescue ArgumentError
          render json: { error: 'Amount must be a valid number' }, status: :unprocessable_entity
        end
      end

    end
  end
end