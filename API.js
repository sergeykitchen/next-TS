import fetch from 'isomorphic-unfetch';

const URL = 'https://api.tvmaze.com/api/';

class Api {
  constructor(url) {
    this.url = url;
  }

  async getList(show) {
    const data = await fetch(`${URL}search/shows?q=${show}`);
    return data.json();
  }

}

export default new Api(URL);