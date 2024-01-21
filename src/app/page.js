import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen max-w-[1440px] mx-auto items-center justify-center">
      <div className="bg-white py-5 sm:py-8 rounded-lg max-w-[375px] m-2 " >

        <div className="rounded-xl overflow-hidden  mx-auto px-3 max-w-[320px] "  >
          <Image src="/images/image-qr-code.png" alt="qr-code" width={320} height={320} className="rounded-lg " />
        </div>


        <div className="text-center py-5 px-7 sm:px-12 " >
          <p className="text-[22px] font-bold " style={{ color: "hsl(218, 44%, 22%)" }} >Improve your front-end skill by building plrojects</p>
          <p className="text-[15px] font-normal px-3 " style={{ color: "hsl(220, 15%, 55%)" }}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
      </div>
    </main>
  );
}
