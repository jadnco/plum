window.ENV = window.ENV || {};

// Configure an authorizer
window.ENV['simple-auth'] = {
  authorizer: 'simple-auth-authorizer:oauth2-bearer'
};