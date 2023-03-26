const axios = require("axios");

const search = (req, res) => {
  const query = req.query.q;

  axios
    .get(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
    .then(({ data }) => {
      const items = data.results.map((result) => {
        const price = result.price.toString().split(".");

        return {
          id: result.id,
          title: result.title,
          price: {
            currency: result.currency_id,
            amount: parseInt(price[0] || 0),
            decimals: parseInt(price[1] || 0),
          },
          picture: result.thumbnail,
          condition: result.condition,
          free_shipping: result.shipping.free_shipping,
          state: result.address.state_name,
        };
      });

      const categories = data.filters[0]?.values.map((cat) => cat.name) || [];

      const result = {
        author: {
          name: "Camila",
          lastName: "Sánchez",
        },
        categories,
        items,
      };

      return res.status(200).send(result);
    })
    .catch(({ response }) => {
      const status = response?.status || 400;
      const error = {
        error: response?.data.error,
        message: response?.data.message,
      };

      return res.status(status).send(error);
    });
};

const getItem = (req, res) => {
  const { id } = req.params;

  axios
    .all([
      axios.get(`https://api.mercadolibre.com/items/${id}`),
      axios.get(`https://api.mercadolibre.com/items/${id}/description`),
    ])
    .then(
      axios.spread(({ data: dataResponse }, { data: descriptionResponse }) => {
        const price = dataResponse.price.toString().split(".");

        const result = {
          author: {
            name: "Camila",
            lastName: "Sánchez",
          },
          item: {
            id,
            title: dataResponse.title,
            price: {
              currency: dataResponse.currency_id,
              amount: parseInt(price[0] || 0),
              decimals: parseInt(price[1] || 0),
            },
            picture: dataResponse.thumbnail,
            condition: dataResponse.condition,
            free_shipping: dataResponse.free_shipping,
            sold_quantity: dataResponse.sold_quantity,
            description: descriptionResponse.plain_text,
          },
        };

        return res.status(200).send(result);
      })
    )
    .catch(({ response }) => {
      const status = response?.status || 400;
      const error = {
        error: response?.data.error,
        message: response?.data.message,
      };

      return res.status(status).send(error);
    });
};

module.exports = { search, getItem };
