function humanReadable(seconds) {
  // TODO
  if(seconds < 60){
    return `00:00:${pad(seconds)}`;
  }

  let minutes = Math.floor(seconds / 60);
  let sec = seconds % 60;
  if(minutes < 60){
    return `00:${pad(minutes)}:${pad(sec)}`;
  }

  let hours = Math.floor(minutes / 60);
  minutes = minutes % 60;
  return `${pad(hours)}:${pad(minutes)}:${pad(sec)}`;
}

function pad(num){
  if(+num < 10){
    num = '0' + num;
    return num;
  } else {
    return '' + num;
  }
}


module.exports = humanReadable;