import {toRotateData} from '../../data';
  const period = 2000;
  let loopNum = 0,
    txt = '',
    isDeleting = false;

/*
@param html element with mutable value
*/
export default function tick(trElement) {
  const i = loopNum % toRotateData.length;
  let fullTxt = toRotateData[i];

  if (isDeleting) {
    txt = fullTxt.substring(0, txt.length - 1);
  } else {
    txt = fullTxt.substring(0, txt.length + 1);
  }
  if (trElement.current)
    trElement.current.innerHTML = `<span id="wrap"> ${txt}</span>`;

  let delta = 300 - Math.random() * 100;

  if (isDeleting) {
    delta /= 2;
  }

  if (!isDeleting && txt === fullTxt) {
    delta = period;
    isDeleting = true;
  } else if (isDeleting && txt === '') {
    isDeleting = false;
    loopNum++;
    delta = 500;
  }
  setTimeout(function () {
    tick(trElement);
  }, delta);
};
