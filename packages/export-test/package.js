Package.describe({ name: 'export-test' });

Package.onUse(function(api) {
  api.use([ 'ecmascript' ]);

  api.mainModule('index.js');
  api.export('WillWork');
});
