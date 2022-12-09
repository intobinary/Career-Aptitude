var all_apts = [['writing','design','pilot','lawyer','philosopher','entrepreneur'],               ['writing','medicine','acting','entrepreneur','politics','consultant'],
                ['sales','public relations','event planning','politics','television', 'teaching'],
                ['medicine','counseling','religous leader','teaching','charity work'],
                ['writing','design','art','yoga instructor','message therapist']],
    btns = document.querySelectorAll('button')

btns.forEach(function(elm){
  elm.addEventListener('click', function(){
    if(elm.parentElement.querySelector('.selected')){
      elm.parentElement.querySelector('.selected').classList.remove('selected')
      elm.classList.add('selected')
    } else {
      elm.classList.add('selected')
    }

    if(document.querySelectorAll('.selected').length == 5){
      calcScore()
    }
  })
})

function calcScore() {
  document.querySelector('.aptitudes').style.display = 'block'
  var items = document.querySelectorAll('.selected'),
      more_apt = document.querySelector('.more_apt'),
      less_apt = document.querySelector('.less_apt'),
      apts = []

  for(var i=0;i<5;i++) {
    if(items[i].classList.contains('yes')){
      apts = apts.concat(all_apts[i])
    }
  } 

  more_apt.innerHTML = ''
  less_apt.innerHTML = ''
  
  for(var i=0;i<apts.length;i++) {
    if(apts.filter(x => x==apts[i]).length > 1 && !more_apt.innerHTML.includes(apts[i])) {
      more_apt.innerHTML += '<span>' + apts[i] + '</span>'
    } 
    if(apts.filter(x => x==apts[i]).length == 1) {
      less_apt.innerHTML += '<span>' + apts[i] + '</span>'
    }
  }
}
