import {
    ArrowDownRight,
    ArrowRight,
    ArrowUpRight,
    CalendarDays,
    Car,
    ChevronRight,
    Clock3,
    Compass,
    Mail,
    MapPin,
    Store,
    Utensils,
    Waves,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { Header } from "../components/layout/Header";
import { MobileMenu } from "../components/layout/MobileMenu";
import { Hero } from "@/components/home/Hero";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

const images = {
    hero: "/images/Library - 4 of 4.jpeg",
    exterior: "/images/DSC00274.jpg",
    stairOne: "/images/Library - 1 of 4.jpeg",
    stairTwo: "/images/Library - 2 of 4.jpeg",
    stairWide: "/images/Library - 3 of 4.jpeg",
    cinema: "/images/DSC00234.jpg",
    shopping: [
        "/images/DSC00190.jpg",
        "/images/DSC00243.jpg",
        "/images/DSC00191.jpg",
        "/images/DSC00193.jpg",
    ],
    dining: [
        "/images/DSC00231.jpg",
        "/images/DSC00229.jpg",
        "/images/DSC00224.jpg",
    ],
};

const stores = [
    ["KFC", "Dining", "/images/DSC00231.jpg", "Ground Floor"],
    ["Cargills Food City", "Groceries", "/images/DSC00237.jpg", "Basement"],
    ["Exclusive Lines", "Fashion", "/images/DSC00243.jpg", "2nd Floor"],
    ["Majestic Cineplex", "Entertainment", "/images/DSC00234.jpg", "3rd Floor"],
    ["Spade", "Fashion", "/images/DSC00190.jpg", "1st Floor"],
    ["The Bag Boutique", "Accessories", "/images/DSC00193.jpg", "1st Floor"],
    ["Unik Creations", "Lifestyle", "/images/DSC00188.jpg", "2nd Floor"],
];

const happenings = [
    [
        "06.08.26",
        "Lifestyle",
        "The city, in good company",
        "A new season of small discoveries, made for Colombo.",
        "/images/DSC00274.jpg",
    ],
    [
        "01.08.26",
        "Offers",
        "A little more to look forward to",
        "Thoughtful finds and experiences waiting across the city.",
        "/images/DSC00243.jpg",
    ],
    [
        "24.07.26",
        "New",
        "Meet your next favourite place",
        "Explore the latest names to join Majestic City.",
        "/images/DSC00234.jpg",
    ],

];

const discovery: Array<[LucideIcon, string, string]> = [
    [Store, "Shop", "Fashion, jewellery, technology and more."],
    [Utensils, "Dine", "Flavours for every mood and moment."],
    [Waves, "Entertain", "Cinema, family fun and experiences."],
    [CalendarDays, "What's on", "Events, offers and happenings."],
    [Compass, "Plan your visit", "Hours, parking and directions."],
];

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <p className="flex items-center gap-2.5 text-[10px] font-semibold uppercase tracking-[.16em] leading-none text-[#77726a]">
            <span className="inline-block h-px w-7 bg-[#c7af82]" />
            {children}
        </p>
    );
}

function ArrowLink({ children }: { children: React.ReactNode }) {
    return (
        <Link href="#directory" className="group mt-7 inline-flex items-center gap-[22px] border-b border-[#252321]/15 pb-2.5 text-[10px] uppercase tracking-[.13em] transition-[gap] hover:gap-[30px]">
            {children}
            <ArrowRight size={16} strokeWidth={1.5} />
        </Link>
    );
}

