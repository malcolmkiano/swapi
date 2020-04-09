const Service = require('./service');

class FilmsService extends Service {
  constructor(table_name) {
    super(table_name);
  }
  
  // the most complex query I've written in my life.
  getAllItems(db, query){
    return super.getAllItems(db, query)
      .select(
        'films.*',
        db.raw(`ARRAY(SELECT name
                FROM unnest(characters) WITH ORDINALITY a(id, i)
                JOIN people USING (id)) AS characters`),
        db.raw(`ARRAY(SELECT name
                FROM unnest(planets) WITH ORDINALITY a(id, i)
                JOIN planets USING (id)) AS planets`),
        db.raw(`ARRAY(SELECT name
                FROM unnest(vehicles) WITH ORDINALITY a(id, i)
                JOIN transport USING (id)) AS vehicles`),
        db.raw(`ARRAY(SELECT name
                FROM unnest(starships) WITH ORDINALITY a(id, i)
                JOIN transport USING (id)) AS starships`),
        db.raw(`ARRAY(SELECT name
                FROM unnest(species) WITH ORDINALITY a(id, i)
                JOIN species USING (id)) AS species`));
  }

}

module.exports = new FilmsService('films');