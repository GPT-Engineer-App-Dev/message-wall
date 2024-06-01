import { useState } from "react";
import { Container, VStack, Box, Heading, Text, FormControl, FormLabel, Input, Textarea, Button, HStack } from "@chakra-ui/react";
import { format } from "date-fns";

const Index = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      title,
      content,
      timestamp: new Date(),
    };
    setPosts([newPost, ...posts]);
    setTitle("");
    setContent("");
  };

  return (
    <Container maxW="container.md" py={4}>
      <HStack justifyContent="space-between" mb={4}>
        <Heading as="h1" size="lg">Public Post Board</Heading>
      </HStack>
      <Box as="form" onSubmit={handleSubmit} mb={8}>
        <FormControl id="title" mb={4} isRequired>
          <FormLabel>Title</FormLabel>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <FormControl id="content" mb={4} isRequired>
          <FormLabel>Content</FormLabel>
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </FormControl>
        <Button type="submit" colorScheme="blue">Post</Button>
      </Box>
      <VStack spacing={4}>
        {posts.map((post, index) => (
          <Box key={index} p={4} borderWidth="1px" borderRadius="md" w="100%">
            <Heading as="h3" size="md" mb={2}>{post.title}</Heading>
            <Text mb={2}>{post.content}</Text>
            <Text fontSize="sm" color="gray.500">{format(new Date(post.timestamp), 'PPpp')}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;