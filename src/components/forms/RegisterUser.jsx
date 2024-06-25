import { useForm } from "react-hook-form";

//

const RegisterUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    // Transformar los datos del formulario en el formato requerido por la API
    // const transformedData = {
    //   persona: {
    //     tipo_documento: data.tipo_documento,
    //     documento: data.documento,
    //     primer_nombre: data.primer_nombre,
    //     segundo_nombre: data.segundo_nombre || null,
    //     primer_apellido: data.primer_apellido,
    //     segundo_apellido: data.segundo_apellido || null
    //   },
    //   user_conjunto: {
    //     username: data.username,
    //     password: data.password,
    //     email: data.email
    //   }

    // };
    console.log(data);
  });

  return (
    <div className="tw-h-auto tw-p-6 tw-w-auto  tw-bg-[#072563]">
      <div
        className="tw-flex  tw-justify-center tw-items-center tw-min-h-screen "
      >
        <div className="tw-w-98 tw-p-10 tw-bg-[#5c88e1] tw-bg-opacity-20 tw-border tw-border-black tw-rounded-lg  tw-shadow-lg">
          <form onSubmit={onSubmit}>
            <h1 className="tw-text-3xl  tw-text-white tw-font-bold tw-text-center tw-mb-8">
              Registro de usuario
            </h1>
            <div className="tw-relative tw-mb-6">
              <input
                type="text"
                placeholder="Usuario"
                {...register("username", {
                  required: "El usuario es requerido",
                })}
                className="tw-w-full tw-h-12  tw-border tw-border-white tw-rounded-full px-5 text-white tw-placeholder-black tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-white"
              />
              {errors.username && (
                <span className="tw-text-red-600">{errors.username.message}</span>
              )}
            </div>
            <div className="tw-relative tw-mb-7">
              <input
                type="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: "La contraseña es requerido",
                })}
                className="tw-w-full tw-h-12 bg-transparent tw-border tw-border-white tw-rounded-full  text-white tw-placeholder-black tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-white"
              />
              {errors.password && (
                <span className="tw-text-red-600">{errors.password.message}</span>
              )}
            </div>
            <div className="tw-relative tw-mb-6">
              <input
                type="number"
                placeholder="Número de documento"
                {...register("documento", {
                  required: "Documento es requerido",
                  minLength: 4,
                })}
                className="tw-w-full tw-h-12 bg-transparent tw-border tw-border-white tw-rounded-full px-5 tw-text-black tw-placeholder-black tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-white"
              />
              {errors.documento?.type === "required" && (
                <span className="tw-text-red-600">
                  Número de documento es requerido
                </span>
              )}
              {errors.documento?.type === "minLength" && (
                <span className="text-red-600">
                  Número de documento no valido
                </span>
              )}
            </div>
            <div className="tw-relative tw-mb-6">
              <input
                type="email"
                placeholder="Correo "
                {...register("email", {
                  required: {
                    value: true,
                    message: "El correo es requerido",
                  },
                  pattern: {
                    value: /^[a-z0-9._%+-]+@[a-z0-9*-]+\.[a-z]/,
                    message: "Correro no válido",
                  },
                })}
                className="tw-w-full tw-h-12 bg-transparent tw-border tw-border-white tw-rounded-full px-5 tw-text-black tw-placeholder-black tw-focus:outline-none tw-focus:ring-2 tw-focus:ring-white"
              />
              {errors.email && (
                <span className="tw-text-red-600">{errors.email.message}</span>
              )}
            </div>
            <button
              type="submit"
              className="tw-w-full tw-h-12 bg-white tw-text-gray-800 tw-rounded-full tw-shadow-md tw-hover:bg-gray-200 tw-transition tw-duration-300"
            >
              Registrar Usuario
            </button>

            {/* <pre>
                {JSON.stringify(watch(), null, 2)}
            </pre> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
