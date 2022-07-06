class DAO {
  constructor(key) {
    this._key = key;
  }

  set key(key) {
    this._key = key;
  }
  
  add(item) {
    localStorage.setItem(this._key, JSON.stringify(item));
  }
  get() {
    return JSON.parse(localStorage.getItem(this._key));
  }
  update(item) {
    localStorage.setItem(key, item);
  }
  remove() {
    localStorage.removeItem(this._key);
  }
}

export default DAO;