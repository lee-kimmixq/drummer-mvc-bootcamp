// db is an argument to this function so
// that we can make db queries inside
export default function initReservationsController(db) {
  const renderReservations = async (req, res) => {
    try {
      const drummer = await db.Drummer.findOne({ where: { id: req.params.id } });
      if (!drummer) throw new Error('no drummer, invalid id');
      const reservations = await drummer.getReservations();
      res.render('reservations/renderReservations', { reservations });
    } catch (error) {
      console.log(error);
    }
  };

  const renderForm = async (req, res) => {
    try {
      const drummer = await db.Drummer.findOne({ where: { id: req.params.id } });
      if (!drummer) throw new Error('no drummer, invalid id');
      res.render('reservations/createReservation', { drummer });
    } catch (error) {
      console.log(error);
    }
  };

  const submitReservation = async (req, res) => {
    try {
      await db.Reservation.create({
        drummer_id: req.params.id,
        date: req.body.date,
        created_at: Date.now(),
        updated_at: Date.now(),
      });
      res.redirect(`/reservations/${req.params.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    renderReservations, renderForm, submitReservation,
  };
}
