import { Heading, Image, SimpleGrid, Text, Box, Flex } from "@chakra-ui/react";
import aboutPhoto from "../../assets/about_photo.jpg";
import EstimateButton from "../EstimateButton";
import malletPhoto from "../../assets/rubber-mallet.png";
import woodPhoto from "../../assets/wood-plank.png";
const AboutPage = () => {
  const malletStyle = {
    transform: "rotate(169.4deg)",
    zIndex: "-1",
    position: "absolute",
    top: { base: 14, md: -10 },
    left: { base: -20, md: -28 },
    maxWidth: { base: "250px", md: "400px" },
  };

  const woodStyle = {
    transform: "rotate(42deg)",
    zIndex: "-1",
    position: "absolute",
    bottom: -120,
    right: -50,
    maxWidth: "190px",
  };
  return (
    <>
      <Box sx={malletStyle}>
        <Image src={malletPhoto} />
      </Box>
      <Box mt={10} mb={20}>
        <Heading
          as="h3"
          size={{ base: "xl", md: "2xl" }}
          textAlign={"center"}
          fontFamily="Saira Condensed"
          fontWeight="bold"
        >
          "Pioneering Flooring Excellence:
        </Heading>
        <Heading
          as="h3"
          size={{ base: "xl", md: "2xl" }}
          textAlign={"center"}
          fontFamily="Saira Condensed"
          fontWeight="bold"
        >
          Get to Know Us"
        </Heading>
      </Box>

      <SimpleGrid columns={1} mt={6} position={"relative"} overflow="clip">
        <Flex justify="space-around">
          <Box w="100%" m={2} alignSelf="center">
            <Image src={aboutPhoto} />
          </Box>

          <Box textAlign="left" w="100%" m={2}>
            <Heading
              as={"h3"}
              size={{ base: "lg", md: "2xl" }}
              borderLeft="4px solid red"
              pl={2}
              display="inline-block"
              fontFamily="Saira Condensed"
              fontWeight="bold"
              my={{ base: 2, md: 8 }}
            >
              Our{" "}
              <Box as="span" color={"red"}>
                Vision
              </Box>
            </Heading>

            <Text
              fontSize={{ base: 12, md: "2xl" }}
              my={{ md: 5 }}
              fontFamily="Inter"
              lineHeight="1"
            >
              SF Premier Flooring strives to be the foremost provider of
              exceptional flooring solutions, renowned for innovation, quality
              craftsmanship, and unmatched customer satisfaction.
              <br />
              <br />
              We aspire to transform spaces with our flooring expertise, leaving
              a lasting impression of beauty, durability, and comfort.
            </Text>
          </Box>
        </Flex>
        <Heading
          size={{ base: "xl", md: "2xl" }}
          textAlign="center"
          fontFamily="Saira Condensed"
          fontWeight="bold"
        >
          Our{" "}
          <Box as="span" display="inline-block" color="red" mr={2} my={8}>
            Culture
          </Box>
        </Heading>
        <Box ml={5}>
          <Heading
            as="h4"
            size={{ base: "sm", md: "lg" }}
            m={2}
            fontFamily="Saira Condensed"
            fontWeight="bold"
          >
            Transparency
          </Heading>
          <Box>
            <Text
              fontSize={{ base: "xs", md: "lg" }}
              fontFamily="Inter"
              lineHeight="1"
              px={2}
            >
              At SF Premier Flooring, we are committed to transparency in every
              aspect of our business. We believe in open and honest
              communication with our customers, employees, and partners. This
              means providing clear information about our products, pricing,
              installation processes, and environmental practices.
              <br />
              <br />
              Our goal is to build trust by sharing information openly, so our
              customers can make informed decisions about their flooring needs.
              We are dedicated to maintaining the highest standards of integrity
              and openness in all our interactions.
            </Text>
          </Box>
        </Box>
        <Box ml={5} mt={4}>
          <Heading
            as="h4"
            size={{ base: "sm", md: "lg" }}
            m={2}
            fontFamily="Saira Condensed"
            fontWeight="bold"
          >
            Devotion
          </Heading>
          <Box>
            <Text
              fontSize={{ base: "xs", md: "lg" }}
              fontFamily="Inter"
              lineHeight={1}
              px={2}
            >
              The devotion to our craft and customers is unwavering. We are
              deeply committed to delivering flooring solutions that exceed
              expectations in terms of quality, aesthetics, and functionality.
              <br />
              <br />
              Our passion for flooring is reflected in every project we
              undertake, from product selection to installation. We take pride
              in our dedication to creating beautiful and durable floors that
              enhance the spaces our customers cherish. Our team's devotion is
              the foundation upon which we build lasting relationships and
              flooring excellence.
            </Text>
          </Box>
        </Box>
        <Box my={100} textAlign="center">
          <EstimateButton size={"sm"} font={"sm"} width="400px" />
        </Box>
        <Image src={woodPhoto} sx={woodStyle} />
      </SimpleGrid>
    </>
  );
};

export default AboutPage;
