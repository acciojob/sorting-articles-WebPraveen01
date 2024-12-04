// const bands = [
//   'The Plot in You',
//   'The Devil Wears Prada',
//   'Pierce the Veil',
//   'Norma Jean',
//   'The Bled',
//   'Say Anything',
//   'The Midway State',
//   'Counterparts',
//   'Oh, Sleeper',
//   'Anywhere But Here',
//   'An Old Dog'
// ];

// function strip(bandName) {
//   return bandName.replace(/^(a |the |an )/i, '').trim();
// }

// function customSort(bands) {
//   return bands.sort((a, b) => strip(a) > strip(b) ? 1 : -1);
// }

// const sortedBands = customSort(bands)

//  sortedBands.forEach(band => {
//   console.log(band);
// });

const bands = [
            'The Plot in You',
            'The Devil Wears Prada',
            'Pierce the Veil',
            'Norma Jean',
            'The Bled',
            'Say Anything',
            'The Midway State',
            'Counterparts',
            'Oh, Sleeper',
            'Anywhere But Here',
            'An Old Dog'
        ];

        // Sort the array alphabetically
        bands.sort();

        // Get the ul element where the list will be displayed
        const bandListElement = document.getElementById('band-list');

        // Loop through the sorted array and create an <li> for each band
        bands.forEach(band => {
            const listItem = document.createElement('li');
            listItem.textContent = band;
            bandListElement.appendChild(listItem);
        });

