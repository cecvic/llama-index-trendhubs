import Image from "next/image";

export default function Header() {
  return (
    <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="w-full text-center py-4">
        <h1 className="text-4xl font-extrabold">Trendhubs Financial Doc Chatbot</h1>
      </div>

      <div className="fixed bottom-0 left-0 mb-4 flex h-auto w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:w-auto lg:bg-none lg:mb-0">
        <a
          href="https://www.llamaindex.ai/"
          className="flex items-center justify-center font-nunito text-lg font-bold gap-2"
        >
          <span>Built by Trendhubs</span>
          <Image
            className="rounded-xl"
            src="/llama.png"
            alt="Llama Logo"
            width={40}
            height={40}
            priority
          />
        </a>
      </div>
    </div>
  );
}
