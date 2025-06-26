import RateStars from "./RateStars";

type Cart = {
  src: string;
  title: string;
  rate: number;
  update: string;
  sections: number;
  url: string;
};

export default function Cart(Cart: Cart) {
  return (
    <li className="flex cursor-pointer items-center justify-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-2">
      <a href={Cart.url} className="block w-full h-full focus:outline-none">
        <article className="relative isolate flex flex-col overflow-hidden rounded-2xl px-4 sm:px-6 pb-8 pt-40 w-full shadow-md bg-white dark:bg-gray-900">
          <img
            src={Cart.src}
            alt={Cart.title}
            className="shadow-2xl shadow-black absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* info */}
          <div className="absolute bottom-[-20rem] transition-all hover:bottom-0 inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 backdrop:blur-3xl">
            <div>
              <h3 className="z-10 absolute bottom-12 right-3 text-2xl sm:text-3xl font-bold text-white break-words">
                {Cart.title}
              </h3>
              <div className="z-10 absolute bottom-3 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                <RateStars rate={Cart.rate.toString()} />
              </div>
            </div>

            {/* update and alley text */}
            <div className="glassy flex flex-col relative top-30 left-[-10rem] text-[10px] bg-white/20 backdrop-blur-md rounded-md p-2 shadow-md">
              <span className="font-bold">آخرین آپدیت : {Cart.update}</span>
              <span className="font-bold">تعداد قطعات : {Cart.sections}</span>
            </div>
          </div>
        </article>
      </a>
    </li>
  );
}
