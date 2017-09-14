const connectTo = function(port = 27017, dbname = 'test') {
    // if (!port) {
    //   port = 27017;
    // }
    // if (!dbname) {
    //   dbname = 'test';
    // }m
    db = connect(`localhost:${port}/${dbname}`);
    return db;
};

connectTo();
