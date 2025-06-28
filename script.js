const arr = [
  {
    dp: 'https://images.unsplash.com/photo-1516726817505-f5ed825624d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vZGVsfGVufDB8fDB8fHww',
    story: 'https://images.unsplash.com/photo-1512646605205-78422b7c7896?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'
  },
  {
    dp: 'https://plus.unsplash.com/premium_photo-1683817397956-b46614758fb8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D',
    story: 'https://plus.unsplash.com/premium_photo-1683817138643-df622bfafcb0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'
  },
  {
    dp: 'https://images.unsplash.com/photo-1526510747491-58f928ec870f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww',
    story: 'https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1vZGVsfGVufDB8fDB8fHww'
  },
  {
    dp: 'https://images.unsplash.com/photo-1549570652-97324981a6fd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG1vZGVsfGVufDB8fDB8fHww',
    story: 'https://images.unsplash.com/photo-1440589473619-3cde28941638?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1vZGVsfGVufDB8fDB8fHww'
  },
  {
    dp: 'https://plus.unsplash.com/premium_photo-1707932495000-5748b915e4f2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1vZGVsfGVufDB8fDB8fHww',
    story: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1vZGVsfGVufDB8fDB8fHww'
  }
]

let marvel = ''

arr.forEach((elem, idx)=>{
  marvel += `<div class="story">
        <img id='${idx}' src="${elem.dp}" alt="">
      </div>`
})

const storiyan = document.querySelector('#storiyan')
storiyan.innerHTML = marvel

storiyan.addEventListener('click', (dets)=>{
  const storyView = document.querySelector('#full-screen')
  storyView.style.display = 'block'
  storyView.style.backgroundImage = `url(${arr[dets.target.id].story})` 

  setTimeout(() => {
    storyView.style.display = 'none'
  }, 3000);
})

