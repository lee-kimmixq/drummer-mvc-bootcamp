// db is an argument to this function so
// that we can make db queries inside
export default function initDrummersController(db) {
  const renderAll = async (req, res) => {
    try {
      const drummers = await db.Drummer.findAll();
      if (!drummers) throw new Error('no drummers');
      res.render('drummers/renderAll', { drummers });
    } catch (error) {
      console.log(error);
    }
  };

  const renderOne = async (req, res) => {
    try {
      const drummer = await db.Drummer.findOne({ where: { id: req.params.id } });
      if (!drummer) throw new Error('no drummer, invalid id');
      res.render('drummers/renderOne', { drummer });
    } catch (error) {
      console.log(error);
    }
  };

  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    renderAll, renderOne,
  };
}
