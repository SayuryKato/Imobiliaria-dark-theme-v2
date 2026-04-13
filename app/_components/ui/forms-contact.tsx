"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";
import * as z from "zod";

import { Button } from "./button";
import { Card, CardContent, CardFooter } from "./card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "./field";
import { Input } from "./input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "./input-group";

const formSchema = z.object({
  firstName: z.string().min(2, "Nome é obrigatório"),
  lastName: z.string().min(2, "Sobrenome é obrigatório"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  message: z
    .string()
    .min(10, "Mensagem muito curta")
    .max(300, "Mensagem muito longa"),
});

export function FormsContact() {
  const [loading, setLoading] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }),
      });

      if (!response.ok) throw new Error();

      toast.success("Mensagem enviada com sucesso! 🎉");
      form.reset();
    } catch {
      toast.error("Erro ao enviar mensagem 😢");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="w-full bg-white text-black border border-gray-200">
      <CardContent>
        <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            {/* Nome + Sobrenome */}
            <Field orientation="horizontal">
              <Controller
                name="firstName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Nome *</FieldLabel>
                    <Input {...field} placeholder="Seu nome" />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />

              <Controller
                name="lastName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel>Sobrenome *</FieldLabel>
                    <Input {...field} placeholder="Seu sobrenome" />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </Field>

            {/* Email */}
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Email *</FieldLabel>
                  <Input {...field} type="email" />
                  <FieldDescription>
                    Entraremos em contato por este email.
                  </FieldDescription>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />

            {/* Telefone */}
            <Controller
              name="phone"
              control={form.control}
              render={({ field }) => (
                <Field>
                  <FieldLabel>Telefone</FieldLabel>
                  <Input {...field} placeholder="(11) 99999-9999" />
                </Field>
              )}
            />

            {/* Mensagem */}
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel>Mensagem *</FieldLabel>
                  <InputGroup>
                    <InputGroupTextarea
                      {...field}
                      rows={5}
                      className="resize-none"
                    />
                    <InputGroupAddon align="block-end">
                      <InputGroupText>{field.value.length}/300</InputGroupText>
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>

      <CardFooter>
        <Field orientation="horizontal">
          <Button type="button" variant="outline" onClick={() => form.reset()}>
            Resetar
          </Button>

          <Button type="submit" form="contact-form" disabled={loading}>
            {loading ? "Enviando..." : "Enviar"}
          </Button>
        </Field>
      </CardFooter>
    </Card>
  );
}
