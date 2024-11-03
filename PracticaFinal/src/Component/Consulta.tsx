import React, { useState, useEffect } from "react";
import axios from "axios";
import { Datos } from "./Interface/Datos";

const ConsultarDato = () => {
  const [DataObtenida, setDato] = useState<Datos[]>([]);
  const [searchId, setSearchId] = useState("");

  const Consultar = () => {
    console.log(searchId);
    axios
      .get<Datos>(`/api/blog/${searchId}`)
      .then((response) => {
        setDato([response.data]);
        console.log([response.data]);
      })
      .catch((error) => {
        console.error("Error al obtener los datos:", error);
      });
  };
  return (
    <div>
      <h1>Consulta de Datos</h1>

      <div>
        <input
          type="text"
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
        />
        <button onClick={Consultar}>Consultar</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>content</th>
            <th>author</th>
            <th>date</th>
            <th>category</th>
          </tr>
        </thead>
        <tbody>
          {DataObtenida.map((dato) => (
            <tr key={dato.id}>
              <td>{dato.title}</td>
              <td>{dato.content}</td>
              <td>{dato.author}</td>
              <td>{dato.date}</td>
              <td>{dato.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ConsultarDato;