import React from 'react'

const Table = () => {
  return (
    <div className='mx-auto'>
      <h1 className='text-3xl font-bold text-center text-[#0D1B2A]'>Comparison Table</h1>
      <p className='text-sm font-light text-center text-[#0D1B2A] leading-sung lg:mb-5'>Stay refreshed with Original, glow with Glow, fuel kids with <br /> Kids, and boost energy with Charge—all packed with <br /> electrolytes and vitamins.</p>
      <div className="overflow-x-auto">
        <table className="table-auto w-full text-sm">
          <thead>
            <tr>
              <th className="bg-none p-4 text-center align-middle"></th>
              <th className="bg-white p-4 text-center align-middle text-[#54B2CC] font-bold rounded-tl-[16px] shadow-0">Original</th>
              <th className="border border-blue-100 bg-white p-4 text-center align-middle text-[#DA5685] font-bold">Glow</th>
              <th className="border border-blue-100 bg-white p-4 text-center align-middle text-[#B4BF7B] font-bold">Kids</th>
              <th className="border border-blue-100 bg-white p-4 text-center align-middle text-[#E09261] font-bold rounded-tr-[16px] shadow-0">Charge</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="p-4 text-center align-middle font-bold rounded-tl-lg shadow-0">Electrolytes</td>
              <td className="border border-blue-100 p-4 text-center align-middle text-[#54B2CC]">Essential electrolyte<br />drink mix</td>
              <td className="border border-blue-100 p-4 text-center align-middle text-[#DA5685]">Electrolyte drink mix<br />for Hair, Skin &<br />Nails Health</td>
              <td className="border border-blue-100 p-4 text-center align-middle text-[#B4BF7B]">Essential electrolyte<br />drink mix for kids</td>
              <td className="border border-blue-100 p-4 text-center align-middle text-[#E09261]">Essential electrolyte<br />drink mix</td>
            </tr>
            <tr>
              <td className="border border-blue-100 p-4 text-center align-middle font-bold">Vitamins</td>
              <td className="border border-blue-100 p-4 text-center align-middle text-[#54B2CC]">Vitamin C, Vitamin<br />B3 (Niacin), Vitamin B5<br />(Pantothenic Acid),<br />Vitamin B6, Vitamin B12</td>
              <td className="border border-blue-100 p-4 text-center align-middle text-[#DA5685]">Vitamin C, Vitamin E,<br />Vitamin B3, Vitamin B5,<br />Vitamin B6, Vitamin B12</td>
              <td className="border border-blue-100 p-4 text-center align-middle text-[#B4BF7B]">Vitamin C, Vitamin B3,<br />Vitamin B5, Vitamin B6,<br />Vitamin B12</td>
              <td className="border border-blue-100 p-4 text-center align-middle text-[#E09261]">Vitamin C, Vitamin B3,<br />Vitamin B5, Vitamin B6,<br />Vitamin B12</td>
            </tr>
            <tr>
              <td className="border border-blue-100 p-4 text-center align-middle font-bold">Flavor Profile</td>
              <td className="border border-blue-100 p-4 text-center align-middle text-[#54B2CC]">Blue<br />Raspberry</td>
              <td className="border border-blue-100 p-4 text-center align-middle text-[#DA5685]">Mixed<br />Berries</td>
              <td className="border border-blue-100 p-4 text-center align-middle text-[#B4BF7B]">Watermelon</td>
              <td className="border border-blue-100 p-4 text-center align-middle text-[#E09261]">Coffee</td>
            </tr>
            <tr>
              <td className="p-4 text-center align-middle font-bold rounded-bl-lg shadow-0">Key Ingredients</td>
              <td className="border border-blue-100 p-4 text-center align-middle text-[#54B2CC]">Electrolytes<br />(Sodium, Potassium,<br />Magnesium, Chloride),<br />Dextrose</td>
              <td className="border border-blue-100 p-4 text-center align-middle text-[#DA5685]">Collagen,<br />Hyaluronic Acid, Zinc,<br />Electrolytes (Sodium,<br />Potassium, Magnesium)</td>
              <td className="border border-blue-100 p-4 text-center align-middle text-[#B4BF7B]">Electrolytes<br />(Sodium, Potassium,<br />Magnesium),<br />Natural Sweeteners</td>
              <td className="border border-blue-100 p-4 text-center align-middle text-[#E09261]">Caffeine,<br />Electrolytes (Sodium,<br />Potassium, Magnesium),<br />Dextrose</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default Table