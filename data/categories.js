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
              img: '/images/chair1.jpg',
            },
            {
              id: 1,
              img: '/images/chair2.jpg',
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
