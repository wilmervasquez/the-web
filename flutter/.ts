type data = "bool" | "char";

function pol(type: data) {}

class PostgresSQL {
  static createTable(nameTable: string, {}) {}
}

PostgresSQL.createTable("links_webs", {
  id: {
    type: "uuid",
    primaryKey: true,
    default: 'gener_uuid()'
  },
  name: {
    type: "string",
    default: null,
  },

});

const g = [{
  patterns: 'const',
  include:[{
    patterns:' '
  }]
}]
