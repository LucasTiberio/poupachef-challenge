import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Create } from '@material-ui/icons';

import api from '@poupachef/api';

import { getTokenAuthentication } from '@poupachef/helpers/authentication';
import { SUPPLIER_LISTING_PATH } from '@poupachef/routing/routes/logged';
import { Container } from './style';

interface SupplieListItemI {
  publicId: string;
  name: string;
  cnpj: string;
  phoneNumber: string;
  ownerName: string;
}

const SupplierList = (): JSX.Element => {
  const history = useHistory();
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

  const handleGoToDetails = (supplierId: string): void =>
    history.push(`${SUPPLIER_LISTING_PATH}/${supplierId}`);

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
          {supplierList.map((supplie, i) => {
            const onClick = (): void => handleGoToDetails(supplie.publicId);
            return (
              <tr key={i}>
                <td>{supplie.name}</td>
                <td>{supplie.ownerName}</td>
                <td>{supplie.cnpj}</td>
                <td>{supplie.phoneNumber}</td>
                <td onClick={onClick} onKeyDown={onClick} role="button">
                  <Create />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Container>
  );
};

export default SupplierList;
