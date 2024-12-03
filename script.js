function strip(bandName) {
  return bandName.replace(/^(a |the |an )/i, '').trim();
}

bands.sort((a, b) => strip(a).localeCompare(strip(b)));

console.log(bands);
