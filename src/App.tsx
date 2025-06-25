import Layout from "./components/Layout";
import { TbAlertSquareRounded } from "react-icons/tb";
function App() {
  return (
    <Layout>
      <div className="">
        {/* HEAD */}
        <div>
          <span className="text-3xl font-bold">معرفی محلات شهر</span>
          <p className="mt-5 px-5 max-w-[70rem]">
            بجنورد فقط یک شهر نیست، مجموعه‌ای از محله‌هایی با ویژگی‌ها و
            فرصت‌های کاملاً متفاوت‌ است. شما میتوانید در این صفحه همه محله‌ها رو
            ببینید، مقایسه کنید و وارد تحلیل دقیق‌ آنها بشوید; بر اساس داده، نه
            حرف و سلیقه، هر محله با دقت بررسی و رتبه‌بندی شده تا به شما کمک کند
            تصمیم دقیق‌تری بگیرید <br />
            <p className="flex flex-row items-center gap-2">
              {" "}
              <TbAlertSquareRounded className="text-blue-400" />
              تحلیل هایی که می بینید، حاصل بررسی داده های واقعی از هزاران ملک،
              گزارش های میدانی و تحلیل های GIS هستند. هر چیزی که می خوانید،
              پشتوانه علمی دارد.
            </p>
          </p>

          <div className="flex flex-row mt-5">
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
                تعداد کل محلات : 46
              </span>
            </div>

            {/* second badge */}
            <div>
              <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
                <svg
                  className="shrink-0 size-3"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round">
                  <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
                  <polyline points="16 7 22 7 22 13"></polyline>
                </svg>
                تعداد محلات تکمیل شده : 18
              </span>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div></div>
      </div>
    </Layout>
  );
}

export default App;