export default function Home() {
    return (
        <main>
            <Header />
            <MobileMenu />
            <Hero />

            <section className="overflow-hidden bg-[#151515] px-6 text-white lg:px-[5vw]" aria-label="Discover Majestic City">
                <div className="grid grid-cols-1 overflow-x-auto md:grid-cols-5">
                    {discovery.map(([Icon, title, description]) => (
                        <Link
                            href={`#${String(title).toLowerCase().replaceAll(" ", "-")}`}
                            className="group flex min-h-[112px] min-w-[220px] items-center gap-3.5 border-x border-white/15 px-[18px] py-[22px] transition-colors hover:bg-[#252421] md:min-w-0 md:min-h-[126px] md:px-[25px]"
                            key={String(title)}>
                            <Icon size={20} strokeWidth={1.4} />
                            <span className="flex flex-1 flex-col gap-2">
                                <strong className="text-[11px] font-medium uppercase tracking-[.14em]">{title}</strong>
                                <small className="text-[11px] leading-[1.4] text-[#a9a49c]">{description}</small>
                            </span>
                            <ChevronRight className="text-[#736f69]" size={17} />
                        </Link>
                    ))}
                </div>
            </section>

            <section className="relative grid grid-cols-1 items-center gap-[7vw] px-6 py-24 lg:min-h-[820px] lg:grid-cols-[.9fr_1.1fr] lg:px-[5vw] lg:py-[8.5rem]" id="about">
                <div className="max-w-[430px] pb-8">
                    <SectionLabel>The heart of Colombo</SectionLabel>
                    <h2 className="mt-[37px] mb-[37px] text-[clamp(3.2rem,15vw,5rem)] font-light leading-[.88] tracking-[-.06em] lg:text-[clamp(3.1rem,6.2vw,7.4rem)]">
                        More than
                        <br />
                        <em className="font-[Georgia,serif] font-normal italic tracking-[-.07em] text-[#c7af82]">a mall.</em>
                    </h2>
                    <p className="max-w-[320px] text-base leading-[1.7] text-[#68635c]">
                        An iconic Colombo destination where shopping, dining, entertainment
                        and everyday experiences come together.
                    </p>
                    <ArrowLink>Discover our story</ArrowLink>
                </div>
                <div className="relative h-[430px] overflow-hidden lg:h-[570px]">
                    <Image
                        src={images.exterior}
                        alt="Majestic City exterior in Colombo"
                        fill
                        priority
                        sizes="(max-width: 768px) 92vw, 48vw"
                    />
                </div>
                <div className="absolute bottom-10 right-6 flex gap-[17px] text-[8px] uppercase leading-[1.5] tracking-[.13em] lg:bottom-40 lg:right-[5vw] lg:text-[10px]"><span className="text-[#c7af82]">01</span><span>
                    Majestic City
                    <br />
                    Since 1990
                </span>
                </div>
            </section>

            <section className="bg-[#fbfaf7] px-6 py-24 lg:px-[5vw] lg:py-[8.5rem]" id="shop">
                <div className="mb-10 flex flex-col items-start justify-between gap-7 lg:mb-[57px] lg:flex-row lg:items-end">
                    <div>
                        <SectionLabel>Curated for you</SectionLabel>
                        <h2 className="mt-[33px] text-[clamp(3.2rem,15vw,5rem)] font-light leading-[.88] tracking-[-.06em] lg:text-[clamp(3.1rem,6.2vw,7.4rem)]">
                            Discover your <em className="font-[Georgia,serif] font-normal italic tracking-[-.07em] text-[#c7af82]">style.</em>
                        </h2>
                    </div>
                    <div className="max-w-[280px]"><p className="max-w-[260px] leading-[1.7] text-[#6d6962]">
                        From fashion and jewellery to technology and everyday essentials.
                    </p><ArrowLink>Explore all stores</ArrowLink>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4 lg:gap-3.5">
                    {[
                        "Fashion",
                        "Jewellery & Watches",
                        "Technology",
                        "Beauty & Accessories",
                    ].map((name, index) => (
                        <Link className="group relative aspect-[.78] overflow-hidden text-white lg:aspect-[.72]" href="#directory" key={name}>
                            <Image
                                src={images.shopping[index]}
                                alt={`${name} at Majestic City`}
                                fill
                                sizes="(max-width: 768px) 86vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                            <div className="absolute bottom-[17px] left-[17px] right-[17px] lg:bottom-[25px] lg:left-[25px] lg:right-[25px]"><span className="text-[10px] tracking-[.16em] text-[#c7af82]">0{index + 1}</span><h3 className="my-3 text-xl font-light leading-none tracking-[-.04em] lg:mb-5 lg:text-[clamp(1.25rem,2.1vw,2.2rem)]">{name}</h3>
                                <ArrowDownRight className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" size={21} />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="bg-[#f5f3ee] px-6 py-24 lg:px-[5vw] lg:py-[8.5rem]" id="directory">
                <div className="mb-10 flex flex-col items-start justify-between gap-7 lg:mb-[57px] lg:flex-row lg:items-end">
                    <div>
                        <SectionLabel>Find your favourites</SectionLabel>
                        <h2 className="mt-[33px] text-[clamp(3.2rem,15vw,5rem)] font-light leading-[.88] tracking-[-.06em] lg:text-[clamp(3.1rem,6.2vw,7.4rem)]">
                            In good <em className="font-[Georgia,serif] font-normal italic tracking-[-.07em] text-[#c7af82]">company.</em>
                        </h2>
                    </div>
                    <div className="flex w-full items-center justify-between lg:w-auto">
                        {/* <button className="icon-button" aria-label="Search stores">
              <Search size={18} />
            </button> */}
                        <ArrowLink>View directory</ArrowLink>
                    </div>
                </div>
                <div className="flex gap-[17px] overflow-x-auto pb-5">
                    {stores.map(([name, category, image, floor]) => (
                        <article className="w-[258px] shrink-0 bg-[#fbfaf7]" key={name}>
                            <div className="relative aspect-[.9] overflow-hidden">
                                <Image src={image} alt={name} fill sizes="260px" />
                            </div>
                            <div className="relative min-h-[128px] p-5">
                                <div>
                                    <small className="text-[9px] uppercase tracking-[.14em] text-[#8a847a]">{category}</small>
                                    <h3 className="mt-2 text-lg font-normal tracking-[-.03em]">{name}</h3>
                                </div>
                                <span className="absolute bottom-5 left-5 text-[10px] text-[#8a847a]">{floor}</span>
                                <Link className="absolute bottom-4 right-5" href="#directory" aria-label={`View ${name}`}>
                                    <ArrowUpRightIcon />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            <section className="bg-[#ebe5da] px-6 py-24 lg:px-[5vw] lg:py-[8.5rem]" id="dine">
                <div className="mb-10 flex flex-col items-start justify-between gap-7 lg:mb-[57px] lg:flex-row lg:items-end">
                    <div>
                        <SectionLabel>A taste of the city</SectionLabel>
                        <h2 className="mt-[33px] text-[clamp(3.2rem,15vw,5rem)] font-light leading-[.88] tracking-[-.06em] lg:text-[clamp(3.1rem,6.2vw,7.4rem)]">
                            A table for
                            <br />
                            <em className="font-[Georgia,serif] font-normal italic tracking-[-.07em] text-[#c7af82]">every taste.</em>
                        </h2>
                    </div>
                    <p className="max-w-[260px] leading-[1.7] text-[#756f65]">
                        From quick bites to relaxed dining, discover flavours for every
                        moment.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-[17px] lg:grid-cols-[1.55fr_.82fr]"><a className="group relative min-h-[420px] overflow-hidden lg:min-h-[620px]" href="#directory">
                    <Image
                        src={images.dining[0]}
                        alt="Dining at Majestic City"
                        fill
                        sizes="(max-width: 768px) 92vw, 55vw"
                    />
                    <div className="absolute bottom-6 left-[22px] z-10 text-white lg:bottom-[38px] lg:left-[38px]"><span className="text-[10px] uppercase tracking-[.14em]">01 / Restaurants</span><h3 className="mt-3 font-[Georgia,serif] text-[clamp(2rem,3.5vw,4.3rem)] leading-[.95] tracking-[-.06em]">
                        Make room
                        <br />
                        for something good.
                    </h3>
                    </div>
                </a>
                    <div className="grid grid-cols-2 gap-2.5 lg:grid-rows-2 lg:gap-[17px]"><a className="group relative min-h-[210px] overflow-hidden lg:min-h-[300px]" href="#directory">
                        <Image
                            src={images.dining[1]}
                            alt="Food and dining experience"
                            fill
                            sizes="(max-width: 768px) 92vw, 30vw"
                        />
                        <span className="absolute bottom-5 left-[22px] right-[22px] z-10 flex items-center justify-between text-[10px] uppercase tracking-[.12em] text-white">
                            02 / Fast food <ArrowUpRightIcon />
                        </span>
                    </a>
                        <Link className="group relative min-h-[210px] overflow-hidden lg:min-h-[300px]" href="#directory">
                            <Image
                                src={images.dining[2]}
                                alt="Café counter at Majestic City"
                                fill
                                sizes="(max-width: 768px) 92vw, 30vw"
                            />
                            <span className="absolute bottom-5 left-[22px] right-[22px] z-10 flex items-center justify-between text-[10px] uppercase tracking-[.12em] text-white">
                                03 / Cafés & tea <ArrowUpRightIcon />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="bg-[#151515] px-6 py-24 text-white lg:px-[5vw] lg:py-[8.5rem]" id="entertainment">
                <div className="mb-10 flex flex-col items-start justify-between gap-7 lg:mb-[55px] lg:flex-row lg:items-end">
                    <div>
                        <SectionLabel>Majestic Cineplex</SectionLabel>
                        <h2 className="mt-[33px] text-[clamp(3.2rem,15vw,5rem)] font-light leading-[.88] tracking-[-.06em] lg:text-[clamp(3.1rem,6.2vw,7.4rem)]">
                            Make time
                            <br />
                            <em className="font-[Georgia,serif] font-normal italic tracking-[-.07em] text-[#c7af82]">for cinema.</em>
                        </h2>
                    </div>
                    <p className="max-w-[280px] leading-[1.7] text-[#a9a39a]">
                        Big-screen stories, family entertainment and memorable nights in the heart of Colombo.
                    </p>
                </div>
                <div className="relative aspect-[.88] overflow-hidden lg:aspect-[2.1]">
                    <Image
                        src={images.cinema}
                        alt="Majestic Cineplex at Majestic City Colombo"
                        fill
                        sizes="(max-width: 768px) 92vw, 90vw"
                    />
                    <div className="absolute bottom-6 left-[22px] z-10 flex flex-col gap-3 text-[10px] uppercase tracking-[.14em] text-white/80 lg:bottom-[30px] lg:left-8 lg:right-8 lg:flex-row lg:justify-between">
                        <span>Majestic Cineplex</span>
                        <span>Big-screen experiences</span>
                        <span>Family entertainment</span>
                    </div>
                </div>
                <div className="mt-7 flex flex-col items-start gap-4 lg:flex-row lg:items-center lg:justify-between">
                    <p className="max-w-[360px] text-sm leading-[1.7] text-[#a9a39a]">Your next film night starts here. Discover what&apos;s playing and make an evening of it.</p>
                    <a className="inline-flex items-center gap-2.5 border border-[#c7af82] px-[18px] py-[13px] text-[10px] font-semibold uppercase tracking-[.12em] text-[#c7af82] transition hover:bg-[#c7af82] hover:text-[#151515]" href="#directory">Explore Majestic Cineplex <ArrowRight size={16} /></a>
                </div>
            </section>

            <section className="grid grid-cols-1 gap-[8vw] overflow-hidden px-6 py-24 lg:grid-cols-[.75fr_1.25fr] lg:px-[5vw] lg:py-[8.5rem]">
                <div className="pt-0 lg:pt-20">
                    <SectionLabel>The Majestic moment</SectionLabel>
                    <h2 className="mt-[38px] mb-[38px] text-[clamp(3.2rem,15vw,5rem)] font-light leading-[.88] tracking-[-.06em] lg:text-[clamp(3.1rem,6.2vw,7.4rem)]">
                        Meet in the
                        <br />
                        <em className="font-[Georgia,serif] font-normal italic tracking-[-.07em] text-[#c7af82]">heart of Colombo.</em>
                    </h2>
                    <p className="max-w-[280px] leading-[1.7] text-[#6d6962]">
                        An architectural destination designed to bring people, places and
                        experiences together.
                    </p>
                    <ArrowLink>Explore the experience</ArrowLink>
                </div>
                <div className="relative min-h-[450px] lg:min-h-[650px]"><div className="relative ml-0 h-[420px] w-[78%] overflow-hidden lg:ml-[12%] lg:h-[610px] lg:w-[69%]">
                    <Image
                        src={images.stairOne}
                        alt="Majestic City staircase"
                        fill
                        sizes="42vw"
                    />
                </div>
                    <div className="absolute bottom-0 right-0 h-[180px] w-[45%] overflow-hidden lg:h-[250px] lg:w-[42%]">
                        <Image
                            src={images.stairTwo}
                            alt="Majestic City atrium details"
                            fill
                            sizes="24vw"
                        />
                    </div>
                    <span className="absolute bottom-[175px] right-[-30px] rotate-[-90deg] text-[7px] uppercase tracking-[.18em] lg:bottom-[245px] lg:right-[-15px] lg:text-[9px]">
                        A PLACE TO PAUSE · A PLACE TO DISCOVER
                    </span>
                </div>
            </section>

            <section className="bg-[#fbfaf7] px-6 py-24 lg:px-[5vw] lg:py-[8.5rem]" id="whats-on">
                <div className="mb-10 flex flex-col items-start justify-between gap-7 lg:mb-[57px] lg:flex-row lg:items-end">
                    <div>
                        <SectionLabel>Keep close</SectionLabel>
                        <h2 className="mt-[33px] text-[clamp(3.2rem,15vw,5rem)] font-light leading-[.88] tracking-[-.06em] lg:text-[clamp(3.1rem,6.2vw,7.4rem)]">
                            What&apos;s <em className="font-[Georgia,serif] font-normal italic tracking-[-.07em] text-[#c7af82]">happening.</em>
                        </h2>
                    </div>
                    <div className="flex gap-[17px] overflow-x-auto text-[10px] uppercase tracking-[.12em]"><button className="border-b border-[#252321] px-0 py-2">All</button><button className="border-b border-transparent px-0 py-2 text-[#8b867e]">Events</button><button className="border-b border-transparent px-0 py-2 text-[#8b867e]">Offers</button><button className="border-b border-transparent px-0 py-2 text-[#8b867e]">New</button>
                    </div>
                </div>
                <div className="flex gap-[26px] overflow-x-auto lg:grid lg:grid-cols-3">
                    {happenings.map(([date, category, title, description, image]) => (
                        <article className="w-[82vw] shrink-0 lg:w-auto" key={title}>
                            <div className="group relative mb-[23px] h-[225px] overflow-hidden">
                                <Image
                                    src={image}
                                    alt={`${category} at Majestic City`}
                                    fill
                                    sizes="(max-width: 768px) 82vw, 30vw"
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                            </div>
                            <small className="text-[10px] uppercase tracking-[.13em] text-[#7d776e]">{date} <span className="ml-3 text-[#c7af82]">{category}</span>
                            </small>
                            <h3 className="my-[15px] text-[23px] font-normal tracking-[-.04em]">{title}</h3><p className="max-w-[285px] text-[13px] leading-[1.6] text-[#777169]">{description}</p>
                            <ArrowLink>Discover more</ArrowLink>
                        </article>
                    ))}
                </div>
            </section>

            <section className="grid grid-cols-1 gap-[50px] bg-[#20201e] px-6 py-24 text-white lg:grid-cols-[.7fr_1.3fr] lg:gap-[10vw] lg:px-[5vw] lg:py-[8.5rem]" id="visit">
                <div>
                    <SectionLabel>Come as you are</SectionLabel>
                    <h2 className="mt-[38px] mb-[50px] text-[clamp(3.2rem,15vw,5rem)] font-light leading-[.88] tracking-[-.06em] lg:text-[clamp(3.1rem,6.2vw,7.4rem)]">
                        Plan your
                        <br />
                        <em className="font-[Georgia,serif] font-normal italic tracking-[-.07em] text-[#c7af82]">visit.</em>
                    </h2>
                    <Link
                        className="inline-flex items-center gap-2.5 bg-[#f4f0e7] px-[18px] py-[13px] text-[10px] font-semibold uppercase tracking-[.12em] text-[#252321]"
                        href="https://maps.google.com/?q=Majestic+City+Colombo"
                        target="_blank"
                        rel="noreferrer">
                        <MapPin size={16} /> Get directions
                    </Link>
                </div>
                <div className="grid grid-cols-2 border-l-0 lg:border-l lg:border-white/20">
                    <div className="flex min-h-[170px]  flex-col border-b border-white/20 p-3 pb-[18px] lg:min-h-[210px] lg:p-2 lg:px-9 lg:pb-7">
                        <Clock3 size={60} />
                        <small className="mt-8 text-[10px]  uppercase tracking-[.13em] text-[#908c84]">Open today</small>
                        <strong className="text-[13px] font-normal leading-[1.55] lg:text-base">9:00 AM – 9:00 PM</strong>
                    </div>
                    <div className="flex min-h-[170px]  flex-col border-b border-white/20 border-l p-3 pb-[18px] lg:min-h-[210px] lg:p-2 lg:px-9 lg:pb-7">
                        <MapPin size={60} />
                        <small className="mt-8 text-[10px]  uppercase tracking-[.13em] text-[#908c84]">Find us</small>
                        <strong className="text-[13px] font-normal leading-[1.55] lg:text-base">
                            10, Station Road,
                            <br />
                            Bambalapitiya, Colombo 04
                        </strong>
                    </div>
                    <div className="flex min-h-[170px]  flex-col border-b border-white/20 p-3 pb-[18px] lg:min-h-[210px] lg:p-2 lg:px-9 lg:pb-7">
                        <Car size={60} />
                        <small className="mt-8 text-[10px]  uppercase tracking-[.13em] text-[#908c84]">Make it easy</small>
                        <strong className="text-[13px] font-normal leading-[1.55] lg:text-base">
                            Parking available
                            <br />
                            Mall map & directory
                        </strong>
                    </div>
                    <div className="flex min-h-[170px]  flex-col border-b border-white/20 border-l p-3 pb-[18px] lg:min-h-[210px] lg:p-2 lg:px-9 lg:pb-7">
                        <Mail size={60} />
                        <small className="mt-8 text-[10px]  uppercase tracking-[.13em] text-[#908c84]">Talk to us</small>
                        <strong className="text-[13px] font-normal leading-[1.55] lg:text-base">
                            011 250 8673
                            <br />
                            011 258 8827
                        </strong>
                    </div>
                </div>
            </section>

            <section className="grid grid-cols-1 items-center gap-[35px] px-6 py-24 lg:grid-cols-2 lg:gap-[12vw] lg:px-[5vw] lg:py-[8.5rem]">
                <div>
                    <SectionLabel>Stay in the city</SectionLabel>
                    <h2 className="mt-[35px] text-[clamp(3.2rem,15vw,5rem)] font-light leading-[.88] tracking-[-.06em] lg:text-[clamp(3.1rem,6.2vw,7.4rem)]">
                        Keep a little
                        <br />
                        <em className="font-[Georgia,serif] font-normal italic tracking-[-.07em] text-[#c7af82]">Majestic close.</em>
                    </h2>
                </div>
                <form className="max-w-[420px]"><p className="max-w-[310px] leading-[1.65] text-[#737067]">
                    Be the first to discover new stores, special offers, events and
                    experiences.
                </p><label className="mt-[38px] flex border-b border-[#252321]">
                        <span className="sr-only">Email address</span>
                        <input className="min-w-0 flex-1 bg-transparent p-3 px-0 outline-none" type="email" placeholder="Your email address" required /><button className="border-0 bg-transparent p-2" type="submit" aria-label="Subscribe">
                            <ArrowRight />
                        </button>
                    </label>
                </form>
            </section>

            <Footer />
        </main>
    );
}

function ArrowUpRightIcon() {
    return <ArrowUpRight size={17} strokeWidth={1.5} />;
}


