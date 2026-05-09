# CLAUDE.md — ATM App Project Handoff

## How to Use This File
Place this file at the **root of your Rails project** and name it `CLAUDE.md`.
Claude Desktop with Claude Code will automatically read it at the start of every session.
You do not need to paste anything manually.

---

## Project Goal
Building an **ATM app** using **Ruby on Rails in API mode** (`--api` flag).
This is a learning project — the goal is to learn backend development with Rails through building a real app.

---

## App Features (ATM App)
- Create bank accounts
- Deposit and withdraw money
- Check balance
- (More features to be defined as learning progresses)

---

## Tech Stack
- **Ruby on Rails 8** — API mode (`rails new atm_app --api`)
- **Database** — Default (SQLite for development)
- **No frontend** — API only, tested via `rails console` or tools like Postman/curl

---

## Current Progress

### Done
- Understood what `rails g model` does (generates migration + model file)
- Understood what `rails db:migrate` does (creates the actual table)
- Understood what `rails db:rollback` does (undoes the last migration)
- Created the `BankAccount` model with:
  - `account_number` (integer, not null, unique via index)
  - `balance` (decimal, default: 0)
- Learned that `unique: true` on a column definition does nothing — uniqueness must be enforced via `add_index`
- Learned what validations are and why they matter (clear errors vs vague DB errors)
- Added validation: `validates :account_number, presence: true, uniqueness: true`
- Removed `validates :balance, presence: true` because balance defaults to 0

### Current Migration File
```ruby
class CreateBankAccounts < ActiveRecord::Migration[8.1]
  def change
    create_table :bank_accounts do |t|
      t.integer :account_number, null: false
      t.decimal :balance

      t.timestamps
    end

    add_index :bank_accounts, :account_number, unique: true
  end
end
```

### Current Model File
```ruby
class BankAccount < ApplicationRecord
  validates :account_number, presence: true, uniqueness: true
end
```

---

## What I Already Understand
- `rails g model` → generates migration + model file
- `rails db:migrate` → actually creates the table in the database
- `rails db:rollback` → undoes the last migration
- Migrations = version control for the database
- Model file = Ruby class to talk to the table without writing SQL
- Validations = catch errors before hitting the database, with clear messages
- `presence: true` = field must have a value
- `uniqueness: true` = no duplicate values allowed
- `add_index ..., unique: true` = enforces uniqueness at the database level

---

## What I Still Need to Learn
- Controllers (how API endpoints work in Rails)
- Routes (`config/routes.rb`)
- How to handle deposit/withdraw logic
- Serializers or JSON responses
- Authentication (if needed)
- Testing

---

## My Background
- **Frontend developer** — React Native, Expo, TypeScript
- Completed a simple Todo app in Rails before this project
- Went through basic Rails concepts but gaps remain
- **No prior backend/Rails experience beyond basics**
- Learning style: practical, project-driven

---

## Teaching Style I Want
- Short, clear explanations — no long theory
- Explain the reason briefly, then give steps
- Don't repeat the question back to me
- If one solution is clearly better → give only that
- If multiple valid options → give options with when to use each
- Be direct and critical — no sugarcoating
- Ask clarifying questions if my request is unclear before answering

---

## Coding Preferences
- Clean, production-style code
- Comments only when necessary
- Show what changed first, then show the full updated code
- Professional naming — not too long, not too vague

---

## Important Decisions Made
- Using `integer` for `account_number` (not string)
- `balance` defaults to `0` — no presence validation needed
- Uniqueness enforced at DB level via `add_index`, not column option
- Model named `BankAccount`, table is `bank_accounts`

---

## Next Steps
- Continue following the instructor's tutorial
- Learn about controllers and routes for the ATM API
- Implement deposit and withdraw endpoints

---

## Notes for Claude Desktop
- I am a beginner — keep explanations beginner-friendly
- I follow a tutorial and ask when I'm stuck or confused
- Do not jump ahead — wait for me to ask
- You have access to my project files — use them directly, don't ask me to paste code
- My preferred workflow: I ask a question → you answer short and clear → I ask for more if needed
