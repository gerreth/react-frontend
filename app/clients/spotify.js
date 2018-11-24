import axios from 'axios';

const baseUrl = 'https://api.spotify.com/v1/me';

const spotifyClient = token => {
  const instance = axios.create({
    headers: {
      Authorization: `Bearer ${token}`,
      'content-type': 'application/json',
    },
    json: true,
  });

  return {
    next() {
      const url = `${baseUrl}/player/next`;
      return instance.post(url);
    },
    play(band) {
      const url = `${baseUrl}/player/play`;
      return instance.put(url, { context_uri: band.uri });
    },
    me() {
      const url = `${baseUrl}`;
      return instance.get(url);
    },
    topArtists() {
      const endpoint = 'top/artists';
      const url = `${baseUrl}/${endpoint}?limit=100&time_range=medium_term`;
      return instance.get(url);
    },
  };
};

export default spotifyClient;
