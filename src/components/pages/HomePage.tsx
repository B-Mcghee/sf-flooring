import { Grid } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"nav nav" "aside main"`, // 1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      ></Grid>
    </>
  );
};

export default HomePage;
