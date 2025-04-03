import React from "react";

const Category = ({ category }) => {
  return (
    <main className="relative w-full py-[100px] px-[5%] grid grid-cols-1 gap-4" id="category">

      {/* Category Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 place-items-center items-stretch gap-6 lg:gap-10">
        {category.map((item, index) => (
          <div className="relative" key={index}>
            <div className="relative flex flex-col items-center p-10 sm:p-4 xl:p-10 rounded-3xl gap-4 z-10 bg-white shadow-lg h-full">
              <div>
                <img src={item.img} alt="img" className="w-24 h-24" />
              </div>
              <div className="flex flex-col items-center text-center gap-4">
                <h2 className="text-[20px] text-gray-700 font-bold">{item.header}</h2>
                <p className="text-[16px] text-gray-500">{item.subheader}</p>
              </div>
            </div>
            <div className="hidden lg:block p-8 bg-green-500 rounded-tl-3xl rounded-br-lg absolute bottom-[-25px] left-[-20px]"></div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Category;
