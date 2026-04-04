"use client";

import { Card, CardContent, CardHeader } from "../../_components/ui/card";
import Image from "next/image";
import logo from "../../../public/logo.jpeg";
import { Input } from "@/app/_components/ui/input";
import { Button } from "@/app/_components/ui/button";
import { Eye, EyeClosed } from "lucide-react";
import { useState } from "react";
const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };
  return (
    <main className="flex min-h-screen items-center justify-center bg-muted px-4">
      <Card className="w-full max-w-[430px] border borderprimary/10 bg-[#0d0d0f] shadow-[0_0_40px_rgba(0,0,0,0.45)]">
        <CardHeader className="space-y-6 px-8 pt-10 pb-6">
          <div className="flex justify-center">
            <div className="flex h-[110px] w-[110px] items-center justify-center overflow-hidden rounded-full border borderprimary/20 bg-black/20 p-2">
              <Image
                src={logo}
                alt="Logo da Empresa"
                width={150}
                height={150}
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex items-center">
            <div className="h-px flex-1 bg-linear-to-r from-transparent toprimary/30" />

            <p className="mx-4 whitespace-nowrap text-[10px] uppercase tracking-[4px] text-[#a89a72]">
              IMOBILIÁRIA DE LUXO
            </p>

            <div className="h-px flex-1 bg-linear-to-l from-transparent toprimary/30" />
          </div>
        </CardHeader>

        <CardContent className="px-8 pb-8">
          <div className="space-y-4">
            <Input
              type="text"
              placeholder="Usuário"
              className="h-12 border-primary/30 bg-transparent text-white placeholder:text-zinc-500 focus-visible:border-primary/60 focus-visible:ring-0"
            />

            <div className="relative">
              <Input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Senha"
                className="h-12 border-primary/30 bg-transparent text-white placeholder:text-zinc-500 focus-visible:border-primary/60 focus-visible:ring-0"
              />
              <Button
                variant={"link"}
                onClick={togglePasswordVisibility}
                className="absolute right-0 top-0 h-full px-3"
              >
                {isPasswordVisible ? <Eye /> : <EyeClosed />}
              </Button>
            </div>

            <Button className="mt-2 h-12 w-full rounded-none bg-primary text-black transition">
              ENTRAR NO PAINEL
            </Button>
          </div>

          <div className="mt-8 h-px w-full bg-linear-to-r from-transparent via-primary/30 to-transparent" />

          <p className="mt-5 text-center text-[10px] uppercase tracking-[3px] text-zinc-500">
            ACESSO EXCLUSIVO PARA ADMINISTRADORES
          </p>
        </CardContent>
      </Card>
    </main>
  );
};

export default Login;
