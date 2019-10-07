// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  serverUrl: 'http://45.77.44.246:8080',
  apiYoutube: 'https://www.googleapis.com/youtube/v3/videos',
  key: 'AIzaSyASka3wD2naJ5JaTOVAbrElTe2SY_x1gRI',
  fields: 'items(snippet(title,description,channelTitle,publishedAt),player,contentDetails,statistics(viewCount,likeCount,dislikeCount))',
  part: 'snippet,statistics,player'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
