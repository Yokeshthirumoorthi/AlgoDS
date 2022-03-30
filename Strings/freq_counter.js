// Show the frequency count of each letter in a string

function freq_counter(word) {
  if (!word) return {};

  let max = 0;
  let char = "";

  [...word].reduce((acc, ch) => {
    const count = acc[ch] ? acc[ch] + 1 : 1;
    if (count > max) {
      char = ch;
      max = count;
    }
    return { ...acc, [ch]: count };
  }, {});

  return { [char]: max };
}

console.log(freq_counter("hello"));
