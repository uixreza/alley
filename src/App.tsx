import Layout from "./components/Layout";
import { TbAlertSquareRounded } from "react-icons/tb";
// import Trustedusers from "./components/UI/Trustedusers";
import CardsContainer from "./components/UI/CardsContainer";
import Cart from "./components/UI/Cart";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState<
    Array<{
      src: string;
      title: string;
      update: string;
      rate: number;
      sections: number;
      area: number;
      url: string;
    }>
  >([]);

  useEffect(() => {
    // fetch data from data folder
    fetch("data/Alleys.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data.Alleys);
      })
      .catch((error) => console.error("Error fetching JSON:", error));
  }, []);

  return (
    <Layout>
      <div className="">
        <div className="fixed z-[-1] w-full h-full top-0 left-0 shadow-lg backdrop-blur-md bg-opacity-60 bg-[var(--box)]/60  backdrop:blur-3xl bg-opacity-40 shadow-black/20"></div>
        {/* HEAD */}
        <div className="px-5">
          <span className="text-3xl font-bold">معرفی محلات شهر</span>
          <p className="mt-5  max-w-[70rem]">
            بجنورد فقط یک شهر نیست، مجموعه‌ای از محله‌هایی با ویژگی‌ها و
            فرصت‌های کاملاً متفاوت‌ است. شما میتوانید در این صفحه همه محله‌ها رو
            ببینید، مقایسه کنید و وارد تحلیل دقیق‌ آنها بشوید; بر اساس داده، نه
            حرف و سلیقه، هر محله با دقت بررسی و رتبه‌بندی شده تا به شما کمک کند
            تصمیم دقیق‌تری بگیرید <br />
            <span className="relative flex overflow-hidden flex-row items-center gap-2 mt-5 pr-8 ">
              <TbAlertSquareRounded className=" text-blue-400 absolute top-0 right-0 text-2xl min-w-5 " />
              تحلیل هایی که می بینید، حاصل بررسی داده های واقعی از هزاران ملک،
              گزارش های میدانی و تحلیل های GIS هستند. هر چیزی که می خوانید،
              پشتوانه علمی دارد.
            </span>
          </p>

          <div className="flex flex-row mt-5">
            <div className="flex flex-row gap-1">
              {/* first badge */}
              <div>
                <span className="py-1 px-2 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                  <svg
                    className="shrink-0 size-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                    <path d="m9 12 2 2 4-4"></path>
                  </svg>
                  تعداد کل محلات : 46
                </span>
              </div>

              {/* second badge */}
              <div>
                <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-500/10 dark:text-blue-500">
                  <svg
                    className="shrink-0 size-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                    <polyline points="16 7 22 7 22 13"></polyline>
                  </svg>
                  تعداد محلات تکمیل شده : 18
                </span>
              </div>
            </div>
          </div>

          {/* users list */}
          {/* <Trustedusers /> */}
        </div>

        {/* BODY */}
        <div>
          {/* list of alley */}
          <CardsContainer>
            {data?.map(
              (
                item: {
                  src: string;
                  title: string;
                  update: string;
                  rate: number;
                  sections: number;
                  area: number;
                  url: string;
                },
                i: number
              ) => (
                <Cart
                  src={item.src}
                  title={item.title}
                  rate={item.rate}
                  update={item.update}
                  sections={item.sections}
                  area={item.area}
                  url={item.url}
                  key={i}
                />
              )
            )}
          </CardsContainer>
        </div>
      </div>
    </Layout>
  );
}

export default App;
