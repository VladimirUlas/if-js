const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

const prepareStringForSearch = (str, strToCompare) => str.toLocaleLowerCase().replaceAll(' ', '').includes(strToCompare);

function search(searchRequest) {
  const result = [];
  const searchStringLowerCase = searchRequest.replaceAll(' ', '').toLowerCase();
  for (let index = 0; index < data.length; index += 1) {
    const { country, city, hotel } = data[index];
    const concatedString = `${country}${city}${hotel}`;

    if (prepareStringForSearch(concatedString, searchStringLowerCase)) {
      result.push(`${country}, ${city}, {hotel}`);
    }
  }

  return result;
}

console.log(search('Germany Ber'));

const Data = '2020-11-26';
const arrayOfMatches = Data.replace(/2020-11-26/, '26.11.2020');

console.log(arrayOfMatches);
