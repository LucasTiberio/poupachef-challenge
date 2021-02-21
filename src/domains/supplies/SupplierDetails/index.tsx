import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import api from '@poupachef/api';
import Modal from '@poupachef/ui/modal';
import { getTokenAuthentication } from '@poupachef/helpers/authentication';
import { SUPPLIER_LISTING_PATH } from '@poupachef/routing/routes/logged';

import { Container, DoubleInformationBox } from './style';
import InformationBox from './components/InformationBox';
import ModalEditInformation from './components/ModalEditInformation';

const SupplierDetails = (): JSX.Element => {
  const history = useHistory();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalInformation, setModalInformation] = useState<string>('');
  const [supplier, setSupplier] = useState<SupplierI>({
    address: '',
    city: '',
    cnpj: '',
    complement: '',
    createdAt: '',
    name: '',
    neighborhood: '',
    number: '',
    ownerEmail: '',
    ownerName: '',
    ownerPhoneNumber: '',
    phoneNumber: '',
    publicId: '',
    state: '',
    updatedAt: '',
    zipCode: '',
  });

  const informationValues = useMemo(() => {
    return {
      supplierInformations: [
        { key: 'publicId', label: 'ID', value: supplier?.publicId },
        { key: 'phoneNumber', label: 'Número', value: supplier?.phoneNumber },
        { key: 'name', label: 'Nome', value: supplier?.name },
        { key: 'cnpj', label: 'CNPJ', value: supplier?.cnpj },
      ],
      localizationInformations: [
        { key: 'state', label: 'Estado', value: supplier?.state },
        { key: 'city', label: 'Cidade', value: supplier?.city },
        { key: 'zipCode', label: 'CEP', value: supplier?.zipCode },
        { key: 'neighborhood', label: 'Bairro', value: supplier?.neighborhood },
        { key: 'address', label: 'Rua', value: supplier?.address },
        { key: 'number', label: 'Logradouro', value: supplier?.number },
        { key: 'complement', label: 'Complemento', value: supplier?.complement },
      ],
      supplierOwnerDetails: [
        { key: 'ownerName', label: 'Nome', value: supplier?.ownerName },
        { key: 'ownerEmail', label: 'Email', value: supplier?.ownerEmail },
        { key: 'ownerPhoneNumber', label: 'Celular', value: supplier?.ownerPhoneNumber },
      ],
    };
  }, [supplier]);

  const params: {
    supplierPublicId: string;
  } = useParams();

  const supplierId = params.supplierPublicId;
  const token = getTokenAuthentication();

  useEffect(() => {
    api
      .get(`/suppliers/${supplierId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(({ data }) => {
        delete data.createdAt;
        delete data.updatedAt;
        setSupplier(data);
      })
      .catch(() => history.push(SUPPLIER_LISTING_PATH));
  }, []);

  if (Object.values(supplier).some(informations => informations === '')) return <h1>loading</h1>;

  const handleOpen = (informationKey: string) => {
    setModalOpen(true);
    setModalInformation(informationKey);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <Modal title="Editar informações" open={modalOpen} closeModal={handleCloseModal}>
        <ModalEditInformation
          supplier={supplier}
          setSupplier={setSupplier}
          closeModal={handleCloseModal}
          selectedInformation={modalInformation}
          informationValues={informationValues}
        />
      </Modal>

      <Container>
        <InformationBox
          title="Informações da distribuidora"
          values={informationValues.supplierInformations}
          onClickEdit={(): void => handleOpen('supplierInformations')}
        />
        <DoubleInformationBox>
          <InformationBox
            title="Detalhes da localização"
            values={informationValues.localizationInformations}
            onClickEdit={(): void => handleOpen('localizationInformations')}
          />
          <InformationBox
            title="Dados do fornecedor"
            values={informationValues.supplierOwnerDetails}
            onClickEdit={(): void => handleOpen('supplierOwnerDetails')}
          />
        </DoubleInformationBox>
      </Container>
    </>
  );
};

export default SupplierDetails;
