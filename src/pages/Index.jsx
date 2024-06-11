import { useState } from "react";
import { Container, VStack, Text, Button, HStack, Box, SimpleGrid, Heading } from "@chakra-ui/react";

const jobs = [
  { id: 1, title: "Product Manager", category: "Product" },
  { id: 2, title: "UX Designer", category: "Design" },
  { id: 3, title: "Frontend Engineer", category: "Engineering" },
  { id: 4, title: "Backend Engineer", category: "Engineering" },
  { id: 5, title: "Product Designer", category: "Design" },
];

const Index = () => {
  const [filter, setFilter] = useState("All");

  const filteredJobs = filter === "All" ? jobs : jobs.filter(job => job.category === filter);

  return (
    <Container maxW="container.xl" py={10}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl">Remote Tech Jobs</Heading>
        <HStack spacing={4}>
          <Button colorScheme="blue" onClick={() => setFilter("All")}>All</Button>
          <Button colorScheme="blue" onClick={() => setFilter("Product")}>Product</Button>
          <Button colorScheme="blue" onClick={() => setFilter("Design")}>Design</Button>
          <Button colorScheme="blue" onClick={() => setFilter("Engineering")}>Engineering</Button>
        </HStack>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
          {filteredJobs.map(job => (
            <Box key={job.id} p={5} shadow="md" borderWidth="1px" borderRadius="md">
              <Heading fontSize="xl">{job.title}</Heading>
              <Text mt={4}>{job.category}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;