const fs = require('fs');

class Journal {
  constructor() {
    this.entries = {};
    this.count = 0;
  }

  addEntry(text) {
    let c = ++this.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join('\n');
  }

  // save(filename)
  // {
  //   fs.writeFileSync(filename, this.toString());
  // }
  //
  // load(filename)
  // {
  //   //
  // }
  //
  // loadFromUrl(url)
  // {
  //   //
  // }
}

class PersistenceManager {
  preprocess(j) {
    //
  }

  saveToFile(journal, filename) {
    fs.writeFileSync(filename, journal.toString());
  }
}

let j = new Journal();
j.addEntry('I cried today.');
j.addEntry('I ate a bug.');

console.log(j.toString());

let p = new PersistenceManager();
// let filename = 'c:/temp/journal.txt';
// p.saveToFile(j, filename);

// separation of concerns
