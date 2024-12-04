const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];


function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

function customSort(bands) {
  return bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
}

const sortedBands = customSort(bands)

 sortedBands.forEach(band => {
  console.log(band);
});



