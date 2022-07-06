import TableData from './TableData';

class TableView {
  constructor(cols, tbody) {    
    this._cols = cols;
    this._tbody = tbody;
    this._datas = new TableData();    
  }

  get cols() {
    return this._cols;
  }
  set cols(cols) {
    this._cols = cols
  }

  addRow(newData) {
    datas.add
  }
}

export default TableView;