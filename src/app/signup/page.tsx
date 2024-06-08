'use client';

import { useRouter } from 'next/navigation';
import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faGoogle } from "@fortawesome/free-brands-svg-icons";

const SignIn: React.FC = () => {
  const router = useRouter();

  const handleSignIn = () => {
    router.push("/mail");
    
  };
  return (
    <div className="flex h-screen flex w-full">
      <div className="w-1/2 flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1535868463750-c78d9543614f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Placeholder Image"
          className="object-cover h-full w-full"
        />
      </div>
      <div
        className="min-h-screen flex items-center justify-center bg-gray-0 w-1/2"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div className="flex space-x-4 items-center justify-center">
            <Button
              className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
              aria-label="Sign in with Twitter"
            >
              <FontAwesomeIcon icon={faTwitter} />
            </Button>
            <Button
              className="flex items-center justify-center w-12 h-12 rounded-full bg-red-500 hover:bg-red-600 text-white"
              aria-label="Sign in with Google"
            >
              <FontAwesomeIcon icon={faGoogle} />
            </Button>
          </div>
          <form className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <Label htmlFor="email" className="sr-only bg-gray-0">
                  Email address
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <Label htmlFor="password" className="sr-only">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <Button
                type="submit"
                onClick={handleSignIn}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
              >
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
