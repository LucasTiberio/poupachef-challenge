import React, { useEffect, useState } from 'react';

import api from '@poupachef/api';

import { getTokenAuthentication } from '@poupachef/helpers/authentication';
import { Container } from './style';

interface SupplieListItemI {
  publicId: string;
  name: string;
  cnpj: string;
  phoneNumber: string;
  ownerName: string;
}

const SupplierList = (): JSX.Element => {
  const [supplierList, setSupplierList] = useState<SupplieListItemI[]>([]);

  const token = getTokenAuthentication();

  useEffect(() => {
    api
      .get('/suppliers', {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        setSupplierList(data);
      });
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <td>Distribuidora</td>
            <td>Distribuidor</td>
            <td>CNPJ</td>
            <td>Número</td>
            <td />
            {/** /\ EDIT CELL */}
          </tr>
        </thead>

        <tbody>
          {supplierList.map((supplie, i) => (
            <tr key={i}>
              <td>{supplie.name}</td>
              <td>{supplie.ownerName}</td>
              <td>{supplie.cnpj}</td>
              <td>{supplie.phoneNumber}</td>
              <td>Edit</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

export default SupplierList;
