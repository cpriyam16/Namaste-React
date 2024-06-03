import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <h2>This is an about page</h2>
      <User name={"Priyam Function"} location={"Bengaluru Fuction"} />
      <UserClass name={"Priyam Class"} location={"Bengaluru Class"} />
    </div>
  )
}

export default About;
