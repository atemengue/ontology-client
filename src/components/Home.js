/** @format */

import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useMutation, useQuery } from 'react-query';
import Select from 'react-select';
import SlidingPane from 'react-sliding-pane';
import { Col, Container, FormGroup, Row, Spinner } from 'reactstrap';
import { getClasse, getClasses } from '../helpers/classeHelper';
import '../sliding-pane.css';
import Result from './Result';

export default function Home(props) {
  const [selectedOption, setSelectedOption] = useState(null);

  const { isLoading, data } = useQuery('classeList', () => getClasses());
  const [classeIndividuals, setClasseIndividuals] = useState({
    total: null,
    records: [],
  });
  const [className, setclassName] = useState(null);
  const [isShowIntro, setIsShowIntro] = useState(true);

  const [panState, setPanState] = useState({
    isPaneOpen: true,
    isPaneOpenLeft: false,
  });

  const mutation = useMutation((className) => getClasse(className), {
    onSuccess: (response) => {
      setClasseIndividuals({
        ...classeIndividuals,
        total: response?.data?.total,
        records: response?.data?.records,
      });
    },
  });

  const OnchangeSelected = (data) => {
    if (data) {
      setIsShowIntro(false);
      setclassName(data.label);
      mutation.mutate(data.label);
    } else {
      setIsShowIntro(true);
    }
  };

  return (
    <>
      <Row>
        <Col>
          <div className='Search'>
            <div>
              <div className='SearchSecond'>
                <span className='SearchSpan'>
                  <FaSearch />
                </span>
                <input
                  placeholder='Ontology Search'
                  className='SearchInput'
                  type='text'
                />
              </div>
              <div className='selectClass'>
                <FormGroup>
                  <Select
                    isClearable
                    isLoading={isLoading}
                    placeholder='Selectionner une classe'
                    defaultValue={selectedOption}
                    onChange={OnchangeSelected}
                    options={data?.data?.records}
                  />
                </FormGroup>
              </div>
            </div>
          </div>
        </Col>
      </Row>
      <Row className='mt-3'>
        <Container>
          <Col xs='12'>
            {isShowIntro && (
              <div className='width: 60%'>
                <h2>
                  Welcome to BioPortal, the world's most comprehensive
                  repository
                </h2>
                <p>
                  biomedical ontologies Doorzoek vergaderstukken van gemeenten
                  en provincies Met deze app zoek je door de openbare
                  vergaderingen, agendapunten, moties en documenten van meer dan
                  140 deelnemende gemeenten en zes provincies.
                </p>
                <p>
                  Door wie? OpenBesluitvorming.nl is een initiatief van Argu om
                  data van gemeenten, provincies en andere overheden samen te
                  brengen in één zoekomgeving. Zowel deze zoekmachine als de
                  server zijn open source. Vanuit het actieplan open overheid
                  werkt het Ministerie van Binnenlandse Zaken aan het
                  transparanter maken van overheden. Actiepunt 1 uit dit plan is
                  het openen van besluitvormingsdata. De Open State Foundation
                  is samen
                </p>
                <p>
                  met VNG Realisatie het project Open Raadsinformatie gestart om
                  data uit gemeenteraden te verzamelen. Voor de provincies is
                  Open Stateninformatie gestart. Argu heeft als missie om
                  besluitvorming zo open en toegankelijk mogelijk te maken. Als
                  technisch ontwikkelaar en beheerder raakte Argu betrokken bij
                  deze projecten.
                </p>
              </div>
            )}

            <div>
              {mutation.isLoading ? (
                <Spinner size='sm' color='secondary' />
              ) : (
                <div>
                  {mutation.isError ? (
                    <div>An error occurred: {mutation.error.message}</div>
                  ) : null}

                  {mutation.isSuccess ? (
                    <div>
                      {className && (
                        <h2>
                          {className}: {classeIndividuals.total}
                        </h2>
                      )}
                      {classeIndividuals.records.map((classeItem, index) => {
                        return (
                          <Result
                            key={index}
                            title={classeItem.label}
                            classe={className}
                            description={classeItem.comment}
                            onClick={() =>
                              setPanState({
                                ...panState,
                                isPaneOpen: true,
                              })
                            }
                          />
                        );
                      })}
                    </div>
                  ) : null}
                </div>
              )}
            </div>
            <SlidingPane
              width='50%'
              className='some-custom-class'
              overlayClassName='some-custom-overlay-class'
              isOpen={panState.isPaneOpen}
              title='About: Aliment'
              subtitle='Optional subtitle.'
              onRequestClose={() => {
                // triggered on "<" on left top click or on outside click
                setPanState({ ...panState, isPaneOpen: false });
              }}
            >
              <div>And I am pane content. BTW, what rocks?</div>
              <br />
            </SlidingPane>
            <SlidingPane
              closeIcon={<div>Some div containing custom close icon.</div>}
              isOpen={panState.isPaneOpenLeft}
              title='Hey, it is optional pane title.  I can be React component too.'
              from='left'
              width='200px'
              onRequestClose={() => {
                // triggered on "<" on left top click or on outside click
                setPanState({ ...panState, isPaneOpen: false });
              }}
            >
              <div>And I am pane content on left.</div>
            </SlidingPane>
          </Col>
        </Container>
      </Row>
    </>
  );
}
