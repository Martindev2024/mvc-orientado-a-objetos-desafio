import { ContactsController, ContactsControllerOptions } from "./controllers";
import { ContactsCollection } from "./models";
function parseaParams(argv): ContactsControllerOptions {
  // parsear el argv usando https://www.npmjs.com/package/minimist
  return {
    action: null,
    params: null,
  };
}

function main() {
let Ccll= new ContactsCollection();

const resultado = Ccll.load()
console.log(resultado);

}

main();
