import db from './models/index.mjs';

// import your controllers here
import initDrummersController from './controllers/drummers.mjs';
import initReservationsController from './controllers/reservations.mjs';
// import initReservationController from './controllers/reservations.mjs';

export default function bindRoutes(app) {
  // initialize the controller functions here
  // pass in the db for all callbacks
  const drummersController = initDrummersController(db);
  const reservationsController = initReservationsController(db);

  // define your route matchers here using app
  app.get('/', drummersController.renderAll);
  app.get('/drummer/:id', drummersController.renderOne);
  app.get('/reservations/:id', reservationsController.renderReservations);
  app.get('/reservation/:id', reservationsController.renderForm);
  app.post('/reservation/:id', reservationsController.submitReservation);
}
