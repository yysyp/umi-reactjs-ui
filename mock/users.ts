export default {

    'GET /api/users': [
      { id: 1, name: 'foo' },
      { id: 2, name: 'bar' }
    ],
  
    'GET /api/users/1': { id: 1, name: 'foo' },

    'POST /api/users/create': (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.end('ok');
      },
  
  }