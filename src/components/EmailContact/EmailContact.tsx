'use client'

import emailjs from "emailjs-com"
import { HiOutlineMail } from "react-icons/hi";
import {
  ButtonSubmit,
  Container,
  ContentButton,
  FormContent,
  Input,
  InputContent,
  Label,
  TextArea,
  Title
} from "./EmailContact.styles";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";

export const EmailContact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const sendEmail = async (e: any) => {
    e.preventDefault();
    
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID_EMAIL!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID_EMAIL!,
        e.target,
        process.env.NEXT_PUBLIC_USER_ID_EMAIL!
      );

      setForm({
        name: '',
        email: '',
        message: ''
      })

      toast.success(
        'Mensagem enviada com sucesso!',
        {
          duration: 3000,
          style: {
            marginTop: '5rem'
          },
        },
      );
    } catch (error: any) {
      toast.error(
        'Tivemos um problema ao enviar sua mensagem tente novamente em instantes!',
        {
          duration: 3000,
          style: {
            marginTop: '5rem'
          },
        },
      );
    }
  }

  const validate = () => {
    return (form.name && form.email && form.message) === '';
  };

  return (
    <Container variants={item}>
      <FormContent onSubmit={sendEmail}>
        <Title>Entre em contato comigo!</Title>
        <InputContent>
          <Label>Nome</Label>
          <Input
            type="text"
            name="user_name"
            placeholder="Nome completo"
            value={form.name}
            onChange={(e: any) => setForm({...form,  name: e.target.value})}
          />
        </InputContent>

        <InputContent>
          <Label>Email</Label>
          <Input
            type="email"
            name="user_email"
            placeholder="Seu melhor email"
            value={form.email}
            onChange={(e: any) => setForm({...form,  email: e.target.value})}
          />
        </InputContent>

        <InputContent>
          <Label>Mensagem</Label>
          <TextArea
            name="message"
            placeholder="Escreva sua mensagem aqui"
            value={form.message}
            onChange={(e: any) => setForm({...form,  message: e.target.value})}
          />
        </InputContent>

        <ContentButton>
          <ButtonSubmit
            type="submit"
            value="Send"
            disabled={validate()}
          >
            <HiOutlineMail />Enviar
          </ButtonSubmit>
        </ContentButton>
      </FormContent>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </Container>
  );
};
