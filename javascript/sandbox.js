const p = document.querySelectorAll('p');

//p.classList.add('error');

p.forEach(para => {
  if (para.textContent.includes('error')){
    para.classList.add('error');
  }
  else if (para.textContent.includes('success')){
    para.classList.add('success');
  }
})

const title = document.querySelector('.title');

title.classList.toggle('test');