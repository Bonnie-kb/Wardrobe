import React, { useState } from "react";

const shirts = [
  { name: "Rose" },
  { name: "Grapevine" },
  { name: "Black" },
  { name: "Silky Black" },
  { name: "Checked Black" },
  { name: "Gray" },
  { name: "Blue" },
  { name: "Yellow-Navy Blue Checked" },
  { name: "Off White (Yellowish)" },
];

const tshirts = [{ name: "Red" }, { name: "Blue" }];

const pants = [
  { name: "Black" },
  { name: "Black (2nd Pair)" },
  { name: "Gray" },
  { name: "Offwhite" },
];

const WardrobePlanner = () => {
  const [outfits, setOutfits] = useState<string[][]>([]);

  const generateOutfits = () => {
    const newOutfits: string[][] = [];
    for (let i = 0; i < 7; i++) {
      const shirt = shirts[Math.floor(Math.random() * shirts.length)];
      const pant = pants[Math.floor(Math.random() * pants.length)];
      const tshirt = tshirts[Math.floor(Math.random() * tshirts.length)];

      newOutfits.push([
        shirt ? shirt.name : "No Shirt",
        pant ? pant.name : "No Pants",
        tshirt ? tshirt.name : "No T-Shirt",
      ]);
    }
    setOutfits(newOutfits);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Wardrobe Planner</h1>
      <button onClick={generateOutfits} className="bg-blue-500 text-white px-4 py-2 rounded">
        Generate Weekly Outfits
      </button>
      <div className="mt-4">
        {outfits.map((outfit, index) => (
          <div key={index} className="border p-2 mb-2">
            <strong>Day {index + 1}:</strong> {outfit[0]} + {outfit[1]} + {outfit[2]}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WardrobePlanner;
