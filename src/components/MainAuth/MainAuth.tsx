import React, { useState } from "react";
import { Button } from "@/components/ui/button";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Link } from "react-router-dom";
import auth_bg from "../../assets/auth_bg.jpg";
import styled from "styled-components";
import auth_google from "../../assets/auth_google.svg";
import auth_github from "../../assets/auth_github.svg";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const SignupValidation = z.object({
  name: z.string().min(2, { message: "Too short" }),
  username: z.string().min(2, { message: "Too short" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

// background
const authBackgroundImage = {
  backgroundImage: `url(${auth_bg})`,
  width: "100%",
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "start left",
  objectFit: "contain",
  position: "absolute",
  // filter:'grayscale(100%)'
};
export const StyledMainAuth = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const MainAuth = () => {
  const navigate = useNavigate();

  const {
    register: registerSignUp,
    handleSubmit: handleSubmitSignUp,
    formState: { errors: errorSignUp },
  } = useForm();

  const {
    register: registerSignIn,
    handleSubmit: handleSubmitSignIn,
    formState: { errors: errorSignIn },
  } = useForm();

  //google auth
  const handleGoogle = async () => {
    try {
      const provider = await new GoogleAuthProvider();
      // return signInWithPopup(auth,provider)
      const result = await signInWithPopup(auth, provider);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.log("登入失敗", error);
    }
  };

  //normal signUp
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User registered successfully");
    } catch (error) {
      console.log(error);
    }
  };

  const isLoading = false;
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name: "",
      username: "",
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof SignupValidation>) {
    const newUser = await createUserAccount(values);
    // if (!newUser) throw new Error();
    console.log(newUser);
  }
  return (
    <StyledMainAuth>
      <section
        className="grid grid-cols-2 place-content-center justify-items-center auto-cols-max w-full main_auth_wrap"
        style={authBackgroundImage}
      >
        <Tabs
          defaultValue="sign_in"
          className="w-full h-full p-5 max-w-[500px] "
        >
          <TabsList className="grid w-full grid-cols-2 backdrop-blur">
            <TabsTrigger value="sign_up">建立帳戶</TabsTrigger>
            <TabsTrigger value="sign_in">登入</TabsTrigger>
          </TabsList>
          {/* 建立帳戶 */}
          <TabsContent value="sign_up" className="backdrop-blur">
            <Form {...form}>
              <Card className="w-full h-full">
                <CardHeader className="">
                  <CardTitle>建立帳戶</CardTitle>
                  <CardDescription>建立帳戶以獲取完整服務</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <form
                    onSubmit={handleSignUp}
                    className="flex flex-col gap-1 w-full mt-1"
                  >
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem className="space-y-1">
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              className="shad-input"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="username"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Username</FormLabel>
                          <FormControl>
                            <Input
                              type="text"
                              className="shad-input"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              className="shad-input"
                              placeholder="Email"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              className="shad-input"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="shad-button_primary">
                      {isLoading ? (
                        <div className="flex-center gap-2">
                          <Loader />
                          Loading...
                        </div>
                      ) : (
                        "Sign up"
                      )}
                    </Button>
                    <p className="text-small-regular text-light-2 text-center mt-1">
                      Already have account?
                      <span className="text-primary-500 text-small-semibold ml-1">
                        Sign In
                      </span>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </Form>
          </TabsContent>
          {/* 登入 */}
          <TabsContent value="sign_in">
            <Form {...form}>
              <Card className="w-full">
                <CardHeader className="">
                  <CardTitle>登入</CardTitle>
                  <CardDescription>登入帳號</CardDescription>
                </CardHeader>
                <CardContent className="space-y-1">
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex flex-col gap-1 w-full mt-1"
                  >
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>email</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              className="shad-input"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              type="password"
                              className="shad-input"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="submit"
                      className="shad-button_primary bg-[#fff] hover:bg-[#fff] active:bg-[#fff]"
                    >
                      {isLoading ? (
                        <div className="flex-center gap-2">
                          <Loader />
                          Loading...
                        </div>
                      ) : (
                        "Sign up"
                      )}
                    </Button>
                    <div className="outh_wrap flex flex-row justify-between gap-2 w-full h-full">
                      <Button
                        className="w-full bg-[#fff] hover:bg-[#fff] active:bg-[#fff]"
                        onClick={handleGoogle}
                      >
                        <img
                          src={auth_google}
                          alt="google"
                          className="w-[30px] h-[30px]"
                        />
                        <span className="ml-1 font-bold text-sm">Google</span>
                      </Button>
                      <Button className="w-full bg-[#fff] hover:bg-[#fff] active:bg-[#fff]">
                        <img
                          src={auth_github}
                          alt="github"
                          className="w-[30px] h-[30px] "
                        />
                        <span className="ml-1 font-bold text-sm">Github</span>
                      </Button>
                    </div>
                    <p className="text-small-regular text-light-2 text-center mt-2">
                      Not yet have Account
                      <span className="text-primary-500 text-small-semibold ml-1">
                        Sign Up
                      </span>
                    </p>
                  </form>
                </CardContent>
              </Card>
            </Form>
          </TabsContent>
        </Tabs>
        <article className="text-[#1a1a1a] ">
          {/* <div>投資不是關於預測市場，而是關於風險管理</div> */}
        </article>
      </section>
    </StyledMainAuth>
  );
};

export default MainAuth;
