// este import existe solo para que tsc lo tome y lo copie a /build
import "./contacts.json";
import * as jsonfile from "jsonfile";
// si no estuviera este import typescript no se da cuenta que lo necesitamos
// ya que para escribir o leer al archivo usamos la libreria "jsonfile"

class Contact {
  id: number = 0;
  name: string = "";
}

class ContactsCollection {
  data: Contact[]=[];
load(){
const resultado = jsonfile.readFileSync("constacts.json");

}


}
export { ContactsCollection };
