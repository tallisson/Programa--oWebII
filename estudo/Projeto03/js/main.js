import Contact from "./Contact.js";
import DAO from "./DAO.js";
import TableData from "./TableData.js";

const c1 = new Contact('Thiago', '(99)98123-4567', 'thi@gmail.com', 'Rua A');
const c2 = new Contact('Thiago', '(99)98123-4567', 'thi@gmail.com', 'Rua A');
const td = new TableData();
td.add(c1)
td.add(c2);

const dao = new DAO('contatos');
const tdString = td.toString();

dao.add(tdString);

const datas = dao.get();
const td1 = new TableData(datas);
console.log(td1);
