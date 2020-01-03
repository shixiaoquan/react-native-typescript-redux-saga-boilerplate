import AsyncStorage from '@react-native-community/async-storage';
import {API_BASE, cachedKeys} from 'constants';

const queryStringSpliceReducer: any = (acc: string, cur: string): string =>
  cur[1] === undefined
    ? acc
    : `${acc}${acc === '?' ? '' : '&'}${encodeURIComponent(
        cur[0],
      )}=${encodeURIComponent(cur[1])}`;

interface AjaxParam {
  path: string;
  method: string;
  query?: object;
}

export default async ({path = '/', method, query}: AjaxParam) => {
  let url = API_BASE + path;
  const options: any = {
    method: method.toUpperCase(),
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache',
    },
  };

  if (query) {
    // handle query params if exists
    const queryEntries = Object.entries(query);
    // custom fetch options
    if (options.method === 'GET') {
      // handle GET
      url = `${url}${queryEntries.reduce(queryStringSpliceReducer, '?')}`;
    } else {
      // handle POST, PUT, DELETE...
      // const params = {};
      // for (const [key, value] of queryEntries) {
      //   if (value !== undefined) {
      //     params[key] = value;
      //   }
      // }
      // options.body = JSON.stringify(params);
      options.body = query;
    }
  }

  // get token and language from local storage
  const token: string | null = await AsyncStorage.getItem(cachedKeys.token);

  // setup token headers if has token stored
  if (token) {
    options.headers.token = token;
  } else {
    delete options.headers.token;
  }
  console.log({url});
  console.log({options});
  console.log('fetch(url, options):', fetch(url, options));
  // return response instance
  return fetch(url, options);
};
