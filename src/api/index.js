const photos = [
  {
    url: 'https://pp.vk.me/c630723/v630723032/2ff51/6SC9VjGiVeU.jpg',
    year: 2016
  },
  {
    url: 'https://pp.vk.me/c629207/v629207032/1cc9e/w9LeY06YRis.jpg',
    year: 2015
  },
  {
    url: 'https://pp.vk.me/c629207/v629207032/1cc0c/ptDXgLXiK_8.jpg',
    year: 2015
  },
  {
    url: 'https://pp.vk.me/c623726/v623726032/4d527/cT1RmwXtZIA.jpg',
    year: 2015,
  },
  {
    url: 'https://pp.vk.me/c627729/v627729032/d2d1/Gqw8efIVDes.jpg',
    year: 2015
  },
  {
    url: 'https://pp.vk.me/c627729/v627729032/cf0b/987GA1OA6DU.jpg',
    year: 2015
  },
  {
    url: 'https://pp.vk.me/c621917/v621917032/9ae9/UvjLQGWnfJw.jpg',
    year: 2015
  },
  {
    url: 'https://pp.vk.me/c6082/v6082032/ec17/rc-edJRwYmo.jpg',
    year: 2014
  },
  {
    url: 'https://pp.vk.me/c6055/v6055032/e33b/saBqoaeQq-8.jpg',
    year: 2014
  }
]

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getPhotos = (year) => {
  console.log(Promise);
  return delay(500).then(() => {
    return photos.filter(p => p.year === year);
  });
}
