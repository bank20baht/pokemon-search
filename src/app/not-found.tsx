import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 content-center">
      <div className="max-w-md text-center">
        <span className="mb-8 font-extrabold text-9xl text-red-400">
          <span className="sr-only">Error</span>404
        </span>
        <p className="text-2xl font-semibold md:text-3xl">
          Sorry, we could not find this page.
        </p>
        <p className="mt-4 mb-8 text-gray-400">
          But do not worry, you can find plenty of other things on our homepage.
        </p>
        <Link href="/" className="px-8 py-3 font-semibold buttom-primary">
          Back to homepage
        </Link>
      </div>
    </div>
  );
}
