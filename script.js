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

// Custom sorting function
function customSort(arr) {
  return arr.sort((a, b) => {
    // If 'Anywhere But Here' should come first
    if (a === 'Anywhere But Here') return -1;
    if (b === 'Anywhere But Here') return 1;

    // Sort "The" prefixed items alphabetically
    const isTheA = a.startsWith('The ');
    const isTheB = b.startsWith('The ');

    // If both are 'The' prefixed or both are not 'The' prefixed, sort alphabetically
    if (isTheA && isTheB) {
      return a.localeCompare(b);
    }
    if (!isTheA && !isTheB) {
      return a.localeCompare(b);
    }

    // Non-'The' prefixed items come before 'The' prefixed items
    return isTheA ? 1 : -1;
  });
}

// Apply custom sort and output each band name on a new line
const sortedBands = customSort(bands);

// Log each band name to the console
sortedBands.forEach(band => {
  console.log(band);
});

