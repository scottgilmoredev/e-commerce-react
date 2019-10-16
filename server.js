const bodyParser = require('body-parser');
const compression = require('compression');
const cors = require('cors');
const enforce = require('express-sslify');
const express = require('express');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Compression
app.use(compression());

// CORS
app.use(cors());

// Enforce
app.use(enforce.HTTPS({ trustProtoHeader: true }));

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));

    app.get('*', function(request, response) {
        response.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.get('/service-worker.js', (requeest, response) => {
    response.send(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

app.post('/payment', (request, response) => {
    const body = {
        source: request.body.token.id,
        amount: request.body.amount,
        currency: 'usd'
    };

    stripe.charges.create(body, (stripeError, stripeResponse) => {
        if (stripeError) {
            response.status(500).send({ error: stripeError });
        } else {
            response.status(200).send({ success: stripeResponse });
        }
    });
});