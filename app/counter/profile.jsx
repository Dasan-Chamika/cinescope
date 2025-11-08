"use client";

import { getImageUrl } from "./utils";

// Child Component: Avatar
function Avatar({ person, size = 100, onClick }) {
  // Image format: <base-url>/<image-id>.<extension>
  // console.log("Image URL: ", getImageUrl(person));

  return (
    <div onClick={() => onClick(person.name)}>
      <img
        className="m-2.5 rounded-full"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
      />
    </div>
  );
}

// Main/Parent Component: Profile
export default function Profile() {
  return (
    <div className="flex flex-row w-3xl items-end bg-amber-200 rounded px-4 py-2">
      <Avatar
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
        onClick={(name) => alert(name)}
      />
      <Avatar
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
        onClick={(name) => alert(name)}
      />
      <Avatar
        size={50}
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
        onClick={(name) => alert(name)}
      />
    </div>
  );
}
