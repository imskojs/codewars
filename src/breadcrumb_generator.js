module.exports = 

function generateBC(url, seperator){
  let urls = split(url);
  let objs = createContentObjs(urls);
  cleanObjs(objs);
  let finalObjs = finalizeObjs(objs);
  let results = finalObjs.map(v => v.tag);
  return results.join(seperator);
};

function split(url){
  if(url.includes("//")){
    url = url.split('//')[1];
  }
  let urls = url.split('/');
  if(urls[urls.length - 1] === ''){
    urls.pop();
  }
  return urls;
}

function createContentObjs(urls){
  let href = '';
  let contentObjs = urls.map((partUrl, i) => {
    let obj = {href: '', text: ''};
    if(i === 0){
      href = href + '/';
      obj.href = href;
      obj.text = 'home';
    } else if(i !== 0){
      href = href + partUrl + '/';
      obj.href = href;
      obj.text = partUrl;
    }
    return obj;
  });
  return contentObjs;
}
function cleanObjs(objs){
  let TO_EXCLUDES = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"];
  let lastIndex = objs.length - 1;
  // let objs[lastIndex].text = objs[lastIndex].text;
  // clean dot;
  let dotExistsInLastText = objs[lastIndex].text.includes('.');
  if(dotExistsInLastText){
    let lastTexts = objs[lastIndex].text.split('.');
    objs[lastIndex].text = lastTexts[0];
    objs[lastIndex].text = objs[lastIndex].text;
  }
  
  let anchorsParamsExist = objs[lastIndex].text.includes('#') || objs[lastIndex].text.includes('?');
  if(anchorsParamsExist){
    objs[lastIndex].text = objs[lastIndex].text.split('#')[0].split('?')[0];
    objs[lastIndex].text = objs[lastIndex].text;
  }

  // clean hyphen
  objs.forEach((obj) => {
    if(obj.text.includes('-')){
      if(obj.text.length > 30){
        obj.text = obj.text.split('-').map((text) => {
          if(TO_EXCLUDES.indexOf(text) !== -1){
            return '';
          } else {
            return text[0];
          }
        }).join('');
      } else {
        obj.text = obj.text.split('-').join(' ');
      }
    }
  });



  // ignore index
  if(objs[lastIndex].text === 'index'){
    objs.pop();
    lastIndex = objs.length - 1;
    let lastObj = objs[lastIndex];
    lastObj.tag = `<span class="active">${lastObj.text}</span>`;
  }


}

function finalizeObjs(objs){
  let lastIndex = objs.length - 1;
  let resultObjs = objs.map((obj, i) => {
    let newObj = {};
    newObj.text = obj.text.toUpperCase();
    newObj.href = obj.href;
    if(i === lastIndex){
      newObj.tag = `<span class="active">${newObj.text}</span>`;
    } else {
      newObj.tag = `<a href="${newObj.href}">${newObj.text}</a>`;
    }
    return newObj;
  });
  return resultObjs;
}



