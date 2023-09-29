import {
  Grid,
  Show,
  GridItem,
  Box,
  Image,
  Heading,
  Card,
  CardBody,
  Text,
  Button,
  SimpleGrid,
} from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import landingPagePhoto from "../../assets/kitchen_floor.jpg";
import livingRoomPhoto from "../../assets/living_room_floor.jpg";
import getCroppedImageUrl from "../../services/image-url";

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
        width="100%"
        padding={0}
      >
        <Show above="lg">
          <GridItem area={"aside"} paddingX={5}>
            {/* <GenreList /> */}
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <Outlet />
          <Box>
            <Image
              height="450px"
              width="100%"
              src={getCroppedImageUrl(landingPagePhoto)}
              objectFit="cover"
            />
            <Card width="75%" backgroundColor="white" marginTop={-20}>
              <Heading fontSize="xl" padding={5}>
                TRANSFORM YOUR HOME WITH OUR FLOORING EXPERTISE
              </Heading>
              <CardBody>
                <Text>Elevate Your Space with SF Premier Flooring</Text>
                <Button colorScheme="red">Get an Estimate</Button>
              </CardBody>
            </Card>
          </Box>
        </GridItem>
        <GridItem>
          <Heading margin={5} fontSize={"xl"}>
            Our Latest Projects
          </Heading>
          <SimpleGrid justifyContent="center">
            <GridItem>
              <Image boxSize="90%" src={livingRoomPhoto} />
            </GridItem>
          </SimpleGrid>
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
