import { Link, Navigate } from "react-router-dom";
import logo from "/img-login.svg";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiShow } from "react-icons/bi";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Toaster, toast } from "sonner";
import { useState } from "react";

interface IFormLogin {
  email: string;
  password: string;
}

type FormEvents = {
  change: React.ChangeEvent<HTMLInputElement>;
  submit: React.FormEvent<HTMLFormElement>;
};

export default function Login() {
  const InitialFormLogin: IFormLogin = {
    email: "",
    password: "",
  };

  const user = {
    email: "nocontry.s12.23@gmail.com",
    password: "123456789",
  };

  const [formLogin, setFormLogin] = useState(InitialFormLogin);
  const [isVisiblePass, setIsVisiblePass] = useState(false);
  const [isAuthent, setIsAuthent] = useState(false);

  if (isAuthent) {
    return <Navigate to={"/home"} />;
  }

  const handleChangeInput = (e: FormEvents["change"]): void => {
    const { name, value } = e.target;

    setFormLogin({ ...formLogin, [name]: value });
  };

  const handleSubmit = (e: FormEvents["submit"]): void => {
    e.preventDefault();

    if (!formLogin.email || !formLogin.password) {
      toast.error("Los campos no pueden ir vacios");
      return;
    }

    const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!regexEmail.test(formLogin.email)) {
      toast.error("El campo no coincide con un correo valido");
      return;
    }

    if (
      user.email !== formLogin.email ||
      user.password !== formLogin.password
    ) {
      setIsAuthent(false);
      toast.error("Error al iniciar sesión verifica tus datos");
    } else {
      setIsAuthent(true);
    }
  };

  const handleIsVisiblePass = () => {
    setIsVisiblePass(!isVisiblePass);
  };

  return (
    <main className="min-h-screen m-auto bg-third lg:w-screen lg:flex lg:flex-col lg:justify-center">
      <h1 className="h-[100px] font-poppins grid place-content-center text-5xl text-text_white bg-primary">
        DrinkVentory
      </h1>

      <section className="lg:flex">
        <article className="hidden lg:w-1/2 lg:h-[740px] lg:grid place-content-center lg:-mt-1  bg-primary">
          <picture>
            <img src={logo} alt="imagen login" />
          </picture>
        </article>

        <article className="w-[768px] h-[740px] mt-14  flex justify-center items-center bg-primary relative lg:w-1/2 lg:-mt-1">
          <img
            src={logo}
            alt="imagen login"
            className="w-[200px] h-[160px] absolute top-12 left-14 lg:hidden"
          />
          <form
            className="w-[650px] h-[470px] font-roboto flex flex-col justify-evenly items-center rounded-lg bg-black bg-opacity-50 lg:w-[500px]"
            onSubmit={handleSubmit}>
            <h2 className="text-4xl font-poppins text-text_white">
              ¡Te damos la bienvenida!
            </h2>
            <label htmlFor="email" className="text-text_white relative">
              Correo electrónico
              <input
                id="email"
                type="text"
                name="email"
                placeholder="Ejemplo@gmail.com"
                className="w-[350px] h-[40px] rounded-lg block mt-3 pl-3 text-black"
                value={formLogin.email}
                onChange={handleChangeInput}
              />
              <span
                className="absolute right-2 bottom-2 text-2xl"
                onClick={handleIsVisiblePass}>
                <MdOutlineMailOutline className="text-black" />
              </span>
            </label>
            <label htmlFor="password" className="text-white relative">
              Contraseña
              <input
                id="password"
                type={isVisiblePass ? "text" : "password"}
                name="password"
                placeholder="Contraseña"
                className="w-[350px] h-[40px] rounded-lg block mt-3 pl-3 text-black "
                value={formLogin.password}
                onChange={handleChangeInput}
              />
              <span
                className="absolute right-2 bottom-2 text-2xl"
                onClick={handleIsVisiblePass}>
                {isVisiblePass ? (
                  <BiShow className="text-black" />
                ) : (
                  <AiOutlineEyeInvisible className="text-black" />
                )}
              </span>
            </label>
            <button className="w-[350px] h-[40px] rounded-lg border border-text_white border-t-0 bg-primary text-text_white ">
              Inicia sesión
            </button>
          </form>
          <Toaster richColors position="top-center" />
        </article>
      </section>
    </main>
  );
}
