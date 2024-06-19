import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiLock,
  FiSearch,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="Saas UI Landingspage"
        description="Free SaaS landingspage starter kit"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Performance Management for the <Br /> Next Generation
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Amplify Talent <Em>Develops Leaders</Em>
                <Br /> That Inspire Employee Loyalty <Br /> And Builds Culture
                Powered by <Em>AI</Em>
              </FallInPlace>
            }
          >
            {/* <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="28px" /> <ChakraLogo height="20px" />
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Sign Up
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="https://demo.saas-ui.dev"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                  View demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace> */}
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list.png"
                  layout="fixed"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Accountability",
            icon: FiSmile,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Equality",
            icon: FiSliders,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Transparency",
            icon: FiGrid,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Productivity",
            icon: FiThumbsUp,
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Visibility">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Leaders account for <Em>70%</Em> of the variance in their own
            team&#39;s engagement levels. Companies in the top-quartile of
            employee engagement levels outperform those in the bottom quartile
            by <Em>23%</Em>.
          </Text>

          {/* <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.900"
            _dark={{ bg: "gray.900" }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{" "}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex> */}
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Retention">
        <Text color="muted" fontSize="lg">
          Nearly <Em>6 out of 10</Em> employees are globally are quiet quitting.
          The global cost of quiet qutting is estimated to be{" "}
          <Em>$8.8 Trillion</Em>
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Renata Alink"
        description="Founder"
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “Amplify Talent helps me scale our performance-based culture by
        providing necessary controls to ensure we retain the right talent and
        reward those who deserve it.”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Start your next cycle with AI-powered insights"
      >
        <Text color="muted" fontSize="lg">
          We took care of all the hard-work so you can immediately start gaining
          valuable insights.
        </Text>
        <Wrap mt="8">
          {[
            "Sentiment Analysis",
            "Privacy Controls",
            "Alerting",
            "Dashboard",
            "Reporting",
            "Recommendations",
            "Performance Plans",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Not your standard
          <Br /> HR platform.
        </Heading>
      }
      description={
        <>
          Amplify Talent breaks the wheel in terms of employee reviews.
          <Br />
          Our platform helps companies identify discrepancies caused by poor
          leadership.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "AI-Powered.",
          icon: FiBox,
          description:
            "Our AI models can detect sentiment analysis on self/peer/manager reviews for accuracy.",
          variant: "inline",
        },
        {
          title: "Visibility.",
          icon: FiLock,
          description:
            "Our platorm can run analysis over time to inform people leaders about disconnects in reviews.",
          variant: "inline",
        },
        {
          title: "Privacy.",
          icon: FiSearch,
          description:
            "Our service ensure employee data is handled properly between all parties.",
          variant: "inline",
        },
        // {
        //   title: "Onboarding.",
        //   icon: FiUserPlus,
        //   description:
        //     "Add user onboarding flows, like tours, hints and inline documentation without breaking a sweat.",
        //   variant: "inline",
        // },
        // {
        //   title: "Feature flags.",
        //   icon: FiFlag,
        //   description:
        //     "Implement feature toggles for your billing plans with easy to use hooks. Connect Flagsmith, or other remote config services once you're ready.",
        //   variant: "inline",
        // },
        // {
        //   title: "Upselling.",
        //   icon: FiTrendingUp,
        //   description:
        //     "Components and hooks for upgrade flows designed to make upgrading inside your app frictionless.",
        //   variant: "inline",
        // },
        // {
        //   title: "Themes.",
        //   icon: FiToggleLeft,
        //   description:
        //     "Includes multiple themes with darkmode support, always have the perfect starting point for your next project.",
        //   variant: "inline",
        // },
        // {
        //   title: "Generators.",
        //   icon: FiTerminal,
        //   description:
        //     "Extend your design system while maintaininig code quality and consistency with built-in generators.",
        //   variant: "inline",
        // },
        // {
        //   title: "Monorepo.",
        //   icon: FiCode,
        //   description: (
        //     <>
        //       All code is available as packages in a high-performance{" "}
        //       <Link href="https://turborepo.com">Turborepo</Link>, you have full
        //       control to modify and adjust it to your workflow.
        //     </>
        //   ),
        //   variant: "inline",
        // },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []],
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        title: "Announcing our Series A funding! {blog link} 🚀 ",
        description: "",
        href: "https://amplifytalent.ai",
        action: false,
      },
    },
  };
}
