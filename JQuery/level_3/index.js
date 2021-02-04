$(document).ready(() => {
    $('#flipToBack').on('click', function () {
        $('.card').addClass('flipped');

        fetch('http://api.icndb.com/jokes/random')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("NETWORK RESPONSE NOT OK");
                }
            })
            .then(function (data) {
                let joke = data.value.joke;
                $('#backCard').html(joke);
            })
            .catch((error) => {
                console.error("FETCH ERROR:", error);
            });
    });

    $('#flipToFront').on('click', function () {
        $('.card').removeClass('flipped');
    });
})