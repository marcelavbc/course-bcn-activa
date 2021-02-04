$(document).ready(() => {
    $('#flipToBack').on('click', function () {
        $('.card').addClass('flipped');
        const xhr = new XMLHttpRequest();
        
        xhr.open('GET', 'http://api.icndb.com/jokes/random', true);
        xhr.onload = function () {
            if (this.status === 200) {
                let joke = JSON.parse(this.responseText).value.joke;
                $('#backCard').html(joke);
            } else if(this.status === 404){
                $('#backCard').html('Joke not found...');
            }
        }
        xhr.send();
    });

    $('#flipToFront').on('click', function(){
        $('.card').removeClass('flipped');
    });
})