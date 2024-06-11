import { useParams } from "react-router-dom";
import { Container, Heading, Text, Box } from "@chakra-ui/react";

const jobs = [
  { id: 1, title: "Product Manager", category: "Product", description: "Manage product lifecycle and roadmap." },
  { id: 2, title: "UX Designer", category: "Design", description: "Design user interfaces and experiences." },
  { id: 3, title: "Frontend Engineer", category: "Engineering", description: "Develop and maintain the frontend of applications." },
  { id: 4, title: "Backend Engineer", category: "Engineering", description: "Develop and maintain the backend of applications." },
  { id: 5, title: "Product Designer", category: "Design", description: "Design products from concept to completion." },
];

const JobDetail = () => {
  const { id } = useParams();
  const job = jobs.find(job => job.id === parseInt(id));

  if (!job) {
    return (
      <Container maxW="container.xl" py={10}>
        <Heading as="h1" size="2xl">Job Not Found</Heading>
      </Container>
    );
  }

  return (
    <Container maxW="container.xl" py={10}>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
        <Heading as="h1" size="2xl">{job.title}</Heading>
        <Text mt={4} fontSize="lg">{job.category}</Text>
        <Text mt={4}>{job.description}</Text>
      </Box>
    </Container>
  );
};

export default JobDetail;