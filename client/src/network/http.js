export class HttpClient {
  constructor(base_URL) {
    this.base_URL = base_URL;
  }

  async fetch(url, options) {
    const res = await fetch(`${this.base_URL}${url}`, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
    });

    let data;

    try {
      data = await res.json();
    } catch (error) {
      throw error;
    }

    if (res.status > 299 || res.status < 200) {
      const message =
        data && data.message ? data.message : 'something went wrong';

      const error = new Error(message);

      //   if (res.status === 401) {
      //TODO:

      //   }
      throw error;
    }
    return data;
  }
}
