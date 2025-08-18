import ReserveSeat from "../components/Common/ReserveSeat";
import StoryCard from "../components/Cards/StoryCard";
import UniqueWorkshop from "../components/UniqueWorkshop";
import ComparisonCard from "../components/Cards/ComparisonCard";
import Header from "../components/Cards/Header";
import WorkshopSection from "../components/WorkshopSection";
import InfoBadge from "../components/Common/InfoBadge";
import InfoLines from "../components/InfoLines";
import Button from "../components/Common/Button";
import ImageCard from "../components/Cards/ImageCard";
import ImpactCard from "../components/Cards/ImpactCard";
import Accordion from "../components/Common/Accordion";
import Section from "../components/Common/Section";
import TextBlue from "../components/Common/TextBlue";
import Heading from "../components/Common/Heading";
import SubHeading from "../components/Common/SubHeading";
import YoutubeVideo from "../components/Common/YoutubeVideo";
import Carousel from "../components/Common/Carousel";
import VideoStories from "../components/VideoStories";
import MovingLogos from "../MovingLogos";
import BottomSection from "../components/BottomSection";
import WhiteButton from "../components/Common/WhiteButton";

declare var fbq: any;

const workShopData = {
    hour1: [
        {
            title: "Introduction and workshop goal.",
            description: "Welcome and brief agenda overview.",
            highlight: "Highlight the end goal: landing a tech job.",
        },
        {
            title: "Understanding the Tech Industry Landscape",
            description: "What roles exist in tech? \n Highlight the demand for web dev",
            highlight: "Why web development is an excellent starting point for beginners.",
        },
        {
            title: "The Basics of Web Development",
            description: "Explain the three core pillars i.e, HTML, CSS, JAVASCRIPT",
            highlight: "Build a basic webpage: a personal portfolio template.",
        },
        {
            title: "Addressing the “No Experience” Barrier",
            description: "Emphasize the importance of building projects for learning.",
            highlight: "Explain how “no degree” or “no prior coding” is not a limitation anymore.",
        },
    ],
    hour2: [
        {
            title: "Building Real-World Projects and Portfolios",
            description: "The importance of practical experience over certificates.",
            highlight: "Explain GitHub for showcasing projects to employers.",
        },
        {
            title: "Soft Skills and Aptitude Preparation",
            description: "Importance of problem-solving and logical reasoning.",
            highlight: "Communication tips for interviews and presentations.",
        },
        {
            title: "Roadmap to Your First Tech Job",
            description: "Breaking down the path: Learn, Build, Apply, Network.",
            highlight: "Provide personalized guidance, mentorship, and mock interviews.",
        },
        {
            title: "Live Q&A and Success Stories",
            description: "Share real-life success stories of cohort students who landed jobs.",
            highlight: "Address the audience’s burning questions.",
        },
    ],
};

const stories = [
    {
        image: "https://ik.imagekit.io/sheryians/CG-01/b83fa3bb-19a5-4dde-8f36-1f6dcdca4a73_SOn8AGiuy6.jpg?updatedAt=1736853707401",
        name: "Harsh Gupta",
        role: "Herbal Deck",
        story: "Attending this workshop was a game-changer for me. The hands-on approach and practical insights provided by the instructors helped me land my first tech job within months.",
    },
    {
        image: "https://ik.imagekit.io/sheryians/CG-01/aeb075bf-86a9-415b-9fb8-6eccb5c6c43e_6SIGkd6ql.jpg?updatedAt=1736853707176",
        name: "Shailja kumari",
        role: "Ashok Leyland",
        story: "This workshop provided me with the skills and confidence to pursue a career in frontend development. The instructors were knowledgeable and supportive throughout the process.",
    },
    {
        image: "https://ik.imagekit.io/sheryians/CG-01/95838c7e-a93c-48bb-8ef9-ffcf6c7d7803_KTipnPGBYw.jpg?updatedAt=1736853707475",
        name: "Sahil Gupta",
        role: "Flowdojo",
        story: "The workshop was incredibly informative and practical. I learned so much about the tech industry and how to build a strong portfolio. It was a fantastic experience.",
    },
    {
        image: "https://ik.imagekit.io/sheryians/CG-01/IMG_5845_nP_iYlCrk.jpg?updatedAt=1736853792609",
        name: "Shreya Sanodia",
        role: "Capgemini",
        story: "I was able to secure my first job in tech thanks to the guidance and support from this workshop. The instructors were amazing and the content was very relevant.",
    },
    {
        image: "https://ik.imagekit.io/sheryians/CG-01/IMG_5844_4l1aTz_r6.jpg?updatedAt=1736853792856",
        name: "Sahil Pandey",
        role: "Flowdojo",
        story: "This workshop was exactly what I needed to kickstart my career in tech. The practical exercises and real-world examples were extremely helpful.",
    },
    {
        image: "https://ik.imagekit.io/sheryians/CG-01/c76e5391-f343-4d08-b7e9-97f25b278d10_TltFjglXe2.jpg?updatedAt=1736853707080",
        name: "Ankit Jatav",
        role: "Techeunoia International",
        story: "The workshop was a turning point in my career. The practical knowledge and real-world examples provided were invaluable. I highly recommend it for anyone looking to get into tech.",
    },
];

