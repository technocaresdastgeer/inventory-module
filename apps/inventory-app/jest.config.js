module.exports = {
  name: 'inventory-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/inventory-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
