import { Box, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack>
      <Box bg="#fff" pb={5} color="black" borderRadius="xl">
        <Image src={imageSrc} alt={title} borderRadius="xl" />
        <Box display="flex" flexDirection="column" gap={2} p={4}>
          <Heading as="h4" size="sm">
            {title}
          </Heading>
          <Text>{description}</Text>

          <HStack>
            <Text>See more</Text>
            <FontAwesomeIcon icon={faArrowRight} size="1x" />
          </HStack>
        </Box>
      </Box>
    </VStack>
  );
};

export default Card;
