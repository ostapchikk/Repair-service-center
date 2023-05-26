function mapScript() {
   let center = [55.71212396825075,37.657562609786964];

   function inint(){
      let map = new ymaps.Map('footer__map', {
         center: center,
         zoom: 17,
      })

      let placeMark = new ymaps.Placemark (center,{}, {
         iconLayout: 'default#image',
         iconImageHref: '../../img/header/map-icon.svg',
         iconImageSize: [40, 40],
         iconImageOffset: [-30, -30]
      });
      
      map.behaviors.disable('scrollZoom')
      map.geoObjects.add(placeMark);
   }

   ymaps.ready(inint)
}

export default mapScript;