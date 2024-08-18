// // document.addEventListener('contextmenu', function(event) {
// //   event.preventDefault();
// // });



//   const apiKey = `b402078b6c7440a6a78b64cb8131697a`;
//   const url1=`https://api.rawg.io/api/genres?key=${apiKey}`;
//   const url = `https://api.rawg.io/api/games?key=${apiKey}`;
//   const todaydate=`2024-16-08`;
//   const todaysURL=`https://api.rawg.io/api/games?key=${apiKey}&page_size=6&dates=2020-12-12,2024-01-01`;



//   // const img1=https://media.rawg.io/media/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg;
//   // const img2=https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg;
//   // const img3=https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg;
  
//   // const img4=https://media.rawg.io/media/games/e1f/e1ffbeb1bac25b19749ad285ca29e158.jpg;
//   // const img5=https://media.rawg.io/media/games/b29/b294fdd866dcdb643e7bab370a552855.jpg;
//   // const img6=https://media.rawg.io/media/games/cd3/cd3c9c7d3e95cb1608fd6250f1b90b7a.jpg;


//   //   fetch(todaysURL)
//   //   .then(response => {
//   //     if (!response.ok) {
//   //       throw new Error(`HTTP error! Status: ${response.status}`);
//   //     }
//   //     return response.json();
//   //   })
//   //   .then(data =>addDataSwiper(data))
//   //   .catch(error => {
//   //     console.error('Error fetching data:', error);
//   //   });

//   // const swiperslides=document.querySelector(".local-slider-container .swiper-container .swiper-wrapper");

//   //  function addDataSwiper(data){  
//   //    data.results.forEach(slide => {
//   //     const div=document.createElement('div');
//   //     div.classList.add("swiper-slide");
//   //     console.log(slide.background_image);
//   //    div.style.backgroundImage = `url(${slide.background_image})`;
//   //    div.style.backgroundPosition = "center";
//   //    div.style.backgroundSize= "cover";
//   //    swiperslides.appendChild(div);
//   //   })
//   // }
//   var swiper = new Swiper('.swiper-container', {
//     loop: true,
//     autoplay: {
//       delay: 5000,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//     pagination: {
//       el: ".swiper-pagination",
//       dynamicBullets: true,
//     },
//   });








//   // Fetch data from RAWG API
//   fetch(url)
//     .then(response => {
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
//       return response.json();
//     })
//     .then(data => showData(data))
//     .catch(error => {
//       console.error('Error fetching data:', error);
//     });
  
//   const wrapper = document.querySelector(".local-list-row");
  
//   function showData(data) {
//     data.results.forEach(game => {
//             const gameCard = document.createElement("div");
            
//             const gameinfo=document.createElement("div");
//             const span1=document.createElement("span");
//             span1.className="gamename"
//             const span2=document.createElement("span");
//             const span3=document.createElement("span");
//             span1.textContent=game.name;
//             span2.textContent = `rating: ${(Math.round(game.rating * 200) / 100).toFixed(1)}`;
//             span3.textContent=`Genre: ${game.genres[0].name} ${game.genres[1]?`| ${game.genres[1].name}`:''}`;
//             const starImg = document.createElement("img");
//             starImg.src = "assests/star.svg";
//             starImg.alt = "Star";
//             starImg.className = "star-icon";
//             span2.appendChild(starImg);
//             gameinfo.appendChild(span1);
//             gameinfo.appendChild(span2);
//             gameinfo.appendChild(span3);

//             gameCard.className = "local-list-card";
//             gameinfo.className="gameinfo";
//             gameCard.appendChild(gameinfo);

//             gameCard.style.backgroundImage = `url(${game.background_image})`;
//             wrapper.appendChild(gameCard);
//           });
//   }
  

//  let lastindex=-1;
//   const sidebargenre=document.querySelectorAll(".local-sidebar ul li");
//   sidebargenre.forEach(side => {
//     side.addEventListener("click", () => {
//         if(lastindex!=-1){
//             sidebargenre[lastindex].classList.remove("genre-active");
//         }
//         side.classList.add("genre-active");
//         lastindex=side.getAttribute('index');
//     })
//   });




  const btn=document.querySelector(".genre-toggler");
  const genresidebar=document.querySelector(".local-sidebar");
  btn.classList.add("active");
  genresidebar.classList.add("active");


  btn.addEventListener("click", () => {
    if(btn.classList.contains("active")){
      btn.classList.remove("active");
      genresidebar.classList.remove('active');
    }
    else{
    btn.classList.add("active");
    genresidebar.classList.add("active");
    }
  })
