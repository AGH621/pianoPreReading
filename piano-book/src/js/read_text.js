/*
    Read a text file.
*/

import * as React from 'react';


export function readText(textfile) {
  const [text, setText] = React.useState();
  fetch(textfile)
    .then((response) => response.text())
    .then((textContent) => {
      setText(textContent);
    });
  return text || "Loading...";
}