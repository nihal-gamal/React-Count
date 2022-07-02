import {useForm ,Controller} from 'react-hook-form';
import ReactSelect from 'react-select';

function Register() {
  const {register,handleSubmit , formState: { errors },watch,control} = useForm();
  const submitt = (data) => { 
  }
  const selectOptions = [
    {
      value:1,
      label:"male"
    },
    {
      value:2,
      label:"female"
    },
  ]
  const selectOptions2 = [
    {
      value:1,
      label:"red"
    },
    {
      value:2,
      label:"green"
    },
    {
      value:3,
      label:"blue"
    },
    {
      value:4,
      label:"white"
    },
  ]
    return (
        
        <div className="container">
          <form className="form-control w-50 mx-auto my-5 " onSubmit={handleSubmit(submitt)}>
              <label htmlFor="email" className="mb-2 mt-2">Email</label>
              <input 
              id="email" 
              type="text" 
              name="email" 
              className="form-control"
              {...register('email', { required: true ,pattern: /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/ })}
              />
              {
                (errors.email && errors.email.type === "required")&&
                <small className='text-danger d-block'>required</small>
              }
              {
                (errors.email && errors.email.type === "pattern")&&
                <small className='text-danger d-block'>match the pattern</small>
              }
              <Controller
                name="gender"
                control={control}
                rules={{
                  required: true,
                }}
                placeholder="gender"
                render={({ field }) => <ReactSelect 
                placeholder="gender"
                className='mt-4 mb-2'
                  {...field} 
                  options={selectOptions}
                />}
              />
              {
                (errors.gender && errors.gender.type === "required")&&
                <small className='text-danger d-block'>required</small>
              }
              <Controller
                name="colors"
                control={control}
                rules={{
                  required: true,
                }}
                placeholder="colors"
                render={({ field }) => <ReactSelect
                className='mt-4 mb-2'
                isMulti
                isSearchable 
                placeholder="colors"
                  {...field} 
                  options={selectOptions2}
                />}
              />
              {
                (errors.colors && errors.colors.type === "required")&&
                <small className='text-danger d-block'>required</small>
              }
              <label htmlFor="password" className="mb-2 mt-2">Password</label>
              <input 
              id="password" 
              type="password" 
              name="password" 
              {...register('password', { required: true ,pattern:/(?=^.{8,}$)(?=.*\d)(?=.*[!@#$%^&*]+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/})}
              className="form-control"/>
                {
                (errors.password && errors.password.type === "required")&&
                <small className='text-danger d-block'>required</small>
              }
              {
                (errors.password && errors.password.type === "pattern")&&
                <small className='text-danger d-block'>match the pattern</small>
              }
              <label htmlFor="cofirmPassword" className="mb-2 mt-2">Confirm Password</label>
              <input 
              id="cofirmPassword" 
              type="password" 
              name="cofirmPassword" 
              {...register('cofirmPassword', { required: true , validate: (val) => {
                if (watch('password') !== val) {
                  return "Your passwords do no match";
                }
              }})}
              className="form-control"/>
              {
                <small className='text-danger d-block'>{errors.cofirmPassword?.message}</small>
              }
              
              <button className="btn btn-primary  w-100 mt-5" type="submit">submit</button>
          </form>
        </div>
        

    )
}

export default Register;