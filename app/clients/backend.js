import axios from 'axios';

// const baseUrl = 'http://localhost:2000';
const baseUrl = 'http://35.246.254.214:2000';

const backendClient = () => {
  const instance = axios.create();

  const fetchTopBands = (token, user) => {
    const url = `${baseUrl}/bands/top/${user}?token=${token}`;
    return instance.get(url);
  };

  const fetchSimilarBands = (token, ids, user) => {
    const url = `${baseUrl}/bands/similar/${user}?token=${token}`;
    return instance.post(url, { ids });
  };

  const getAuth = code => {
    const url = `${baseUrl}/auth/spotify/?code=${code}&redirect_uri=http://localhost:3000/callback`;
    return instance.get(url);
  };

  const likeOrDislike = (band, like, user) => {
    const url = `${baseUrl}/user/${user}/${band.id}/${like}`;
    return instance.post(url, { band });
  };

  const play = (band, user) => {
    const url = `${baseUrl}/bands/play/${user}/${band.uri}`;
    return instance.post(url, { band });
  };

  const next = user => {
    const url = `${baseUrl}/bands/next/${user}`;
    return instance.post(url);
  };

  return {
    fetchTopBands,
    fetchSimilarBands,
    getAuth,
    likeOrDislike,
    next,
    play,
  };
};

export default backendClient;
