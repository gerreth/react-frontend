import axios from 'axios';

// const baseUrl = 'http://localhost:5000/discovery-backend/us-central1/app';
// const baseUrl = 'http://localhost:1001/spotify';
const baseUrl = 'http://localhost:2000';
// const baseUrl = 'http://35.246.223.121';

const fetchTopBands = (token, user) => {
  const instance = axios.create({
    headers: { Authorization: `Bearer ${token}` },
  });

  const url = `${baseUrl}/bands/top/${user}?token=${token}`;

  return instance.get(url);
};

const fetchSimilarBands = (token, ids) => {
  const instance = axios.create({
    headers: { Authorization: `Bearer ${token}` },
  });

  const url = `${baseUrl}/bands/similar?token=${token}`;

  return instance.post(url, { ids });
};

export default {
  fetchSimilarBands,
  fetchTopBands,
};