const videoStories = ["https://sheryians.b-cdn.net/1.mp4", "https://sheryians.b-cdn.net/testimonials-2.mp4", "https://sheryians.b-cdn.net/3.mp4"];

const uniquePoints = [
    {
        title: "Comprehensive Guide",
        description: "Understand Major Tech paths like Artificial Intelligence, Full Stack, DevOps, Blockchain, Web3, Cloud Computing, etc.",
    },
    {
        title: "Recruitment Process",
        description: "Understand how big Tech Companies like Google, Microsoft & Facebook Hires, and how you can crack their Coding Interviews.",
    },
    {
        title: "Industry Insights",
        description: "Gain valuable Industry insights into the latest tech trends. Learn in-demand skills and stay ahead of competition.",
    },
    {
        title: "Crack your first Internship",
        description: "Find out how to stand out and secure your first Internship with expert guidance.",
    },
];

const companyLogos = [
    "https://ik.imagekit.io/sheryians/CG-01/logos/netflix_JzB-U6l3T.svg?updatedAt=1736836990299",
    "https://ik.imagekit.io/sheryians/CG-01/logos/samsung_vYctkTmbB.svg?updatedAt=1736836986917",
    "https://ik.imagekit.io/sheryians/CG-01/logos/paypal_BOzScyDk5C.svg?updatedAt=1736836987580",
    "https://ik.imagekit.io/sheryians/CG-01/logos/adobe_KwgwxM6muE.svg?updatedAt=1736836986710",
    "https://ik.imagekit.io/sheryians/CG-01/logos/discord_L9jHW5Hr8.svg?updatedAt=1736836990251",
    "https://ik.imagekit.io/sheryians/CG-01/logos/amazon_y2LWQJ3-JD.svg?updatedAt=1736836987763",
    "https://ik.imagekit.io/sheryians/CG-01/logos/flipkart_i1IqaKN1a.svg?updatedAt=1736836990430",
    "https://ik.imagekit.io/sheryians/CG-01/logos/walmart_74kmENTqu.svg?updatedAt=1736836990696",
    "https://ik.imagekit.io/sheryians/CG-01/logos/nvidia_-vrKByI8l5.svg?updatedAt=1736836986913",
    "https://ik.imagekit.io/sheryians/CG-01/logos/google_feVvZyxC__.svg?updatedAt=1736836987427",
    "https://ik.imagekit.io/sheryians/CG-01/logos/meta_mq7BGlg6i.svg?updatedAt=1736836986666",
    "https://ik.imagekit.io/sheryians/CG-01/logos/microsoft_UdKPVJD07x.svg?updatedAt=1736836986986",
];

