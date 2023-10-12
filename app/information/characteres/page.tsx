import Navigator from "@/components/Navigator";
import { getCharacteres } from "./service";
import { Routes } from "@/models/routes.model";

async function fetchCharacteres() {
  return await getCharacteres();
}

async function Characteres() {
  const characteres = await fetchCharacteres();
  return (
    <>

        { characteres.map((character) => (
          <div className="card" key={character.id}>
            {character.name}
          </div>
        )) }
    </>
  )
}

export default Characteres;
