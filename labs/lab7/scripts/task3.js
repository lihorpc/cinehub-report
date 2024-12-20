window.addEventListener('click', function(event) {
    const clickedElement = event.target;
    const isClickedInPlace = clickedElement.id === 'place';

    console.log('Is clicked in green block:', isClickedInPlace);
}); 