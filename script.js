let currentCircle = 1;

setTimeout(() => {
    document.querySelectorAll('.circle').forEach(circle => {
        circle.style.color = 'white';  //Change text colour to white to hide order
    });
}, 5000);

document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', function () {
        const circleId = parseInt(this.id.replace('circle', ''));

        if (circleId === currentCircle) {
            this.style.display = 'none';  // Hide circle
            currentCircle++;

            if (currentCircle > 10) {
                alert('Well done!');
            }
        } else {
            //alert(`Click circle ${currentCircle} next!`);
            alert(`Wrong! Game Over!`);
        }
    });
});