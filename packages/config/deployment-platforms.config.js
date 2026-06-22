module.exports = {
  vercel: {
    apiUrl: 'https://api.vercel.com',
    defaultRegion: 'iad1',
    maxTimeout: 30,
  },
  netlify: {
    apiUrl: 'https://api.netlify.com/api/v1',
    defaultSite: null,
  },
  railway: {
    apiUrl: 'https://backboard.railway.app/graphql/v2',
  },
  fly: {
    apiUrl: 'https://api.fly.io',
    defaultRegion: 'ord',
  },
};
