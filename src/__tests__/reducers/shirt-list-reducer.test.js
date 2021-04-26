import shirtListReducer from '../../reducers/shirt-list-reducer';

describe('shirtListReducer', () => {

  let action;
  const shopData = {
    name: "Some Brand",
    description: "A floral t-shirt",
    price: "$50",
    quantity: "20",
    id: 1
  }

  const currentState = {
    1: {
      name: 'cool shirt',
      description: 'a shirt with circles',
      price: '32.99',
      quantity: '4',
      id: 1
    },
    2: {
      name: "Some Brand",
      description: "A floral t-shirt",
      price: "$50",
      quantity: "20",
      id: 2
    }
  }

  test('Should return default state if no action type is recognized', () => {
    expect(shirtListReducer({}, { type: null })).toEqual({});
  });

  test('should successfully add a new shop data to masterShopList', () => {
    const { name, description, price, quantity, id } = shopData;
    action = {
      type: "ADD_ITEM",
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      id: id
    };

    expect(shirtListReducer({}, action)).toEqual({
      [id] : {
        name: name,
        description: description,
        price: price,
        quantity: quantity,
        id: id
      }
    });
  });

  test('Should successfully delete a shirt', () => {
    action = {
      type: 'DELETE_ITEM',
      id: 1
    };
    expect(shirtListReducer(currentState, action)).toEqual({
      2: {
        name: "Some Brand",
        description: "A floral t-shirt",
        price: "$50",
        quantity: "20",
        id: 2
      }
    });
  });
});