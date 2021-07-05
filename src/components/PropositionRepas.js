/** @format */

import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import { useHistory, useParams } from 'react-router-dom';
import Select from 'react-select';
import { toast } from 'react-toastify';
import {
  Button,
  ButtonToggle,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Label,
  Row,
  Spinner,
  Table,
} from 'reactstrap';
import { addPlatToStore, getAliments } from '../helpers/classeHelper';

const regionsCameroun = [
  {
    label: 'EXTREME_NORD',
    value: 'EXTREME_NORD',
  },
  {
    label: 'NORD',
    value: 'NORD',
  },
  {
    label: 'CENTRE',
    value: 'CENTRE',
  },
  {
    label: 'ADAMAOUO',
    value: 'ADAMAOUA',
  },
];

export default function PropositionRepas(props) {
  let { slug } = useParams();

  const history = useHistory();

  const [name, setName] = useState('');
  const [labelFR, setLabelFR] = useState('');
  const [labelEN, setLabelEN] = useState('');
  const [alimentPlats, setAlimentPlats] = useState([]);
  const [comment, setComment] = useState('');
  const [regions, setRegions] = useState([]);

  const [classeIndividuals, setClasseIndividuals] = useState({
    total: null,
    records: [],
  });

  useEffect(() => {
    mutation.mutate();
  }, []);

  const mutation = useMutation(() => getAliments(), {
    onSuccess: (response) => {
      setClasseIndividuals({
        ...classeIndividuals,
        total: response?.data?.total,
        records: response?.data?.records,
      });
    },
  });

  const addPlat = useMutation((data) => addPlatToStore(data), {
    onSuccess: (response) => {
      toast.success('Plat Ajoute');
      clearInput();
    },
  });

  const clearInput = () => {
    setName('');
    setLabelFR('');
    setLabelEN('');
    setAlimentPlats();
    setRegions();
    setComment('');
  };

  const onChangeAliment = (data) => {
    if (data) {
      data.map((item) => {
        let splitName = item.entity.split('#')[1];
        let plat = `food:${splitName}`;
        // controler si pla presente daans le tableau
        setAlimentPlats([...alimentPlats, plat]);
      });
    } else {
      setAlimentPlats([]);
    }
  };

  const onChangeRegion = (data) => {
    if (data) {
      data.map((item) => {
        let region = `food:${item.value}`;
        // controler si substance presente daans le tableau
        setRegions([...regions, region]);
      });
    } else {
      setRegions([]);
    }
  };

  return (
    <>
      <Container className='mt-2'>
        <ButtonToggle
          size='sm'
          onClick={() => history.goBack()}
          color='secondary'
        >
          Retour
        </ButtonToggle>
        <hr />

        <Row>
          <Col md='6'>
            <Form>
              <div>
                <h3>Selectionner les regions </h3>

                <FormGroup>
                  <Label for='comment'>Region du plat</Label>
                  <Select
                    onChange={onChangeRegion}
                    isMulti
                    name='regions'
                    options={regionsCameroun}
                    className='basic-multi-select'
                    classNamePrefix='select'
                  />
                  <FormFeedback></FormFeedback>
                </FormGroup>

                {addPlat.isLoading ? (
                  <Spinner />
                ) : (
                  <Button
                    onClick={() =>
                      addPlat.mutate({
                        name,
                        labelEN,
                        labelFR,
                        comment,
                        regions,
                        alimentPlats,
                      })
                    }
                    color='primary'
                  >
                    Recherche les plats
                  </Button>
                )}
              </div>
            </Form>
          </Col>
          <Col md='6'>
            <Table bordered>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Noms du Plat (Mets)</th>
                  <th>Region d'Origine</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>1</th>
                  <td>CousCous Gombo</td>
                  <td>EST</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    </>
  );
}
