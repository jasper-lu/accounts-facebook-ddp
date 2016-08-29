Package.describe({
  name: 'oddup:accounts-facebook-ddp',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: "Login service for Facebook accounts",
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Oddup/accounts-facebook-ddp',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('oddup:facebook-ddp@0.0.1', ['client', 'server']);

  api.addFiles('facebook_login_button.css', 'client');

  api.addFiles("facebook.js");
});
