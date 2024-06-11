import { useParams } from "react-router-dom";
import { Container, Heading, Text, Box } from "@chakra-ui/react";
import { useQuery } from '@tanstack/react-query';
import { supabase } from '../integrations/supabase/index.js';

const fetchJobById = async (id) => {
  const { data, error } = await supabase
    .from('jobs')
    .select('*')
    .eq('id', id)
    .single();
  if (error) throw new Error(error.message);
  return data;
};

const JobDetail = () => {
  const { id } = useParams();
  const { data: job, error, isLoading } = useQuery(['job', id], () => fetchJobById(id));

  if (isLoading) {
    return (
      <Container maxW="container.xl" py={10}>
        <div>Loading...</div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container maxW="container.xl" py={10}>
        <div>Error: {error.message}</div>
      </Container>
    );
  }

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
        <Heading as="h1" size="2xl">{job.jobs_title}</Heading>
        <Text mt={4} fontSize="lg">{job.job_area}</Text>
        <Text mt={4}>{job.job_type}</Text>
      </Box>
    </Container>
  );
};

export default JobDetail;