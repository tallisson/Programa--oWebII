function* idMaker(){
  let id = 1;
  while(true)
      yield id++;
}
let gen = idMaker();

class Contact {
  constructor(nome, whatsapp, email = '', endereco) {
    this._id = gen.next().value;
    this._nome = nome;
    this._whatsapp = whatsapp;
    this._email = email;
    this._endereco = endereco;
  }

  get id() {
    return this._id;
  }

  get nome() {
    return this._nome;
  }
  set nome(nome) {
    this._nome = nome;
  }

  get whatsapp() {
    return this._whatsapp;
  }
  set whatsapp(whatsapp) {
    this._whatsapp = whatsapp;
  }

  get email() {
    return this._email;
  }
  set email(email) {
    this._email = email;
  }

  get endereco() {
    return this._endereco;
  }
  set endereco(endereco) {
    this._endereco = endereco;
  }
}

export default Contact;