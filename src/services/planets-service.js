const Service = require('./service');

class PlanetsService extends Service {
  constructor(table_name) {
    super(table_name);
  }
  
  getAllItems(db, query){
    return super.getAllItems(db, query)
      .select(
        'planets.*',
        db.raw(`ARRAY(SELECT name
                FROM people
                WHERE people.homeworld = planets.id) AS residents`));
  }

}

module.exports = new PlanetsService('planets');