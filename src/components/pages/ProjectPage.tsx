import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import woodBackground from "../../assets/wood-background.jpg";
import { Center } from "@chakra-ui/react";
import EstimateButton from "../EstimateButton";

const ProjectPage = () => {
  const categories = [
    {
      title: "Luxury Vinyl Plank",
      imageUrl: woodBackground,
    },
    {
      title: "Luxury Vinyl Tile",
      imageUrl: woodBackground,
    },
    {
      title: "Ceramic Tile",
      imageUrl: woodBackground,
    },
    {
      title: "Laminate",
      imageUrl: woodBackground,
    },
    {
      title: "Engineered Hardwood",
      imageUrl: woodBackground,
    },

    {
      title: "Custom Designs",
      imageUrl: woodBackground,
    },
  ];
  return (
    <>
      <Center
        as="div"
        bgImage={woodBackground}
        backgroundSize="cover"
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        height="150px"
      >
        <Heading
          as="h1"
          size={{ base: "2xl", md: "4xl" }}
          fontFamily="Saira Condensed"
          fontWeight="700"
        >
          Our{" "}
          <Box as="span" color="red">
            Work
          </Box>
        </Heading>
      </Center>
      <Container maxW="container.xl">
        <SimpleGrid minChildWidth="300px" gap={5}>
          {categories.map((category) => (
            <GridItem m={4}>
              <Heading as="h3" size="xl" fontFamily="Saira Condensed" my={2}>
                {category.title}
              </Heading>
              <Image src={woodBackground} height="300px" />
            </GridItem>
          ))}
        </SimpleGrid>
        <Center mt={10}>
          <EstimateButton />
        </Center>
      </Container>
    </>
  );
};

export default ProjectPage;
