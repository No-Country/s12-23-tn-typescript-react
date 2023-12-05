import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h1>login</h1>
      <Link to={"/home"}>Incio</Link>
    </>
  )
}