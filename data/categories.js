const getCategories = () => {
  const data = [
    {
      id: 0,
      name: 'Living Room',
      subCategories: [
        {
          id: 0,
          name: 'Chairs',
          objects: [
            {
              id: 0,
              name: 'Chair1',
              img: '/images/chair1.jpg',
              price: 120,
              quantity: 1,
            },
            {
              id: 1,
              name: 'Chair2',
              img: '/images/chair2.jpg',
              price: 80,
              quantity: 1,
            },
          ],
        },
        {
          id: 0,
          name: 'Tables',
          objects: [
          ],
        },
      ],
    },

  ];

  return data;
};
export default getCategories;
