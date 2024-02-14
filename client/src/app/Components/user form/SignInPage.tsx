import { User } from "@/app/models/user";
import { useState } from "react";


const SignInPage = () => {
    const [user, setUser] = useState<User>({
      mail : "",
      password : ""
    });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name , value } = e.target
        setUser((prev) => ({
          ...prev, 
          [name] : value
        }))
      };
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        // You can perform your authentication logic here
        console.log('Form submitted with:', user);
      };
    
      return (
        <main className="mx-auto mt-8  pt-8 w-full max-w-xs">
          <form 
          onSubmit={handleSubmit}
          className="bg-white shadow-md border-solid w-full rounded px-6" >
            <h1>Sign in</h1>
    
            <label htmlFor="email">
              Mail:
              <input
                onChange={handleChange}
                type="email"
                name="mail"
                placeholder="onboard@google.com"
                required
                
              />
            </label>
    
            <label htmlFor="password">
              Password:
              <input
                onChange={handleChange}
                type="password"
                name="password"
                required
                
              />
            </label>
    
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-4">
              Sign In
            </button>
          </form>
        </main>
      );
};

export default SignInPage;
