const Service = require('./service');

class TransportService extends Service {
  constructor(table_name) {
    super(table_name);
  }

  getAllItems(db, query){
    return super.getAllItems(db, query)
      .select(
        `${this.table}.*`,
        'transport.*',
        db.raw(`ARRAY(SELECT name
                FROM unnest(pilots) WITH ORDINALITY a(id, i)
                JOIN people USING (id)) AS pilots`))
      .join('transport', `${this.table}.transport_id`, 'transport.id');
  }

}

module.exports = TransportService;