# ATM App — Rails + Expo

A basic ATM simulation app. The focus of this project was learning how to build a Rails backend and integrate it with a React Native (Expo) frontend — not UI or UX.

## Goal

Understand how to:
- Structure a Rails API
- Connect an Expo app to a Rails backend
- Handle requests/responses between the two
- Work with NativeWind for styling in React Native

## Stack

- **Backend**: Ruby on Rails (API mode)
- **Frontend**: React Native / Expo + NativeWind

## What I Learned in Rails (compared to the Todo app)

- **Route namespacing** — grouping routes under `/api/v1/` using `namespace` to version the API properly
- **`before_action`** — used to guard controller actions, for example checking the balance is enough before allowing a withdrawal
- **Handling requests and responses** — how `params[:key]` reads values from the request, how `render json:` sends a response back
- **`BaseController`** — shared logic across controllers can be extracted into a base class so it doesn't get repeated
- **Exception handling** — using `begin / rescue` to catch error
- **HTTP status codes** — returning the right status with every response: `:ok` (200), `:not_found` (404), `:unprocessable_entity` (422)
- **Model vs controller validations** — controller validations give clear error messages to the client, model validations protect the database
- **`binding.pry`** — pausing execution mid-request to inspect variables in real time, useful for debugging controller logic

## Notes

The UI is intentionally simple. This project is a learning exercise, not a production app. I am still learning Rails and exploring how it integrates with a mobile frontend. NativeWind is also something I am experimenting with here.
