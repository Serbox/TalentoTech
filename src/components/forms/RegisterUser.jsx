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
    <div className="h-auto p-6 w-auto  bg-[#072563]">
      <div
        className="flex  justify-center items-center min-h-screen "
      >
        <div className="w-98 p-10 bg-[#5c88e1] bg-opacity-20 border border-black rounded-lg  shadow-lg">
          <form onSubmit={onSubmit}>
            <h1 className="text-3xl  text-white font-bold text-center mb-8">
              Registro de usuario
            </h1>
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Usuario"
                {...register("username", {
                  required: "El usuario es requerido",
                })}
                className="w-full h-12  border border-white rounded-full tw-px-5 text-white tw-placeholder-black focus:outline-none focus:ring-2 focus:ring-white"
              />
              {errors.username && (
                <span className="text-red-600">{errors.username.message}</span>
              )}
            </div>
            <div className="relative mb-7">
              <input
                type="password"
                placeholder="Contraseña"
                {...register("password", {
                  required: "La contraseña es requerido",
                })}
                className="w-full h-12  border border-white rounded-full  text-white tw-placeholder-black focus:outline-none focus:ring-2 focus:ring-white"
              />
              {errors.password && (
                <span className="text-red-600">{errors.password.message}</span>
              )}
            </div>
            <div className="relative mb-6">
              <input
                type="number"
                placeholder="Número de documento"
                {...register("documento", {
                  required: "Documento es requerido",
                  minLength: 4,
                })}
                className="w-full h-12 tw-bg-transparent border border-white rounded-full tw-px-5 text-black tw-placeholder-black focus:outline-none focus:ring-2 focus:ring-white"
              />
              {errors.documento?.type === "required" && (
                <span className="text-red-600">
                  Número de documento es requerido
                </span>
              )}
              {errors.documento?.type === "minLength" && (
                <span className="text-red-600">
                  Número de documento no valido
                </span>
              )}
            </div>
            <div className="relative tw-mb-6">
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
                className="w-full h-12 tw-bg-transparent border border-white rounded-full tw-px-5 text-black tw-placeholder-black focus:outline-none focus:ring-2 focus:ring-white"
              />
              {errors.email && (
                <span className="text-red-600">{errors.email.message}</span>
              )}
            </div>
            <button
              type="submit"
              className="w-full h-12 tw-bg-white mt-3 text-gray-800 rounded-full shadow-md hover:bg-gray-200 transition duration-300"
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
