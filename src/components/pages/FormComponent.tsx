import {
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Container,
  Button,
  Text,
  Stack,
} from "@chakra-ui/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  email: z.string().email().min(5),
  phone: z.string().min(10, { message: "Phone number must include area code" }),
  description: z.string(),
});

type FormData = z.infer<typeof schema>;

const FormComponent = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Container textAlign={"center"} py={5}>
        <Stack spacing={5}>
          <FormControl>
            <FormLabel htmlFor="name">Name</FormLabel>
            <Input id="name" {...register("name")} type="text"></Input>
            {errors.name && <Text color="red">{errors.name.message}</Text>}
          </FormControl>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input id="email" {...register("email")} type="email"></Input>
            {errors.email && <Text color="red">{errors.email.message}</Text>}
          </FormControl>
          <FormControl>
            <FormLabel>Phone</FormLabel>
            <Input
              placeholder={"xxx-xxx-xxxx"}
              id="phone"
              {...register("phone")}
              type="text"
            ></Input>
            {errors.phone && <Text color="red">{errors.phone.message}</Text>}
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea
              id="description"
              {...register("description")}
              placeholder="Enter a small description of your potential project"
            ></Textarea>
          </FormControl>
          <Button isDisabled={!isValid} type="submit" colorScheme="blue">
            Submit
          </Button>
        </Stack>
      </Container>
    </form>
  );
};

export default FormComponent;
