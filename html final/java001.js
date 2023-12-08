function startSlideShow() {
    const monitorizareSection = document.querySelector('.monitorizare');
    const monitorizareImage = document.querySelector('.monitorizare img');

    // Array cu adresele imaginilor pentru slide-show
    const imaginiSlideShow = [
        'Screen Shot 2023-11-02 at 7.47.04 PM.jpg',
        'snoop dogg.jpg',
        'Screen Shot 2019-03-25 at 8.47.12 PM.jpg'
    ];

    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % imaginiSlideShow.length;
        monitorizareImage.src = imaginiSlideShow[currentIndex];
    }, 3000);
}
