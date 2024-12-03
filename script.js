//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

bands.sort((a, b) => {
    const bandA = a.replace(/^The /, ''); // Remove "The " from the beginning
    const bandB = b.replace(/^The /, ''); // Remove "The " from the beginning
    return bandA.localeCompare(bandB); // Compare the band names
});

console.log(bands);
