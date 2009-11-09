# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_test_formtastic_sass_session',
  :secret      => 'd57f4e1e9beda5f6521cd4bda76445bf5719f22e4666ffea1e432e2e730a0e24f7eba934cd194d73ca48defb273d6e8eaec6ec20ba990e5c8fc2fcb80665a322'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
