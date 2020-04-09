const Service = require('./service');

class PeopleService extends Service {
  constructor(table_name) {
    super(table_name);
  }

  getAllItems(db, query){
    return super.getAllItems(db, query)
      .select('people.*', 'planets.name as homeworld')
      .join('planets', 'people.homeworld', 'planets.id');
  }

}

module.exports = new PeopleService('people');