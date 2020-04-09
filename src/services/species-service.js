const Service = require('./service');

class SpeciesService extends Service {
  constructor(table_name) {
    super(table_name);
  }
  
  getAllItems(db, query, page){
    return super.getAllItems(db, query, page)
      .select(
        'species.*',
        db.raw(`ARRAY(SELECT name
                FROM unnest(people) WITH ORDINALITY a(id, i)
                JOIN people USING (id)) AS people`));
  }

}

module.exports = new SpeciesService('species');