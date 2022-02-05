// db is an argument to this function so
// that we can make db queries inside
export default function initDrummersController(db) {
  const renderAll = (request, response) => {
    db.Drummer.findAll()
      .then((drummers) => {
        // means look for views/drummers/renderAll.ejs (renderAll.ejs inside drummers folder)
        response.render('drummers/renderAll', { drummers });
      })
      .catch((error) => console.log(error));
  };

  // renderOne

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    renderAll,
  };
}
