import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-[#111] px-6 pb-[22px] pt-[4.5rem] text-[#f4f0e7] lg:px-[5vw] lg:pt-24" id="footer">
            <div className="grid grid-cols-2 gap-x-6 gap-y-[38px] pb-[55px] lg:grid-cols-[1.6fr_repeat(3,.7fr)_1fr] lg:gap-[6vw] lg:pb-[90px]">
                <div className="col-span-2 lg:col-span-1">
                    <Image
                        src="/images/logo.png"
                        alt="Majestic City"
                        width={154}
                        height={48}
                    />
                    <p className="mt-[25px] max-w-[250px] leading-[1.65] text-[#8f8a81]">
                        An iconic destination in the heart of Colombo for shopping, dining,
                        entertainment and everyday experiences.
                    </p>
                    <div className="mt-[35px] flex gap-2.5">
                        <a className="flex h-8 w-8 items-center justify-center rounded-full border border-[#4c4944]" href="#footer" aria-label="Facebook">f</a>
                        <a className="flex h-8 w-8 items-center justify-center rounded-full border border-[#4c4944]" href="#footer" aria-label="Instagram">ig</a>
                        <a className="flex h-8 w-8 items-center justify-center rounded-full border border-[#4c4944]" href="#footer" aria-label="YouTube">yt</a>
                    </div>
                </div>
                <div>
                    <h4 className="mb-[25px] mt-1 text-[10px] font-medium uppercase tracking-[.16em] text-[#c7af82]">Explore</h4>
                    <a className="block text-xs leading-[2.2] text-[#aaa59c]" href="#shop">Shop</a>
                    <a className="block text-xs leading-[2.2] text-[#aaa59c]" href="#dine">Dine</a><a className="block text-xs leading-[2.2] text-[#aaa59c]" href="#entertainment">Entertainment</a><a className="block text-xs leading-[2.2] text-[#aaa59c]" href="#whats-on">What&apos;s on</a><a className="block text-xs leading-[2.2] text-[#aaa59c]" href="#whats-on">Offers</a>
                </div>
                <div>
                    <h4 className="mb-[25px] mt-1 text-[10px] font-medium uppercase tracking-[.16em] text-[#c7af82]">Visit</h4><a className="block text-xs leading-[2.2] text-[#aaa59c]" href="#visit">Plan your visit</a><a className="block text-xs leading-[2.2] text-[#aaa59c]" href="#visit">Mall map</a><a className="block text-xs leading-[2.2] text-[#aaa59c]" href="#directory">Store directory</a><a className="block text-xs leading-[2.2] text-[#aaa59c]" href="#visit">Opening hours</a><a className="block text-xs leading-[2.2] text-[#aaa59c]" href="#visit">Parking</a>
                </div>
                <div>
                    <h4 className="mb-[25px] mt-1 text-[10px] font-medium uppercase tracking-[.16em] text-[#c7af82]">About</h4><a className="block text-xs leading-[2.2] text-[#aaa59c]" href="#about">Our story</a><a className="block text-xs leading-[2.2] text-[#aaa59c]" href="#about">Gallery</a><a className="block text-xs leading-[2.2] text-[#aaa59c]" href="#footer">Contact</a><a className="block text-xs leading-[2.2] text-[#aaa59c]" href="#footer">Investor relations</a>
                </div>
                <div className="col-span-2 lg:col-span-1"><h4 className="mb-[25px] mt-1 text-[10px] font-medium uppercase tracking-[.16em] text-[#c7af82]">Contact</h4><p className="text-xs leading-[2.2] text-[#aaa59c]">
                    10, Station Road,
                    <br />
                    Bambalapitiya,
                    <br />
                    Colombo 04, Sri Lanka
                </p><p className="text-xs leading-[2.2] text-[#aaa59c]">
                        011 250 8673
                        <br />
                        011 258 8827
                        <br />
                        011 258 8829
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-3 border-t border-[#34332f] pt-[22px] text-[10px] leading-[1.5] text-[#77736c] lg:flex-row lg:justify-between">
                <span>© 2026 Design and Developed by <Link href="https://www.shawebdesign.com" className="hover:underline" target="_blank" rel="noopener noreferrer">Sha web design</Link>. All Rights Reserved.</span>
                <span className="flex gap-4"><a href="#footer">Privacy Policy</a><a href="#footer">Terms & Conditions</a>
                </span>
            </div>
        </footer>
    );
}