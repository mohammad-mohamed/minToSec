

calculate_button = document.getElementById('calculate_button');
calculate_button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('clicked');
    minsTosecs();
})
console.log('click addEventListener');


function minsTosecs()  {
    mins = document.getElementById('mins').value
    console.log('mins: ' + mins);
    document.getElementById('secs').value = mins * 60
}
    
    
