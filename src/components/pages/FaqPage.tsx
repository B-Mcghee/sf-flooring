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

const FaqPage = () => {
  return (
    <>
      <Container maxW="container.xl">
        <Heading fontSize="3xl" textAlign="center">
          <Text display="inline-block" color="red" mr={2} my={8}>
            Questions?
          </Text>
          Look Here
        </Heading>
        <SimpleGrid>
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
                        fontSize="xl"
                      >
                        Why is Repairing Damaged Subfloors Important?
                      </Heading>
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Replacing a damaged subfloor is crucial for several reasons.
                First and foremost, the subfloor serves as the foundation for
                your entire flooring structure. If it's compromised, it can lead
                to uneven floors, structural instability, and safety hazards.
                <br />
                Additionally, damaged subfloor can impact the integrity of your
                surface flooring, causing it to crack, warp, or wear unevenly.
                Damaged subfloors can lead to moisture infiltration, which can
                result in mold growth, rot, and further deterioration.
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
                        fontSize="xl"
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
                        <Box as="span" flex="1" textAlign="left">
                          <HStack>
                            <Text fontWeight="semibold">Durability</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
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
                            <Text fontWeight="semibold">Variety of Styles</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
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
                            <Text fontWeight="semibold">Easy Maintenance</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
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
                            <Text fontWeight="semibold">
                              Water and Moisture Resistance
                            </Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
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
                            <Text fontWeight="semibold">Hypoallergenic</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
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
                            <Text fontWeight="semibold">Longevity</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
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
                            <Text fontWeight="semibold">Heat Resistance</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
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
                            <Text fontWeight="semibold">
                              Environmentally Friendly
                            </Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
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
                            <Text fontWeight="semibold">Value Addition</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
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
                        fontSize="xl"
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
                <Box as="span" fontWeight="light" fontStyle="italic" ml={4}>
                  LVP: Made from synthetic materials like PVC (polyvinyl
                  chloride) with a photographic layer that mimics the appearance
                  of wood or stone.
                </Box>
                <Divider my={3} />
                <Box as="span" fontWeight="light" fontStyle="italic" ml={4}>
                  Laminate: Comprised of fiberboard with a printed layer that
                  imitates wood or stone, topped with a protective layer.
                </Box>
                <Accordion allowMultiple my={3}>
                  <AccordionItem>
                    <h2>
                      <AccordionButton>
                        <Box as="span" flex="1" textAlign="left">
                          <HStack>
                            <Text fontWeight="semibold">Water Resistance</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
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
                            <Text fontWeight="semibold">Durability</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
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
                            <Text fontWeight="semibold">Appearance</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
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
                            <Text fontWeight="semibold">Comfort</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
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
                            <Text fontWeight="semibold">Price</Text>
                          </HStack>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>
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
                        fontSize="xl"
                      >
                        How long does a project take to complete?
                      </Heading>
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
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
                        fontSize="xl"
                      >
                        Can you lay laminate/ luxury vinyl on existing floor?
                      </Heading>
                    </HStack>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                There are certain floors that you are able to lay
                laminate/luxury vinyl on top of existing floors. It mostly
                depends on the condition of the floor beneath what you’re
                laying.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default FaqPage;