const Landing = () => {
    return (
        <div className="bg-white gap-14 flex flex-col items-center justify-center font-apfel-grotezk pb-48">
            {/*** Header Section ***/}
            <Section noAnimition className="max-w-4xl overflow-x-visible">
                <Header />
                {/* <Logo /> */}
                <div className="flex flex-col items-center justify-center gap-4">
                    <Heading className="text-21xl">
                        Start Your{" "}
                        <TextBlue>
                            Tech <br />
                            Journey
                        </TextBlue>{" "}
                        In 2 Hours.
                    </Heading>
                    <SubHeading>Your first tech job is just one workshop away.</SubHeading>
                </div>

                <div className="px-[1rem] relative w-full">
                    <YoutubeVideo aspectRatio={16 / 11.3} videoId="9IwaS3nOnrs" />

                    <div className="text-left text-lg mq400:text-base flex mt-[1.5rem] w-full justify-around">
                        <div className="flex gap-2 ">
                            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[1.1rem]">
                                <path d="M8.19775 3.99629V8.22119L11.0144 9.62949M15.2393 8.22119C15.2393 12.1101 12.0867 15.2627 8.19775 15.2627C4.30884 15.2627 1.15625 12.1101 1.15625 8.22119C1.15625 4.33228 4.30884 1.17969 8.19775 1.17969C12.0867 1.17969 15.2393 4.33228 15.2393 8.22119Z" stroke="#0A6DF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="leading-[1.1875rem]">
                                <p className="m-0">2 Hours</p>
                                <p className="m-0">Workshop</p>
                            </div>
                        </div>
                        <div className="flex gap-2">
                            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="size-[1.1rem]">
                                <path d="M10.5345 1.17969V4.10857M4.67672 1.17969V4.10857M1.01562 7.03711H14.1956M2.48006 2.64453H12.7311C13.5399 2.64453 14.1956 3.30018 14.1956 4.10897V14.36C14.1956 15.1688 13.5399 15.8245 12.7311 15.8245H2.48006C1.67128 15.8245 1.01562 15.1688 1.01562 14.36V4.10897C1.01562 3.30018 1.67128 2.64453 2.48006 2.64453Z" stroke="#0A6DF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className=" leading-[1.1875rem]">
                                <p className="m-0">Starts at 12 PM IST on Aug</p>
                                <p className="m-0">24th Sunday</p>
                            </div>
                        </div>
                    </div>
                </div>

                <ReserveSeat
                    onClick={() => {
                        fbq("track", "AddToCart");
                        window.open("https://pages.razorpay.com/webinar-sheryians", "_blank");
                    }}
                    seatsLeft=" 16 seats left"
                />

                <div className="text-10xl mq400:text-7xl leading-[1.875rem] font-apfel-grotezk text-center inline-block overflow-hidden text-black px-[1.2rem]">
                    Learn the exact strategies that helped
                    <span className="text-limegreen"> 30,000+ </span>students build their career in <span className="text-royalblue-200 relative text-nowrap [text-shadow:0_0_0.225rem_rgba(10,109,240,0.5)]">IT Industry.</span>
                </div>
            </Section>

            {/*** Success Stories Section ***/}
            <Section className={`text-left py-[3.5rem] bg-lavender-100 overflow-hidden`}>
                <span className="ml-[1.75rem] text-11xl leading-[1.875rem] font-normal font-inherit inline-block text-center px-[0.75rem] mq786:text-left w-full">
                    Success Stories from <br /> Our Learners.
                </span>

                <Carousel>
                    {stories.map((story, index) => (
                        <StoryCard key={index} {...story} />
                    ))}
                </Carousel>
            </Section>

            {/*** Unique Workshop Section ***/}
            <Section className={`max-w-4xl px-[1.5rem] mt-[1.75rem]`}>
                <UniqueWorkshop uniquePoints={uniquePoints} />
                <div className="flex flex-col justify-between items-center gap-3">
                    <ReserveSeat
                        onClick={() => {
                            fbq("track", "AddToCart");
                            window.open("https://pages.razorpay.com/webinar-sheryians", "_blank");
                        }}
                        seatsLeft="4.67/5 Rating"
                    />
                    <svg width="170" height="26" viewBox="0 0 170 26" className="w-44" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.47375 25.6346C5.71719 26.0909 4.78382 25.4137 4.98294 24.5529L6.727 17.0132C6.81047 16.6524 6.68765 16.2749 6.40779 16.0323L0.557254 10.96C-0.110275 10.3813 0.245673 9.2846 1.12583 9.2082L8.86039 8.5368C9.22957 8.50475 9.55076 8.27118 9.69502 7.92984L12.6959 0.829449C13.0401 0.0151819 14.194 0.0151847 14.5382 0.829452L17.5391 7.92984C17.6833 8.27118 18.0045 8.50475 18.3737 8.5368L26.1083 9.2082C26.9884 9.2846 27.3444 10.3813 26.6769 10.96L20.8263 16.0323C20.5465 16.2749 20.4236 16.6524 20.5071 17.0132L22.2512 24.5529C22.4503 25.4137 21.5169 26.0909 20.7604 25.6346L14.1336 21.637C13.8159 21.4454 13.4182 21.4454 13.1005 21.637L6.47375 25.6346Z" fill="#0A6DF0" />
                        <path d="M42.1691 25.6346C41.4125 26.0909 40.4791 25.4137 40.6782 24.5529L42.4223 17.0132C42.5058 16.6524 42.383 16.2749 42.1031 16.0323L36.2526 10.96C35.585 10.3813 35.941 9.2846 36.8211 9.2082L44.5557 8.5368C44.9249 8.50475 45.2461 8.27118 45.3903 7.92984L48.3913 0.829449C48.7354 0.0151819 49.8893 0.0151847 50.2335 0.829452L53.2344 7.92984C53.3787 8.27118 53.6999 8.50475 54.069 8.5368L61.8036 9.2082C62.6837 9.2846 63.0397 10.3813 62.3722 10.96L56.5216 16.0323C56.2418 16.2749 56.1189 16.6524 56.2024 17.0132L57.9465 24.5529C58.1456 25.4137 57.2122 26.0909 56.4557 25.6346L49.8289 21.637C49.5112 21.4454 49.1135 21.4454 48.7958 21.637L42.1691 25.6346Z" fill="#0A6DF0" />
                        <path d="M77.8566 25.6346C77.1 26.0909 76.1666 25.4137 76.3658 24.5529L78.1098 17.0132C78.1933 16.6524 78.0705 16.2749 77.7906 16.0323L71.9401 10.96C71.2725 10.3813 71.6285 9.2846 72.5086 9.2082L80.2432 8.5368C80.6124 8.50475 80.9336 8.27118 81.0778 7.92984L84.0788 0.829449C84.4229 0.0151819 85.5768 0.0151847 85.921 0.829452L88.9219 7.92984C89.0662 8.27118 89.3874 8.50475 89.7565 8.5368L97.4911 9.2082C98.3712 9.2846 98.7272 10.3813 98.0597 10.96L92.2091 16.0323C91.9293 16.2749 91.8064 16.6524 91.8899 17.0132L93.634 24.5529C93.8331 25.4137 92.8997 26.0909 92.1432 25.6346L85.5164 21.637C85.1987 21.4454 84.801 21.4454 84.4833 21.637L77.8566 25.6346Z" fill="#0A6DF0" />
                        <path d="M113.544 25.6346C112.788 26.0909 111.854 25.4137 112.053 24.5529L113.797 17.0132C113.881 16.6524 113.758 16.2749 113.478 16.0323L107.628 10.96C106.96 10.3813 107.316 9.2846 108.196 9.2082L115.931 8.5368C116.3 8.50475 116.621 8.27118 116.765 7.92984L119.766 0.829449C120.11 0.0151819 121.264 0.0151847 121.608 0.829452L124.609 7.92984C124.754 8.27118 125.075 8.50475 125.444 8.5368L133.179 9.2082C134.059 9.2846 134.415 10.3813 133.747 10.96L127.897 16.0323C127.617 16.2749 127.494 16.6524 127.577 17.0132L129.321 24.5529C129.521 25.4137 128.587 26.0909 127.831 25.6346L121.204 21.637C120.886 21.4454 120.489 21.4454 120.171 21.637L113.544 25.6346Z" fill="#0A6DF0" />
                        <path d="M169.435 10.96C170.102 10.3813 169.746 9.2846 168.866 9.2082L161.132 8.5368C160.762 8.50475 160.441 8.27118 160.297 7.92984L158.453 3.56737V22.5791L163.518 25.6346C164.275 26.0909 165.208 25.4137 165.009 24.5529L163.265 17.0132C163.181 16.6524 163.304 16.2749 163.584 16.0323L169.435 10.96Z" fill="#0A6DF0" />
                        <path d="M169.435 10.96C170.102 10.3813 169.746 9.2846 168.866 9.2082L161.132 8.5368C160.762 8.50475 160.441 8.27118 160.297 7.92984L158.453 3.56737V22.5791L163.518 25.6346C164.275 26.0909 165.208 25.4137 165.009 24.5529L163.265 17.0132C163.181 16.6524 163.304 16.2749 163.584 16.0323L169.435 10.96Z" fill="#C2DDFF" />
                        <path d="M149.166 16.0323C149.445 16.2749 149.568 16.6524 149.485 17.0132L147.741 24.5529C147.542 25.4137 148.475 26.0909 149.232 25.6346L155.858 21.637C156.176 21.4454 156.574 21.4454 156.891 21.637L158.453 22.5791V3.56737L157.296 0.829452C156.952 0.0151849 155.798 0.015182 155.454 0.829449L152.453 7.92984C152.309 8.27118 151.987 8.50475 151.618 8.5368L143.884 9.2082C143.003 9.2846 142.648 10.3813 143.315 10.96L149.166 16.0323Z" fill="#C2DDFF" />
                        <path d="M149.166 16.0323C149.445 16.2749 149.568 16.6524 149.485 17.0132L147.741 24.5529C147.542 25.4137 148.475 26.0909 149.232 25.6346L155.858 21.637C156.176 21.4454 156.574 21.4454 156.891 21.637L158.453 22.5791V3.56737L157.296 0.829452C156.952 0.0151849 155.798 0.015182 155.454 0.829449L152.453 7.92984C152.309 8.27118 151.987 8.50475 151.618 8.5368L143.884 9.2082C143.003 9.2846 142.648 10.3813 143.315 10.96L149.166 16.0323Z" fill="#0A6DF0" />
                    </svg>
                </div>
            </Section>

            {/*** Company Logo ***/}
            <Section className="relative text-center text-xl text-black font-apfel-grotezk overflow-hidden w-screen">
                <Heading>
                    {" "}
                    Learners working in <br /> <TextBlue>Brands</TextBlue> like{" "}
                </Heading>

                <MovingLogos logos={companyLogos} />

                <div className="mt-8 w-full text-11xl text-dimgray-300 flex justify-center items-center px-6">
                    <div className="rounded-3xs bg-aliceblue-100 border-cornflowerblue-200 border-[0.0625rem] border-solid leading-[2rem] p-5 text-darkslategray-100/85">
                        You too can crack your <TextBlue>dream company</TextBlue>
                    </div>
                </div>
            </Section>

            {/*** Workshop Schedule Overview ***/}
            <Section className="overflow-x-visible">
                <Heading>
                    Here's how you will crack <br /> your first<TextBlue> job</TextBlue>
                </Heading>
                <WorkshopSection color={"#0a6df0"} hour="Hour 1" components={workShopData.hour1} />
                <WorkshopSection color={"#6571ff"} hour="Hour 2" components={workShopData.hour2} />
            </Section>

            {/*** Shaping Tech Futures Section ***/}
            <Section className="gap-7">
                <div className="flex flex-col gap-4">
                    <Heading>
                        Shaping <TextBlue>Tech Futures</TextBlue>, Trusted Across the World.
                    </Heading>
                    <SubHeading className="!font-apfel-grotezk text-gray-100">From learners to leaders - Empowering tech journeys worldwide.</SubHeading>
                </div>
                <div className="flex justify-around text-3xl text-[#0a6df0] gap-4 p-4 w-screen jb max-w-4xl">
                    <InfoBadge value="7+" title="Countries" />
                    <InfoBadge value="30K+" dark title="Learners" />
                    <InfoBadge value="4.6/5★" title="Rating" />
                </div>
            </Section>

            {/*** Comparison Section ***/}
            <Section className="gap-7 px-4">
                <div className="flex justify-center items-center gap-10 mq1024:gap-4 mq1024:flex-col">
                    <ComparisonCard withoutThis list={["You might stay stuck and waste valuable time.", "You might lose big career opportunities.", "Your self-confidence may keep dropping.", "You might end up with a boring and unsatisfying career."]} />
                    <ComparisonCard list={["You’ll get a clear and actionable career roadmap.", "You’ll be empowered to take decisive action immediately.", "You’ll understand the most in-demand roles and skills in tech.", "You’ll take a major step toward achieving your dream job."]} />
                </div>
            </Section>

            {/*** Pricing Section ***/}
            {/* <Section className="relative pt-10 pb-20 bg-steelblue text-white px-7">
        <div className="text-[2.375rem]">Pricing</div>
        <div className="overflow-hidden rounded-xl max-w-4xl mx-auto w-full">
          <div className="bg-royalblue-200 h-20 flex justify-center items-center px-5 gap-3">
            <span className="text-[2.1875rem]">
              ONLY ₹<span className="text-[2.5rem]">99</span>
            </span>
            <span className="text-[1.25rem] line-through font-normal font-inherit text-white">
              ₹999
            </span>
          </div>
          <div className="bg-white flex flex-col py-10 px-6 gap-10">
            <InfoLines icon="https://ik.imagekit.io/sheryians/CG-01/icons/clock_hMOZU50eSB.svg?updatedAt=1736836950896">
              2 Hours of Live, Career-Defining Guidance.
            </InfoLines>
            <InfoLines icon="https://ik.imagekit.io/sheryians/CG-01/icons/verified_YPiKyxro1.svg?updatedAt=1736836951020">
              Complete Career Clarity.
            </InfoLines>
            <InfoLines icon="https://ik.imagekit.io/sheryians/CG-01/icons/setting_aqjoZUt6_O.svg?updatedAt=1736836951034">
              Personalized Career Roadmap.
            </InfoLines>
            <InfoLines icon="https://ik.imagekit.io/sheryians/CG-01/icons/question_zIKscAXng.svg?updatedAt=1736836950820">
              Q&A with Us.
            </InfoLines>
            <InfoLines icon="https://ik.imagekit.io/sheryians/CG-01/icons/gift_Cdsme_9x6I.svg?updatedAt=1736836951090">
              Bonuses worth ₹10,000
            </InfoLines>
            <InfoLines icon="https://ik.imagekit.io/sheryians/CG-01/icons/certificate_O5O0aGiP7.svg?updatedAt=1736836951082">
              Certificate of Participation.
            </InfoLines>

            <div className="flex justify-center ">
              <Button
                onClick={() => {
                  fbq("track", "AddToCart");
                  window.open(
                    "https://pages.razorpay.com/webinar-sheryians",
                    "_blank"
                  );
                }}
              >
                Join the Workshop Now
              </Button>
            </div>
          </div>
        </div>
      </Section> */}
            <Section className="relative flex items-center flex-col gap-4 pt-10 pb-10 bg-gradient-to-t from-[#063F8A] to-[#0A6DF0] rounded-b-[0.8rem] text-white px-7">
                <h1 className="text-[2.5rem] leading-[1.1] mt-4 font-semibold text-white mb-2 text-center mb-6">Pricing</h1>
                <div className="overflow-hidden rounded-xl max-w-4xl mx-auto w-full bg-[#F2F8FF] p-4 ">
                    <div className="top bg-[#FFFFFF] border  border-solid border-[#DDDDDD] rounded-md text-black p-6 relative">
                        <div className="absolute top-6  right-4 bg-blue-100 text-black px-3 py-1 rounded-full text-[0.75rem] font-medium">Career</div>
                        <div className="text-gray-600 flex flex-col text-lg mb-2">
                            <h3 className="my-0">Pricing</h3>
                            <p className="my-0 opacity-65 font-medium">Workshop Career Plan</p>
                        </div>
                        <div className="flex items-baseline gap-2 mb-6">
                            <span className="text-[4rem] font-bold text-[#0077FF]">
                                <sup className="text-black text-[0.5em] font-normal">₹</sup>99
                            </span>
                            <span className="text-xl font-medium text-gray-400 relative">
                                <span>₹2999</span>
                                <span className="absolute left-0 right-0 w-full flex z-10 top-1/2 border-2 h-[1px] bg-black transform -rotate-12"></span>
                            </span>
                        </div>
                        <button
                            onClick={() => {
                                fbq("track", "AddToCart");
                                window.open("https://pages.razorpay.com/sheryians-webinar", "_blank");
                            }}
                            className="w-full bg-gradient-to-r from-[#204C87] to-[#0077FF] text-white py-4 px-6 rounded-full text-[1.1rem] font-medium hover:shadow-lg transition-all duration-300 shadow-lg shadow-[#76ADF6]">
                            Join the Workshop Now
                        </button>
                    </div>

                    <div className=" flex flex-col py-10 pb-2 gap-10">
                        <InfoLines icon="https://ik.imagekit.io/sheryians/CG-01/icons/clock_hMOZU50eSB.svg?updatedAt=1736836950896">2 Hours of Live, Career-Defining Guidance.</InfoLines>
                        <InfoLines icon="https://ik.imagekit.io/sheryians/CG-01/icons/verified_YPiKyxro1.svg?updatedAt=1736836951020">Complete Career Clarity.</InfoLines>
                        <InfoLines icon="https://ik.imagekit.io/sheryians/CG-01/icons/setting_aqjoZUt6_O.svg?updatedAt=1736836951034">Personalized Career Roadmap.</InfoLines>
                        <InfoLines icon="https://ik.imagekit.io/sheryians/CG-01/icons/question_zIKscAXng.svg?updatedAt=1736836950820">Q&A with Us.</InfoLines>
                        <InfoLines icon="https://ik.imagekit.io/sheryians/CG-01/icons/gift_Cdsme_9x6I.svg?updatedAt=1736836951090">Bonuses worth ₹10,000</InfoLines>
                        <InfoLines icon="https://ik.imagekit.io/sheryians/CG-01/icons/certificate_O5O0aGiP7.svg?updatedAt=1736836951082">Certificate of Participation.</InfoLines>
                    </div>
                </div>
            </Section>

            {/*** Mentor Section ***/}
            <Section className="px-7 mq1024:gap-5">
                <Heading className="text-start">
                    Get Inspired By Your <TextBlue>Mentor.</TextBlue>
                </Heading>

                <div className="flex flex-row mq1024:flex-col gap-10 px-12 mq1024:px-0 mq1024:gap-5 ">
                    <div className="w-full">
                        <img decoding="async" loading="lazy" className="object-cover rounded-3xs h-full w-full" src="https://ik.imagekit.io/sheryians/CG-01/harsh_MZZramqIeu.jpeg?updatedAt=1736836797358" alt="" />
                    </div>
                    <div className="w-full">
                        <div className="text-start w-full">
                            <span className="text-[2.1rem] leading-[1rem]">Harsh Sharma</span>
                            <br />
                            <TextBlue className="text-[1.45rem] leading-[1.8rem] ">Founder & CEO</TextBlue>
                        </div>

                        <div className="text-lg leading-[1.5625rem] capitalize mt-7 font-apfel-grotezk-base ">
                            Harsh Sharma is The visionary founder of <span className="font-apfel-grotezk">Sheryians Coding School</span>& has been transforming the education landscape for over <span className="font-apfel-grotezk">9 years</span>. Under his Guidance, over 50,000+ students have built their career in Tech and are working in top MNC’s like amazon, walmart, geeksforgeek, flipkart, TCS, Wipro, razorpay etc.
                            <br />
                            <br />
                            With over <span className="font-apfel-grotezk">575k followers </span>
                            across social media platforms, Harsh Sharma and his team are revolutionizing Tech education by making it fun, effective, and accessible through top-notch online and offline batches.
                            <br />
                            <br />
                            A mentor to countless students, he has played a pivotal role in guiding them toward successful placements in the tech industry, ensuring their careers thrive in competitive environments.
                            <br />
                            <br />
                            His commitment to empowering the next generation of developers is reflected in Sheryians Coding School’s ethos of teaching coding in the simplest & most engaging ways possible.
                        </div>
                    </div>
                </div>
            </Section>

            {/*** Video Stories Section ***/}
            <Section>
                <Heading>
                    Don't Believe Me? <br />
                    <TextBlue>Just Watch</TextBlue>
                </Heading>
                <VideoStories videoStories={videoStories} />
            </Section>

            {/*** Certificate Section ***/}

            {/*** Mockup Section ***/}
            {/* <Section>
                <Heading>
                    Where <TextBlue>Passion</TextBlue> Meets Progress Our Students in Action!
                </Heading>
                <Carousel navType={2}>
                    <ImageCard src="https://ik.imagekit.io/sheryians/CG-01/Frame%2041_93xehiTuIy.png?updatedAt=1736848422752" />
                    <ImageCard src="https://ik.imagekit.io/sheryians/CG-01/Frame%2044_R5_XSU8sX.png?updatedAt=1736848422501" />
                    <ImageCard src="https://ik.imagekit.io/sheryians/CG-01/Frame%2042_gFDPbp1L2.png?updatedAt=1736848422496" />
                    <ImageCard src="https://ik.imagekit.io/sheryians/CG-01/moc11_Upoz2QnJb.png?updatedAt=1736848422191" />
                </Carousel>
            </Section> */}

            {/*** Impact Section ***/}
            <Section>
                <Heading>
                    The <TextBlue>Impact</TextBlue> You Can See <br /> and Feel!
                </Heading>
                <div className="flex mq1024:flex-col pb-[1rem] items-center gap-10">
                    <ImpactCard imageSrc="https://plus.unsplash.com/premium_vector-1720884441870-91fb2d333ced?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8am9ifGVufDB8MHwwfHx8MA%3D%3D" title="Achieve Your Dream Tech Job Faster" info="Unlock your potential and build a successful career in tech." />
                    <ImpactCard imageSrc="https://plus.unsplash.com/premium_vector-1734618352115-dbfe32e18b35?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvZGluZyUyMHByb2JsZW18ZW58MHwwfDB8fHww" title="Boost confidence in solving coding problems" info="Gain hands-on experience and confidence to tackle real-world coding challenges." />
                    <ImpactCard imageSrc="https://plus.unsplash.com/premium_vector-1683141067775-083bef0a5aa2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHxidWlsZCUyMGNvbm5lY3Rpb25zfGVufDB8MHwwfHx8MA%3D%3D" title="Build Connections with Like-minded Individuals." info="Build valuable connections with mentors and peers for mutual learning." />
                </div>
            </Section>

            {/*** Join Now Section ***/}
            {/* <Section className="bg-[url('https://ik.imagekit.io/sheryians/CG-01/joinBg_pp5PdKGyX5.png?updatedAt=1736836797612')] bg-cover bg-center px-8  ">
        <div className="text-white text-[1.125rem] font-apfel-grotezk-base py-10 flex flex-col gap-4 pe-8">
          <div className="text-17xl font-apfel-grotezk">
            Still not convinced?
          </div>
          <div className="leading-[2.3125rem]">
            Go to Youtube or Instagram
            <br />
            Search for #Sheryians coding school
          </div>
          <div>
            You'll have more than enough proof of what this workshop can do for
            you!
          </div>

          <div
            onClick={() => {
              fbq("track", "AddToCart");
              window.open(
                "https://pages.razorpay.com/webinar-sheryians",
                "_blank"
              );
            }}
            className="bg-white text-black text-[1.375rem] text-center rounded-full font-apfel-grotezk py-2 my-4 "
          >
            Join Now
          </div>
        </div>
      </Section> */}
            <Section className="bg-gradient-to-t to-[#0A6DF0] from-[#063F8A] rounded-b-2xl text-white flex flex-col items-center gap-6 py-10 px-0 pt-3 pb-14">
                <div className="text-white text-[1.125rem]  py-10 flex flex-col items-center gap-4 text-center px-2">
                    <div className="text-[3rem] leading-[1.1] font-semibold">
                        Still not <br /> convinced?
                    </div>
                    <p className="font-light text-md px-4 my-0">Go to Youtube or Instagram, Search for #Sheryians coding school. You'll have more than enough proof of what this workshop can do for you!</p>
                    <WhiteButton
                        onClick={() => {
                            fbq("track", "AddToCart");
                            window.open("https://pages.razorpay.com/sheryians-webinar", "_blank");
                        }}>
                        Join Now
                    </WhiteButton>
                </div>

                <img className="w-full" src="https://ik.imagekit.io/sheryians/training-page/ZenBook%20Duo%2014_pEKXI5inW.png" alt="" />
            </Section>
            {/*** FAQ Section ***/}
            <Section>
                <div className="text-left px-8 w-full">
                    <div className="text-[2.0625rem] leading-[2.3125rem]">
                        {" "}
                        Frequently Asked <br className="hidden mq1024:block" /> Question{" "}
                    </div>
                    <div className=" text-gray-300 text-[1.1875rem]"> Or drop email at </div>
                    <a href="mailto:hello@sheryians.com" className="text-xl text-royalblue-200 no-underline leading-10">
                        hello@sheryians.com
                    </a>
                </div>

                <div className="flex flex-col gap-7">
                    <Accordion question="Will I need any prior coding experience for this workshop?">No, you don't need any prior coding experience. We'll start with the basics and guide you through the core concepts. The workshop is designed to be accessible to everyone, regardless of their background.</Accordion>

                    <Accordion question="What is this workshop about?">This workshop is designed to kickstart your tech career in just 2 hours! You’ll learn essential strategies, understand the industry landscape, and get a roadmap to landing your first tech job. We'll cover core programming concepts, address the "no experience" barrier, and guide you through building a portfolio.</Accordion>

                    <Accordion question="Who is this workshop for?">This workshop is perfect for anyone interested in starting a career in tech, whether you're a complete beginner, career changer, or looking to level up your skills. No prior coding experience or degree is required. If you have the desire to work in a technical role, this workshop is for you.</Accordion>

                    <Accordion question="What is covered in the 2 hours?">We'll cover core programming concepts, address the "no experience" barrier, and guide you through building a portfolio.</Accordion>

                    <Accordion question="Will I receive any materials or resources after the workshop?">Yes, you'll receive a certificate of participation. Additional resources may be shared during or after the workshop.</Accordion>
                </div>
            </Section>

            <BottomSection />
        </div>
    );
};

export default Landing;
