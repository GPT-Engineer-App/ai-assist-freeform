import { Box, Button, Container, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import { FaRocket, FaRobot, FaChartLine, FaComments } from "react-icons/fa";

const Index = () => {
  return (
    <>
      {/* Navbar */}
      <Box as="nav" bg="white" boxShadow="md" p={4}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmcmVlZm9ybSUyMGxvZ298ZW58MHx8fHwxNzExODQzMTM3fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Freeform logo" h={8} />
            <Stack direction="row" spacing={8} align="center">
              <Link href="#pricing">Pricing</Link>
              <Link href="#templates">Templates</Link>
              <Link href="#login">Login</Link>
              <Button colorScheme="blue">Sign up for free</Button>
            </Stack>
          </Flex>
        </Container>
      </Box>

      {/* Hero */}
      <Box bg="gray.50" py={20}>
        <Container maxW="container.lg">
          <Stack spacing={8} align="center" textAlign="center">
            <Heading as="h1" size="2xl">
              Your AI-powered{" "}
              <Text as="span" bgGradient="linear(to-r, blue.500, purple.500)" bgClip="text">
                assistant
              </Text>
            </Heading>
            <Text fontSize="xl" maxW="600px">
              Freeform is your no-code AI assistant that helps you create content, automate tasks, and build apps in seconds.
            </Text>
            <Button colorScheme="blue" size="lg">
              Try Freeform for Free
            </Button>
            <Image src="https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxhaSUyMGFzc2lzdGFudCUyMGlsbHVzdHJhdGlvbnxlbnwwfHx8fDE3MTE4NDMxMzd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="AI assistant" />
          </Stack>
        </Container>
      </Box>

      {/* Features */}
      <Box py={20}>
        <Container maxW="container.lg">
          <Stack spacing={20}>
            <Stack spacing={4} align="center" textAlign="center">
              <Heading size="xl">Powerful building blocks at your fingertips</Heading>
              <Text fontSize="lg" maxW="600px">
                Freeform provides an intuitive interface to harness the power of AI for content, automation and apps.
              </Text>
            </Stack>
            <Stack spacing={10}>
              <Stack direction={["column", "row"]} spacing={10} justify="center">
                <Feature icon={<FaRocket />} title="Rocket-speed generation" description="Create full articles, web pages and apps in seconds with AI." />
                <Feature icon={<FaRobot />} title="Your personal AI" description="Freeform learns and adapts to your needs to be your perfect assistant." />
                <Feature icon={<FaChartLine />} title="Measurable results" description="Analytics to track engagement and performance of your AI creations." />
              </Stack>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* CTA */}
      <Box bgGradient="linear(to-r, blue.500, purple.500)" py={20} color="white">
        <Container maxW="container.lg">
          <Stack spacing={8} align="center" textAlign="center">
            <Heading size="2xl">Start creating with Freeform today</Heading>
            <Button size="lg" colorScheme="whiteAlpha">
              Sign up for free
            </Button>
            <Text fontSize="lg" maxW="600px">
              Join the waitlist and be the first to experience the power of no-code AI.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Box bg="gray.800" py={10} color="white">
        <Container maxW="container.lg">
          <Stack direction={["column", "row"]} spacing={8} justify="space-between">
            <Stack spacing={4}>
              <Image src="https://images.unsplash.com/photo-1596275281743-e7399c7bdfa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmcmVlZm9ybSUyMGxvZ28lMjB3aGl0ZXxlbnwwfHx8fDE3MTE4NDMxMzh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Freeform logo" h={8} />
              <Text>&copy; Freeform AI 2023</Text>
            </Stack>
            <Stack spacing={2}>
              <Text fontWeight="bold">Product</Text>
              <Link href="#">Pricing</Link>
              <Link href="#">Templates</Link>
              <Link href="#">Inspiration</Link>
            </Stack>
            <Stack spacing={2}>
              <Text fontWeight="bold">Company</Text>
              <Link href="#">About</Link>
              <Link href="#">Terms</Link>
              <Link href="#">Privacy</Link>
            </Stack>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

const Feature = ({ icon, title, description }) => {
  return (
    <Stack spacing={4} align="center" textAlign="center">
      <Box fontSize="4xl">{icon}</Box>
      <Heading size="md">{title}</Heading>
      <Text>{description}</Text>
    </Stack>
  );
};

export default Index;
