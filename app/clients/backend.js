import axios from 'axios';

const baseUrl = 'http://localhost:2000';

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

  return {
    fetchTopBands,
    fetchSimilarBands,
    getAuth,
    likeOrDislike,
  };
};

export default backendClient;
