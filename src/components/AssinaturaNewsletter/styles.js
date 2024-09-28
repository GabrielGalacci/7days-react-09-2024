import styled from "styled-components";

// index.module.css
export const AssinaturaNewsLetter = styled.div`
    background-color: #ffe29a;
    padding: 16px;
    margin-top: 16px;
    position: relative;

    h1 {
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: 27px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 24px;
        strong {
            font-family: Elsie Swash Caps;
            font-size: 50px;
            font-style: normal;
            font-weight: 900;
            line-height: 1;
            letter-spacing: 0em;
            text-align: left;
        }
    }

    p{
        font-family: Montserrat;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 16px;
    }

    @media (min-width: 920px) {
        background-color: transparent;
        margin-top: 155px;
        h1 strong {
            font-size: 82px;
        }
    }

    &:after {
        content: "";
        display: block;
        width: 787px;
        height: 975px;
        background-image: url('/images/hero-image.png');
        position: absolute;
        --baseDistance: -287px;
        top: calc(var(--baseDistance) + 50px);
        right: 0;
        z-index: -1;
        pointer-events: none;
    }
`;


export const Container = styled.div`
    max-width: 585px;
`;

export const Text = styled.div`
    max-width: 481px;
    margin-bottom: 32px;
`;

//form.module.css
export const Form = styled.form`
    input {
        type: email;
        padding: 27px;
        padding-left: 55px;
    }
    p {
        margin-top: 10px;
        padding: 10px;
        background-color: bisque;
        border: 1px solid #f00;
    }
`;

export const FieldGroup = styled.fieldset`
    display: flex;
    flex-direction: column;

    input {
        flex: 1;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 20px;
        letter-spacing: 0em;
        text-align: left;
        background-image: url("/images/icons/icon-mail.svg");
        background-repeat: no-repeat;
        background-position: 16px center;
        outline-color: #ffcb47;
        box-shadow: 10px 10px 30px 0px #0000000f;
        border: 0;
        &:hover {
            box-shadow: 10px 10px 30px 0px #0000002e;
        }
    }

    button {
        height: 75px;
        width: 194px;
        left: 751px;
        top: 597px;
        border-radius: 0px;
        color: #fff;
        width: 100%;
        background-color: #ffcb47;
        padding: 27px;
        box-shadow: 10px 10px 30px 0px #ffcb474d;
        border: 0;
    }

    @media (min-width: 920px) {
        flex-direction: row;

        button {
            width: initial;
        }
    }
`;
