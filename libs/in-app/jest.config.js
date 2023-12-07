module.exports = {
  name: 'in-app',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/in-app',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
