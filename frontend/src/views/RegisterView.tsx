import { NavLink } from "react-router";
import { useForm } from "react-hook-form";
import ErrorMessage from "../components/ErrorMessage";

export default function RegisterView() {

    const initialValues = {
        name: '',
        email: '',
        handle: '',
        password: '',
        password_confirmation: ''
    }

	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm({defaultValues: initialValues});

	const handleRegister = () => {
		console.log("from handleSubmit.");
	};

	return (
		<>
			<div className='text-4xl text-white font-bold'>
				Create your account.
			</div>
			<form
				onSubmit={handleSubmit(handleRegister)}
				className='bg-white px-5 py-20 rounded-lg space-y-10 mt-10'
			>
				<div className='grid grid-cols-1 space-y-3'>
					<label htmlFor='name' className='text-2xl text-slate-500'>
						Name
					</label>
					<input
						id='name'
						type='text'
						placeholder='Tu Nombre'
						className='bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400'
						{...register("name", {
							required: "Name is required.",
						})}
					/>
					{errors.name && (
						<ErrorMessage>{errors.name.message} </ErrorMessage>
					)}
				</div>
				<div className='grid grid-cols-1 space-y-3'>
					<label htmlFor='email' className='text-2xl text-slate-500'>
						E-mail
					</label>
					<input
						id='email'
						type='email'
						placeholder='Email de Registro'
						className='bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400'
						{...register("email", {
							required: "Email is required.",
						})}
					/>
                    {errors.email && (
						<ErrorMessage>{errors.email.message} </ErrorMessage>
					)}
				</div>
				<div className='grid grid-cols-1 space-y-3'>
					<label htmlFor='handle' className='text-2xl text-slate-500'>
						Handle
					</label>
					<input
						id='handle'
						type='text'
						placeholder='Nombre de usuario: sin espacios'
						className='bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400'
						{...register("handle", {
							required: "Handle is required.",
						})}
					/>
                    {errors.handle && (
						<ErrorMessage>{errors.handle.message} </ErrorMessage>
					)}
				</div>
				<div className='grid grid-cols-1 space-y-3'>
					<label
						htmlFor='password'
						className='text-2xl text-slate-500'
					>
						Password
					</label>
					<input
						id='password'
						type='password'
						placeholder='Password de Registro'
						className='bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400'
						{...register("password", {
							required: "Password is required.",
						})}
					/>
                    {errors.password && (
						<ErrorMessage>{errors.password.message} </ErrorMessage>
					)}
				</div>

				<div className='grid grid-cols-1 space-y-3'>
					<label
						htmlFor='password_confirmation'
						className='text-2xl text-slate-500'
					>
						Password confirmation
					</label>
					<input
						id='password_confirmation'
						type='password'
						placeholder='Repetir Password'
						className='bg-slate-100 border-none p-3 rounded-lg placeholder-slate-400'
						{...register("password_confirmation", {
							required: "Password confirmation is required.",
						})}
					/>
                    {errors.password_confirmation && (
						<ErrorMessage>{errors.password_confirmation.message} </ErrorMessage>
					)}
				</div>

				<input
					type='submit'
					className='bg-cyan-400 p-3 text-lg w-full uppercase text-slate-600 rounded-lg font-bold cursor-pointer'
					value='Crear Cuenta'
				/>
			</form>
			<nav className='mt-10'>
				<NavLink
					className='text-white text-center text-lg block'
					to='/auth/login'
					end
				>
					Already have an account? Sign in.
				</NavLink>
			</nav>
		</>
	);
}
