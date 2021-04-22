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
              img: '/images/chair.jpg',
            },
          ],
        },
      ],
    },
    {
      id: 1,
      name: 'Kitchen',
    },
    {
      id: 2,
      name: 'Bedroom',
    },
    {
      id: 3,
      name: 'Home Office',
    },
    {
      id: 4,
      name: 'Home Gym',
    },
    {
      id: 5,
      name: 'Closets',
    },
    {
      id: 6,
      name: 'Class Room',
    },
    {
      id: 7,
      name: 'Drawing Room',
    },
    {
      id: 8,
      name: 'Dining Room',
    },
  ];

  return data;
};
export default getCategories;
