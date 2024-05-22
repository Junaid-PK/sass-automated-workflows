import { CardBody, CardContainer, CardItem } from "@/components/commons/3DCard";
import { ContainerScroll } from "@/components/commons/Container-Scroll-Animation";
import { HeroParallax } from "@/components/commons/HeroParallax";
import { InfiniteMovingCards } from "@/components/commons/InfiniteMovingCards";
import { LampComponent } from "@/components/commons/LampComponent";
import Navbar from "@/components/commons/Navbar";
import { Button } from "@/components/ui/button";
import { clients, products } from "@/lib/contants";
import { CheckIcon } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Navbar />
      <section className="h-screen w-full bg-neutral-950 rounded-md !overflow-visible relative flex flex-col items-center antialiased">
        <div className="absolute inset-0 h-full w-full items-center px-5 py-24 [background: radial-gradient:(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div className="flex flex-col items-center justify-center">
                <Button
                  size={"lg"}
                  className="p-8 mb-8 md:mb-0 text-2xl w-full sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-white hover:text-black bg-gradient-to-r from-neutran-500 to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                    Start for free today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate Your Work With Fuzzie
                </h1>
              </div>
            }
          />
        </div>
      </section>
      <InfiniteMovingCards
        className="mt-[-10px] md:mt-[25rem]"
        items={clients}
        direction="right"
        speed="slow"
      />
      <section>
        <HeroParallax products={products} />
      </section>
      <section className="mt-[-500px]">
        <LampComponent />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Hobby
                <h2 className="text-6xl">$0</h2>
              </CardItem>
              <CardItem
                translateZ={60}
                className="text-sm max-w-sm mt-2 text-neutral-500 dark:text-neutral-300"
              >
                Get a glimpse of what Fuzzie can do for you. Just a heads up,{" "}
                {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-6 h-6" /> 3 Free Automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-6 h-6" /> 100 Free Tasks
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-6 h-6" /> Two Step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2  rounded-xl text-xs font-normal dark:text-white"
                >
                  Try Now {"->"}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black font-bold text-xs"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Pro Plan
                <h2 className="text-6xl">$29</h2>
              </CardItem>
              <CardItem
                translateZ={60}
                className="text-sm max-w-sm mt-2 text-neutral-500 dark:text-neutral-300"
              >
                Get a glimpse of what Fuzzie can do for you. Just a heads up,{" "}
                {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-6 h-6" /> 3 Free Automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-6 h-6" /> 100 Free Tasks
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-6 h-6" /> Two Step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2  rounded-xl text-xs font-normal dark:text-white"
                >
                  Try Now {"->"}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black font-bold text-xs"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          <CardContainer className="inter-var">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl p-6 border">
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Business Plan
                <h2 className="text-6xl">$99</h2>
              </CardItem>
              <CardItem
                translateZ={60}
                className="text-sm max-w-sm mt-2 text-neutral-500 dark:text-neutral-300"
              >
                Get a glimpse of what Fuzzie can do for you. Just a heads up,{" "}
                {"you'll"} never leave us after this!
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-6 h-6" /> 3 Free Automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-6 h-6" /> 100 Free Tasks
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon className="w-6 h-6" /> Two Step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2  rounded-xl text-xs font-normal dark:text-white"
                >
                  Try Now {"->"}
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  className="px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black font-bold text-xs"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
      </section>
    </main>
  );
}
