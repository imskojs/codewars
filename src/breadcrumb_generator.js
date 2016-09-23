module.exports =

function generateBC(url, separator) {
  console.log(url);
  let urls = split(url);
  let href = '';
  let answers = urls.map((val, i) => {
    let text = '';
    if(i === 0){
      href = href + '/';
      text = 'home'.toUpperCase();
    } else {
      href = href + val + '/';
      text = val.toUpperCase();
    }
    return [href, text];
  });

  let answers2 = [];
  let length = answers.length;
  answers.forEach((vals, i) => {
    if (i !== length - 1){
      answers2.push(`<a href="${vals[0]}">${vals[1]}</a>`);
    } else {
      if(vals[1].split('.')[0] === 'INDEX'){

        let value = answers[i - 1][1];
        answers2.splice(i - 1, 1, `<span class="active">${value}</span>`);
      } else {
        answers2.push(`<span class="active">${vals[1].split('.')[0]}</span>`);
      }
    }
  });
  answers2 = answers2.join(separator);
  console.log(answers2);
  return answers2;
};

function split(url){
  return url.split('/');
}

// 