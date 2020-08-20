import axios from 'axios';

const API_URL = 'https://anime.carleslc.me';

export default class Backend {
  constructor() {
    this.axios = axios.create({
      baseURL: API_URL,
      headers: {
        common: {
          Accept: 'application/json',
        },
      },
    });

    /* this.axios.interceptors.request.use((request) => {
      console.log(request);
      return request;
    }); */
  }

  get(endpoint, headers) {
    return this.axios.get(endpoint, headers);
  }

  async getCalendar() {
    const response = await this.get('/calendar');

    if (response.status !== 200 || !response.data.airingAnimes) {
      return {};
    }

    const airingAnimes = response.data.airingAnimes;

    const calendar = {};

    airingAnimes.forEach((airingAnime) => {
      let anime = calendar[airingAnime.title];
      if (!anime) {
        anime = {};
        calendar[airingAnime.title] = anime;
      }
      anime[airingAnime.episode] = airingAnime.date;
    });

    /*
    {
      "One Piece": {
        "835": "2018-05-06T00:30:00Z",
        ...
      },
      ...
    }
    */
    return calendar;
  }
}
