function RegistrationForm(){
  return (
    <>
    <form action="">
      <label htmlFor="name">Name</label>
      <input type="text" name="name" id="name" />
      <br />
      <label htmlFor="email">Email address</label>
      <input type="email" name='email' id="email" />
      <br />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
    </form>
    </>
  )
}

export default RegistrationForm;