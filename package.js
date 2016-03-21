Package.describe({
  name: 'alperen:flot-orderbars',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'OrderBars plugin for flot:flot',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/alperenelhan/flot-orderBars.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('flot:flot', 'client');
  api.imply('flot:flot', 'client');
  api.addFiles('flot-orderbars.js', 'client');
});
