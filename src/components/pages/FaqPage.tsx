import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Divider,
  HStack,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
// import Carousel from "../Carousel";

const titleFont = {
  fontFamily: "Saira Condensed",
};

const bodyFont = {
  fontFamily: "Inter",
  lineHeight: "1",
  fontSize: { base: "12px", md: "16px" },
  fontWeight: "300",
  paddingBottom: "4px",
};

const subHeading = {
  fontFamily: "Saira Condensed",
  fontWeight: "500",
  fontSize: { md: "20px" },
};
const FaqPage = () => {
  return (
    <>
      <Container maxW="container.xl" height={"85vh"}>
        <Heading
          size={{ base: "xl", md: "2xl" }}
          textAlign="center"
          sx={titleFont}
          noOfLines={1}
          my={8}
        >
          <Box as="span" color="red">
            Questions?{" "}
          </Box>
          Look Here
        </Heading>
        <SimpleGrid my={10}>
          <Accordion allowMultiple>
            <AccordionItem my={4}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <HStack>
                      <Heading
                        borderLeft={"3px solid red"}
                        pl={2}
                        as="h4"
                        size={{ base: "md", md: "lg" }}
                        sx={titleFont}
                      >
                        Why is Repairing Damaged Subfloors Important?
                      </Heading>
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} sx={bodyFont}>
                Replacing a damaged subfloor is crucial for several reasons.
                First and foremost, the subfloor serves as the foundation for
                your entire flooring structure. If it's compromised, it can lead
                to uneven floors, structural instability, and safety hazards.
                <br />
                <br />
                Additionally, damaged subfloor can impact the integrity of your
                surface flooring, causing it to crack, warp, or wear unevenly.
                Damaged subfloors can lead to moisture infiltration, which can
                result in mold growth, rot, and further deterioration.
                <br />
                <br />
                By replacing a damaged subfloor, you ensure a stable foundation,
                maintain the structural integrity of your home, and prevent
                potential health and safety risks.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem my={4}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <HStack>
                      <Heading
                        borderLeft={"3px solid red"}
                        pl={2}
                        as="h4"
                        size={{ base: "md", md: "lg" }}
                        sx={titleFont}
                      >
                        What are the key benefits of tile flooring?
                      </Heading>
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Accordion allowMultiple>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box
                          as="span"
                          flex="1"
                          textAlign="left"
                          sx={subHeading}
                        >
                          Durability
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} sx={bodyFont}>
                      Ceramic tiles are incredibly durable and can withstand
                      heavy foot traffic, making them perfect for high-traffic
                      areas like kitchens, hallways, and entryways.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <HStack>
                            <Text sx={subHeading}>Variety of Styles</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} sx={bodyFont}>
                      They come in an extensive range of colors, patterns, and
                      sizes, allowing you to achieve various looks and styles to
                      match your decor.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <HStack>
                            <Text sx={subHeading}>Easy Maintenance</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} sx={bodyFont}>
                      Ceramic tiles are easy to clean and maintain. Spills,
                      stains, and dirt can be wiped away quickly, and regular
                      sweeping or mopping keeps them looking great.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <HStack>
                            <Text sx={subHeading}>
                              Water and Moisture Resistance
                            </Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} sx={bodyFont}>
                      Ceramic tiles are naturally resistant to water and
                      moisture, making them an ideal choice for bathrooms,
                      kitchens, and other areas prone to spills.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <HStack>
                            <Text sx={subHeading}>Hypoallergenic</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} sx={bodyFont}>
                      Unlike carpets, ceramic tiles don't trap allergens like
                      dust, pet dander, or pollen, contributing to better indoor
                      air quality.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <HStack>
                            <Text sx={subHeading}>Longevity</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} sx={bodyFont}>
                      With proper installation and care, ceramic tile flooring
                      can last for decades, making it a cost-effective long-term
                      option.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <HStack>
                            <Text sx={subHeading}>Heat Resistance</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} sx={bodyFont}>
                      Ceramic tiles are heat-resistant, which makes them
                      suitable for areas near stoves, fireplaces, or outdoor
                      spaces.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <HStack>
                            <Text sx={subHeading}>
                              Environmentally Friendly
                            </Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} sx={bodyFont}>
                      Many ceramic tiles are made from natural materials, and
                      they have a low impact on indoor air quality. Some tiles
                      even contain recycled content.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <HStack>
                            <Text sx={subHeading}>Value Addition</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} sx={bodyFont}>
                      Installing ceramic tile flooring can increase the resale
                      value of your home due to its durability and timeless
                      appeal.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem my={4}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <HStack>
                      <Heading
                        borderLeft={"3px solid red"}
                        pl={2}
                        as="h4"
                        size={{ base: "md", md: "lg" }}
                        sx={titleFont}
                      >
                        Is there a difference between Luxury vinyl plank (LVP)
                        and Laminate?
                      </Heading>
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                <Box as="span" ml={3} sx={bodyFont}>
                  <Box as="span" fontWeight={700} fontSize={16} mr={3}>
                    LVP:
                  </Box>{" "}
                  Made from synthetic materials like PVC (polyvinyl chloride)
                  with a photographic layer that mimics the appearance of wood
                  or stone.
                </Box>
                <Divider my={3} />
                <Box as="span" sx={bodyFont} ml={3}>
                  <Box as="span" fontWeight={700} fontSize={16} mr={3}>
                    Laminate:
                  </Box>{" "}
                  Comprised of fiberboard with a printed layer that imitates
                  wood or stone, topped with a protective layer.
                </Box>
                <Accordion allowMultiple my={3}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <HStack>
                            <Text sx={subHeading}>Water Resistance</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} sx={bodyFont}>
                      <Box as="span" fontStyle="italic" mr={1}>
                        LVP:
                      </Box>{" "}
                      Highly water-resistant, making it suitable for areas prone
                      to moisture, like bathrooms and kitchens.
                      <Divider my={3} />
                      <Box as="span" fontStyle="italic" mr={1}>
                        Laminate:
                      </Box>{" "}
                      Not as water-resistant as LVP, making it less ideal for
                      areas with high moisture.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <HStack>
                            <Text sx={subHeading}>Durability</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} sx={bodyFont}>
                      <Box as="span" fontStyle="italic" mr={1}>
                        LVP:
                      </Box>{" "}
                      Extremely durable and resistant to scratches, dents, and
                      stains, suitable for high-traffic areas.
                      <Divider my={3} />
                      <Box as="span" fontStyle="italic" mr={1}>
                        Laminate:
                      </Box>{" "}
                      Durable, but more prone to scratches and wear over time,
                      especially in high-traffic areas.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <HStack>
                            <Text sx={subHeading}>Appearance</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} sx={bodyFont}>
                      <Box as="span" fontStyle="italic" mr={1}>
                        LVP:
                      </Box>{" "}
                      Offers a wide variety of realistic wood or stone looks
                      with various textures and colors.
                      <Divider my={3} />
                      <Box as="span" fontStyle="italic" mr={1}>
                        Laminate:
                      </Box>{" "}
                      Comes in a broad range of designs and styles, but may not
                      have the same level of realism as LVP.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <HStack>
                            <Text sx={subHeading}>Comfort</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} sx={bodyFont}>
                      <Box as="span" fontStyle="italic" mr={1}>
                        LVP:
                      </Box>{" "}
                      Generally more comfortable underfoot due to its softer and
                      more cushioned surface.
                      <Divider my={3} />
                      <Box as="span" fontStyle="italic" mr={1}>
                        Laminate:
                      </Box>{" "}
                      Harder surface compared to LVP, which may feel less
                      comfortable underfoot.
                    </AccordionPanel>
                  </AccordionItem>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <HStack>
                            <Text sx={subHeading}>Price</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4} sx={bodyFont}>
                      <Box as="span" fontStyle="italic" mr={1}>
                        LVP:
                      </Box>{" "}
                      Can be slightly more expensive than laminate, but the
                      price varies based on the quality and brand.
                      <Divider my={3} />
                      <Box as="span" fontStyle="italic" mr={1}>
                        Laminate:
                      </Box>{" "}
                      Usually a more budget friendly option compared to LVP.
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem my={4}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <HStack>
                      <Heading
                        borderLeft={"3px solid red"}
                        pl={2}
                        as="h4"
                        size={{ base: "md", md: "lg" }}
                        sx={titleFont}
                      >
                        How long does a project take to complete?
                      </Heading>
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} sx={bodyFont}>
                That varies on the size of the project, but we at SF Premier
                Flooring ensure that along with our quality assurance that we
                work efficiently and effectively to complete whatever size
                project in a timely manner.
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem my={4}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    <HStack>
                      <Heading
                        borderLeft={"3px solid red"}
                        pl={2}
                        as="h4"
                        size={{ base: "md", md: "lg" }}
                        sx={titleFont}
                      >
                        Can you lay laminate/ luxury vinyl on existing floor?
                      </Heading>
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4} sx={bodyFont}>
                There are certain floors that you are able to lay
                laminate/luxury vinyl on top of existing floors. It mostly
                depends on the condition of the floor beneath what you’re
                laying.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </SimpleGrid>
      </Container>
      {/* <Carousel></Carousel> */}
    </>
  );
};

export default FaqPage;
