import { SubmitHandler, useForm } from 'react-hook-form'
import './Home.module.css'

interface IFormState{
  name:string
  email:string
}

function Home() {
const {register,handleSubmit} = useForm<IFormState>()

const onSubmit:SubmitHandler<IFormState> = (data)=> {
  console.log(data);
}
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>GTA VI Leave Order</h1>
        <input type="name" placeholder='Type your name' {...register("name")} />
        <input type="email" placeholder='Type your email' {...register("email")}  />
        <button>I Want GTA</button>
      </form>
    </div>
  )

}

export default Home
