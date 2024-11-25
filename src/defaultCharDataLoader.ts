import { CharacterJson } from './typings/types';

const VERSION = '2.0';
const getCharDataUrl = (char: string) =>
  `https://cdn.jsdelivr.net/npm/hanzi-writer-data@${VERSION}/${char}.json`;

const defaultCharDataLoader = (
  char: string,
  onLoad: (parsedJson: CharacterJson) => void,
  onError: (error?: any, context?: any) => void,
) => {
  // determin wether the input parameter char is a english letter or alphanumeric number
  if (char.length == 1 && char.match(/[a-zA-Z0-9]/)) {
      fetch(`../data/${char}.json`)
      .then((response) => response.json())
      .then((json) => {
        onLoad(json);
    });
    return;
  }

  if (char == 'a') {




    // fetch("../data/a.json").then((response) => {
    //   response.json();
    //   }
    // ).then((parsedJson) => {
    //     // const resp = '{"strokes":["M 383 1064 L 301 1064 Q 239 1064 184 1040 Q 129 1017 88 976 Q 47 935 23 880 Q 0 825 0 763 L 0 301 Q 0 239 23 184 Q 47 129 88 88 Q 129 47 184 23 Q 239 0 301 0 L 383 0 Q 445 0 500 23 Q 555 47 596 88 Q 637 129 660 184 Q 684 239 684 301 L 684 342 L 561 362 L 561 294 Q 561 257 547 224 Q 533 192 509 168 Q 485 144 452 130 Q 420 116 383 116 L 301 116 Q 264 116 231 130 Q 199 144 175 168 Q 151 192 137 224 Q 123 257 123 294 L 123 770 Q 123 807 137 839 Q 151 872 175 896 Q 199 920 231 934 Q 264 948 301 948 L 383 948 Q 420 948 452 934 Q 485 920 509 896 Q 533 872 547 839 Q 561 807 561 770 L 561 702 L 684 722 L 684 763 Q 684 825 660 880 Q 637 935 596 976 Q 555 1017 500 1040 Q 445 1064 383 1064 Z"],"medians":[[[684,722],[500,1040],[184,1040],[0,763],[0,301],[239,0],[445,0],[684,342]]]}';
    //     onLoad(JSON.parse(parsedJson));
    // })


    return;
  }

  // load char data from hanziwriter cdn (currently hosted on jsdelivr)
  const xhr = new XMLHttpRequest();
  if (xhr.overrideMimeType) {
    // IE 9 and 10 don't seem to support this...
    xhr.overrideMimeType('application/json');
  }
  xhr.open('GET', getCharDataUrl(char), true);
  xhr.onerror = (event) => {
    onError(xhr, event);
  };
  xhr.onreadystatechange = () => {
    // TODO: error handling
    if (xhr.readyState !== 4) return;

    if (xhr.status === 200) {
      onLoad(JSON.parse(xhr.responseText));
    } else if (xhr.status !== 0 && onError) {
      onError(xhr);
    }
  };
  xhr.send(null);
};

export default defaultCharDataLoader;
