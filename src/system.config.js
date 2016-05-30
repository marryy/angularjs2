System.config({
  packages: {
    'app': {defaultExtension: 'js'}
  },
  map: {
    'rxjs': '/node_modules/rxjs',
  }
});
System.import('app/components/app/app');
