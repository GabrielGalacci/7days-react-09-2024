
import { AssinaturaNewsLetter, Container, FieldGroup, Form, Text } from './styles';

export default function AssinaturaNewsletter() {
    return (
        <AssinaturaNewsLetter>
            <Container>
                <Text>
                    <h1>
                        Sua casa com as
                        <br />
                        <strong>
                            melhores <br /> plantas
                        </strong>
                    </h1>
                    <p>
                        Encontre aqui uma vasta seleção de plantas para decorar a sua casa e torná-lo uma pessoa mais feliz no seu dia a dia. Entre com seu e-mail e assine nossa newsletter para saber das novidades da marca.
                    </p>
                </Text>

                <Form action="#">
                    <FieldGroup>
                        <input type="email" placeholder='Insira seu E-mail' />
                        <button>
                            Assinar Newsletter
                        </button>
                    </FieldGroup>
                </Form>
            </Container>
        </AssinaturaNewsLetter>
    );
}