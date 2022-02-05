// db is an argument to this function so
// that we can make db queries inside
export default function initReservationsController(db) {
  const index = (request, response) => {
    db.Reservation.findAll()
      .then((reservations) => {
        response.render('/index', { reservations });
      })
      .catch((error) => console.log(error));
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    index,
  };
}
