// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  api: '/api',
  apiBase: 'http://intravision-task.test01.intravision.ru',
  guid: "481eb5d1-f227-4e1d-b28e-19660edfeb38",
  tasks: '/Tasks',
  taskTypes: '/TaskTypes',
  getTasks: '/odata/tasks',
  users:'/Users',
  priorities: '/Priorities',
  statuses: '/Statuses',
  tags:'/Tags'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
