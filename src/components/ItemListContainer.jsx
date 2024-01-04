import React, { useEffect, useState } from 'react';
import { db } from '../Firebase';

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Datos de Firestore
    const fetchData = async () => {
      try {
        const itemsCollection = await db.collection('Remeras').get();
        const data = itemsCollection.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(data);
      } catch (error) {
        console.error('Error fetching data from Firestore: ', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-5">
      <div className="alert alert-primary" role="alert">
        {greeting}
      </div>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <strong>{item.Nombre}</strong> - {item.Descripcion} - ${item.Precio}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;
