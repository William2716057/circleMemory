let currentCircle = 1;

document.querySelectorAll('.circle').forEach(circle => {
    circle.addEventListener('click', function () {
        const circleId = parseInt(this.id.replace('circle', ''));

        if (circleId === currentCircle) {
            this.style.display = 'none';  // Hide the circle
            currentCircle++;

            if (currentCircle > 10) {
                alert('Congratulations! You clicked all the circles in the correct order.');
            }
        } else {
            alert(`Click circle ${currentCircle} next!`);
        }
    });
});