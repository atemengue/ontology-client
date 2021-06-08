/** @format */

import {
  Button,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
} from 'reactstrap';

export default function Enrichir() {
  return (
    <>
      <Container className='mt-2'>
        <Form>
          <div>
            <h3>Ajouter un aliment</h3>
            <FormGroup>
              <Label for='exampleEmail'>Nom aliment</Label>
              <Input />
              <FormFeedback>You will not be able to see this</FormFeedback>
              {/* <FormText>Example help text that remains unchanged.</FormText> */}
            </FormGroup>
            <FormGroup>
              <Input type='select'>
                <option>Selectionner les substances Organiques</option>
                <option>Vitamine A</option>
                <option>Vitamine C</option>
                <option>Vitamine D</option>
                <option>Vitamine E</option>
              </Input>
            </FormGroup>
            <Button color='primary' size='sm'>
              Valider
            </Button>{' '}
          </div>
        </Form>
      </Container>
      <hr />
      <Container className='mt-2'>
        <Form>
          <div>
            <h3>Creer un Plat</h3>
            <FormGroup>
              <Label for='exampleEmail'>Nom du repas</Label>
              <Input />
              <FormFeedback>You will not be able to see this</FormFeedback>
              {/* <FormText>Example help text that remains unchanged.</FormText> */}
            </FormGroup>
            <FormGroup>
              <Input type='select'>
                <option>Selectionner les aliments</option>
                <option>Gombo</option>
                <option>Mais</option>
                <optin>Viande de Boeuf E</optin>
                <option>Tomate</option>
                <option>Haricot</option>
              </Input>
            </FormGroup>
            <Button color='primary' size='sm'>
              Valider
            </Button>{' '}
            <Button color='primary' size='sm'>
              Ajouter des aliments
            </Button>{' '}
          </div>
        </Form>
      </Container>
    </>
  );
}
