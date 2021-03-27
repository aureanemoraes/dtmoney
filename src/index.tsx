import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {createServer, Model} from 'miragejs';

createServer({
  models: {
    transaction: Model
  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento site',
          value: 6000,
          type: 'deposit',
          category: 'Dev',
          createdAt: new Date('2021-03-27 09:00:00')
        },
        {
          id: 2,
          title: 'Compra Rain World',
          value: 28,
          type: 'withdraw',
          category: 'Games',
          createdAt: new Date('2021-01-05 18:00:00')
        }
      ]
    });
  },
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    })
  }
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
