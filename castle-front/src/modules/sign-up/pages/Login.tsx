import { Box, Button, Center, Text, Title, Image, ScrollArea, Stack, Input, Textarea, PasswordInput, Loader } from "@mantine/core";
import seamlessBlue from "assets/background.jpg";
import nsgLogo from "assets/nsg-logo-compac.png";
import { joiResolver } from "@hookform/resolvers/joi";
import { FormControl } from "shared";
import Joi from "joi";
import React from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { useAuthentication } from "contexts";
import { showNotification } from "@mantine/notifications";
type LoginForm = {
    username: string;
    password: string;
}

const LOGIN_FORM_SCHEMA =
    Joi.object<LoginForm>({
        username: Joi.string().max(400).required().label("Username"),
        password: Joi.string().max(400).required().label("Password"),
    });


function Login() {
    const {
        loginMutation: { mutate, isLoading },
    } = useAuthentication();
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<LoginForm>({
        resolver: joiResolver(LOGIN_FORM_SCHEMA)
    });
    const onSubmit: SubmitHandler<LoginForm> = (data: LoginForm) => {
        // Add logic here to login
        console.log("va a submitear");
        console.log(data);
        mutate(data);
    };
    return (
        <Box
            sx={{
                margin: "auto",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                paddingTop: "50px",
                paddingBottom: "50px",
                gap: "10px"
            }}

        >
            <Image fit="scale-down" src={nsgLogo} sx={{ maxWidth: 250, paddingTop: 30, paddingBottom: 20, alignSelf: "center" }} />
            <Center>
                <Box>
                    <Title variant="gradient"
                        size={64}
                        ta="center"
                        fz="xl"
                        fw={700}> Login</Title>
                    <Text size={28}  > Write your username and password to access all the artists features.</Text>
                </Box>
            </Center>
            <Center>

                <Box
                    component="form"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        width: "60%",
                    }}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <Box sx={{ display: "flex", justifyContent: "center", paddingBottom: 20 }}>
                        <Stack
                            spacing={23}
                            sx={{ marginTop: 21, maxWidth: 480, width: "100%" }}
                            align="center"
                        >
                            <FormControl
                                error={errors.username?.message}
                                label="Username"
                                sx={{ width: "100%" }}
                            >
                                <Input placeholder="i.e. artist@artist.com" {...register("username")} />
                            </FormControl>
                            <FormControl
                                error={errors.password?.message}
                                label="Password"
                                sx={{ width: "100%" }}
                            >
                                <PasswordInput
                                    placeholder="Write your password"
                                    {...register("password")}
                                />
                            </FormControl>
                        </Stack>
                    </Box>
                    <Button bg="cyan" variant="filled" radius={"xl"} type="submit" disabled={isLoading}>
                        {isLoading ? <Loader /> : <>Login</>}
                    </Button>
                </Box>
            </Center>
        </Box>
    );
}

export { Login };