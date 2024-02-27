const carousel = document.getElementById('carousel');
let currentIndex = 0;

function showImage(index) {
  const images = carousel.querySelectorAll('img');
  for (let i = 0; i < images.length; i++) {
    images[i].style.display = 'none';
  }
  images[index].style.display = 'block';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % carousel.childElementCount;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + carousel.childElementCount) % carousel.childElementCount;
  showImage(currentIndex);
}

const previewImages = document.querySelectorAll('.preview-images img');
previewImages.forEach((img, index) => {
  img.addEventListener('click', () => {
    currentIndex = index;
    showImage(currentIndex);
  });
});

showImage(currentIndex);

function showRelatedImage(index) {
  const relatedImages = document.querySelectorAll('.related-item img');
  showImage(index);
}

const relatedCarousel = document.querySelector('.related-carousel');
let relatedIndex = 0;

function showRelated(index) {
  const items = relatedCarousel.querySelectorAll('.related-item');
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = 'block';
  }
}

function nextRelated() {
  relatedIndex = (relatedIndex + 1) % relatedCarousel.childElementCount;
  showRelated(relatedIndex);
}

function prevRelated() {
  relatedIndex = (relatedIndex - 1 + relatedCarousel.childElementCount) % relatedCarousel.childElementCount;
  showRelated(relatedIndex);
}

showRelated(relatedIndex);
