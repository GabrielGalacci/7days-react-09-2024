import { useState } from 'react';
import { AssinaturaNewsLetter, Container, FieldGroup, Form, Text } from './styles';


export default function AssinaturaNewsletter() {
    const [response, setResponse] = useState('');
    const [email, setEmail] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  
    const handleEmailChange = (event) => {
      const enteredEmail = event.target.value;
      setEmail(enteredEmail);
  
      // Basic email validation using a regular expression
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setIsButtonDisabled(!emailRegex.test(enteredEmail));
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Perform form submission logic here
      setResponse("Obrigado pela sua assinatura, você receberá nossas novidades no e-mail " + email)
      alert('Obrigado pela sua assinatura, você receberá nossas novidades no e-mail ' + email);
    };

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

                <Form action="#" onSubmit={handleSubmit}>
                    <FieldGroup>
                        <input
                        type="email"
                        placeholder="Insira seu E-mail"
                        value={email}
                        onChange={handleEmailChange}
                        />
                        <button type="submit" disabled={isButtonDisabled}>
                        Assinar Newsletter
                        </button>
                    </FieldGroup>
                    <p>{response}</p>
                </Form>
            </Container>
        </AssinaturaNewsLetter>
    );
}