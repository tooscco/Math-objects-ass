if(inputOne.value == '' || inputTwo.value==''){
    tee.style.display= 'block'
}

letCheck = () =>{
    if (inputOne.value == '' || inputTwo.value==''){
        err.style.display =  'block'
    }else if ((inputOne.value == 'Oluwatosin'&& inputTwo.value=='Ayooluwapetiti')||(inputOne.value == 'Samuel'&& inputTwo.value=='Ayooluwapetiti')||(inputOne.value == 'Oluwatosin'&& inputTwo.value=='Deborah')||(inputOne.value == 'Samuel'&& inputTwo.value=='Deborah')||(inputOne.value == 'oluwatosin'&& inputTwo.value=='ayooluwapetiti')||(inputOne.value == 'samuel'&& inputTwo.value=='ayooluwapetiti')||(inputOne.value == 'oluwatosin'&& inputTwo.value=='deborah')||(inputOne.value == 'samuel'&& inputTwo.value=='deborah') ||(inputOne.value == 'oluwatosin'&& inputTwo.value=='Ayooluwapetiti')||(inputOne.value == 'Oluwatosin'&& inputTwo.value=='ayooluwapetiti')) {
        show.style.display='block'
        tee.style.display= 'none'
        document.getElementById('inputOne').value = ''
        document.getElementById('inputTwo').value = ''
        show.innerHTML = `${100}%`
    }else{
        show.style.display='block'
        tee.style.display= 'none'
        let answer = Math.round(Math.random()*100)
        document.getElementById('inputOne').value = ''
        document.getElementById('inputTwo').value = ''
        show.innerHTML = `${answer}%`
    }
    setTimeout (() =>{
        err.style.display = 'none'
    }, 3000)
    setTimeout (() =>{
        show.style.display = 'none'
    }, 6000)
}