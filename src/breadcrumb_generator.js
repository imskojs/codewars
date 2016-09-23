module.exports =

function generateBC(url, separator) {
  console.log(url);
  let urls = split(url);
  if(urls.length === 2 && !urls[1]){
    return `<span class="active">HOME</span>`;
  }
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
    let href = vals[0];
    let text = vals[1];
    if(text.length > 30){
      let TO_REMOVE = [
        "THE","OF","IN","FROM","BY","WITH","AND", 
        "OR", "FOR", "TO", "AT", "A"
      ];
      let texts = text.split('-');
      texts.reduceRight((prev, curr, index) => {
        if(TO_REMOVE.indexOf(prev) !== -1){
          texts.splice(index + 1, 1);
        }
        return curr;
      });
      text = texts.map(val => val[0]).join('');
    } else {
      text = text.split('-').join(' ');
    }
    if (i !== length - 1){
      answers2.push(`<a href="${href}">${text}</a>`);
    } else {
      if(text.split('.')[0] === 'INDEX'){
        let value = answers[i - 1][1];
        answers2.splice(i - 1, 1, `<span class="active">${value}</span>`);
      } else {
        answers2.push(`<span class="active">${text.split('.')[0]}</span>`);
      }
    }
  });

  let lastText = answers2[answers2.length - 1];

  if(lastText.split('?').length > 1 || lastText.split('#').length > 1){
    answers2[answers2.length - 1] = lastText.split('?')[0].split('#')[0] + '</span>';
  }
  answers2 = answers2.join(separator);
  return answers2;
};

function split(url){
  if(url.includes('//')){
    url = url.split('//')[1];
  }
  return url.split('/');
}

// acrorym
// giacomo-sorbi --> GIACOMO SORBI