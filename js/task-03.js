const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imagesHtmlMarkup = images.reduce((result, item) => {
  const template = `<li><img src="${item.url}" alt="${item.alt}" width="320" height="240"></li>`;

  return result + template;
}, "");

const galleryRef = document.querySelector(".gallery");

galleryRef.insertAdjacentHTML("beforeend", imagesHtmlMarkup);

const headCSS = `
<style>
.gallery {
  list-style-type: none;
  display: flex;
  gap: 20px;
}
</style>`;

document.head.insertAdjacentHTML("beforeend", headCSS);
