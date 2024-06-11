import { useState } from "react";
import { Container, VStack, Text, Button, HStack, Box, SimpleGrid, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom"; // Import Link from react-router-dom
import { useJobs } from "../integrations/supabase/index.js";

const Index = () => {
  const [filter, setFilter] = useState("All");
  const { data: jobs, error, isLoading } = useJobs();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const filteredJobs = filter === "All" ? jobs : jobs.filter(job => job.job_area === filter);

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
              <Heading fontSize="xl">
                <Link as={RouterLink} to={`/job/${job.id}`}>{job.jobs_title}</Link>
              </Heading>
              <Text mt={4}>{job.job_area}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;