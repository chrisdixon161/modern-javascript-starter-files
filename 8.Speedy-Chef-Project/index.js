const pizzas = [
  {
    name: 'Margherita',
    method:
      '1/ Roll the dough base to the required thickness and shape. 2/ Add sauce to the base. 3/ Top with cheese.',
    requiredSteps: ['ROLL DOUGH', 'PIZZA SAUCE', 'CHEESE'],
  },
  {
    name: 'Pepperoni',
    method:
      '1/ Roll the dough base to the required thickness and shape. 2/ Add sauce to the base. 3/ Top with cheese. 4/ Add 12 slices of pepperoni.',
    requiredSteps: ['ROLL DOUGH', 'PIZZA SAUCE', 'CHEESE', 'PEPPERONI'],
  },
  {
    name: 'Ham and Pineapple',
    method:
      '1/ Roll the dough base to the required thickness and shape. 2/ Add sauce to the base. 3/ Top with cheese. 4/ Add 12 pieces of ham. 5/ Add 12 pieces of pineapple.',
    requiredSteps: ['ROLL DOUGH', 'PIZZA SAUCE', 'CHEESE', 'HAM', 'PINEAPPLE'],
  },
  {
    name: 'Chicken',
    method:
      '1/ Roll the dough base to the required thickness and shape. 2/ Add sauce to the base. 3/ Top with cheese. 4/ Add 12 pieces of chicken',
    requiredSteps: ['ROLL DOUGH', 'PIZZA SAUCE', 'CHEESE', 'CHICKEN'],
  },
  {
    name: 'Vegetarian',
    method:
      '1/ Roll the dough base to the required thickness and shape. 2/ Add sauce to the base. 3/ Top with cheese. 4/ Add handful of onions. 5/ Add handful of peppers. 6/ Add small handful of mushrooms. 7/ Add garlic.',
    requiredSteps: [
      'ROLL DOUGH',
      'PIZZA SAUCE',
      'CHEESE',
      'ONIONS',
      'PEPPERS',
      'MUSHROOMS',
      'GARLIC',
    ],
  },
];

let orders = [
  {
    id: 1,
    pizzas: [
      {
        quantity: 1,
        name: 'Ham and Pineapple',
      },
      {
        quantity: 2,
        name: 'Pepperoni',
      },
    ],
  },
  {
    id: 2,
    pizzas: [
      {
        quantity: 2,
        name: 'Margherita',
      },
      {
        quantity: 1,
        name: 'Pepperoni',
      },
    ],
  },
  {
    id: 3,
    pizzas: [
      {
        quantity: 2,
        name: 'Pepperoni',
      },
      {
        quantity: 1,
        name: 'Margherita',
      },
      {
        quantity: 1,
        name: 'Ham and Pineapple',
      },
    ],
  },
];

const ingredients = [
  'ROLL DOUGH',
  'PIZZA SAUCE',
  'CHEESE',
  'PEPPERONI',
  'HAM',
  'PINEAPPLE',
  'ONIONS',
  'PEPPERS',
  'MUSHROOMS',
  'GARLIC',
  'CHICKEN',
];
