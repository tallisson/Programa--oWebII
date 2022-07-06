class TableData {  
  constructor(datas = []) {
    this._datas = datas;
  }

  add(newData) {
    this._datas.push(newData);
  }
  get() {
    return this._datas;
  }

  toString() {
    return this._datas;
  }
}

export default TableData;