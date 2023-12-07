// odottaa että html dokumentti lataa ennen koodin suorittamista
document.addEventListener('DOMContentLoaded', function () {
  // Hae tämänhetkinen päivä
  const today = new Date().getDate();

  // hakee kaikki kaöenterin luukut joilla on luokka door
  const calendarDoors = document.querySelectorAll('.door');

    // käyläpi kaikki luukut
    calendarDoors.forEach(function (door, index) {
      // lisää tapahtumankäsittelijän luukuille
      door.addEventListener('click', function () {
        doorClickHandler(index, door);
      });
  
      // jos luukku meenneessä päiväs lisää locked luokka
      if (index + 1 < today) {
        door.classList.add('locked');
      } 
      // Jjos luukku tänä kuluvana päivänä lisää current-day luokka 
      else if (index + 1 === today) {
        door.classList.add('current-day');
      }
    });
    
  // Käsittelijäfunktio luukun klikkaukselle
  function doorClickHandler(index, door) {
    // katsoo onko luukku lukittu
    if (door.classList.contains('locked')) {
      alert('Tätä luukkua ei voi vielä avata.');
    } 
    // katsoo onko luukku jo avattu
    else if (door.classList.contains('opened')) {
      alert('Tämä luukku on jo avattu.');
    } 
    // katsoo onko luukku tältä päivältä
    else if (door.classList.contains('current-day')) {
      alert('Onneksi olkoon! Avattu luukku ' + (index + 1));
      // poistaa currentday luokan ja lisää opened luokan avatulle 
      door.classList.remove('current-day');
      door.classList.add('opened');
    }
  }


});
