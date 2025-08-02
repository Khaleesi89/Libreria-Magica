import React from "react";
import db from "../../db/db";
import { collection, addDoc } from "firebase/firestore";

//SE CREO PARA CARGAR EL JSON EN LA BASE DE DATOS Y FUNCIONÓ
function JsonUploader() {
  const handleFileUpload = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const text = await file.text();
    let jsonData;

    try {
      jsonData = JSON.parse(text);
    } catch (error) {
      alert("JSON inválido");
      return;
    }

    if (!Array.isArray(jsonData)) {
      alert("El JSON debe ser un array de objetos");
      return;
    }

    for (const item of jsonData) {
      try {
        await addDoc(collection(db, "products"), item);
        console.log("Documento agregado:", item);
      } catch (error) {
        console.error("Error al agregar documento:", error);
      }
    }

    alert("Carga completa");
  };

  return (
    <div>
      <h2>Subir JSON a Firestore</h2>
      <input type="file" accept=".json" onChange={handleFileUpload} />
    </div>
  );
}

export default JsonUploader;
