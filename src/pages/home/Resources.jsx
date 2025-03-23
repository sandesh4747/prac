import React from "react";

export default function Resources() {
  const resources = [
    {
      img: "https://plus.unsplash.com/premium_photo-1683880731792-39c07ceea617?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8b2ZmaWNlfGVufDB8fDB8fHww",
      type: "Article",
      title: "Boost your conversion rate",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt eos possimus, unde eius nam provident! Tempora placeat sunt doloremque similique.",
      avatar:
        "https://static.diverseui.com/6564c49e-7f14-4d8d-8721-45c2df714764-10959850_799935303394478_797096814621614856_n.jpg",
      name: "Roel Aufderehar",
      date: "Mar 16, 2020. 6 min read",
    },
    {
      img: "https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
      type: "Video",
      title: "How to use search engine optimization to drive sales",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt eos possimus, unde eius nam provident! Tempora placeat sunt doloremque similique.",
      avatar: "https://static.diverseui.com/female-45.jpg",
      name: "Brenna Goyette",
      date: "Mar 10, 2020. 4 min read",
    },
    {
      img: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D",
      type: "Case Study",
      title: "Improve your customer experience",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt eos possimus, unde eius nam provident! Tempora placeat sunt doloremque similique.",
      avatar:
        "https://static.diverseui.com/3fa3b0c2-df93-4962-a3d9-7cad201135b3-jpg",
      name: "Daniela Metz",
      date: "Feb 12, 2020. 6 min read",
    },
  ];

  return (
    <div className="p-7">
      <CardList resources={resources} />
    </div>
  );
}

function CardList({ resources }) {
  return (
    <div>
      <div className="max-w-3xl mx-auto text-center space-y-2 pb-7">
        <p className="text-cyan-600">LEARN</p>
        <h1 className="text-3xl font-semibold">Helpful Resources</h1>
        <p className="pt-2 text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
          quibusdam itaque, ratione excepturi totam quis deserunt. Deleniti,
          laboriosam. Maxime deserunt eos adipisci quam doloremque ducimus?
          Nesciunt doloremque repudiandae eos nam!
        </p>
      </div>

      <div className="grid grid-cols-3 gap-7 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3">
        {resources.map((resource, i) => (
          <div
            className="shadow-lg rounded-[12px] hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col"
            key={i}
          >
            <div className="overflow-hidden">
              <img
                className="h-[300px] w-full object-cover rounded-t-[12px]"
                src={resource.img}
                alt=""
              />
            </div>

            <div className="p-7 flex flex-col flex-grow gap-5">
              <div className="space-y-3">
                <div className="text-cyan-400">{resource.type}</div>
                <div className="text-black text-2xl font-semibold">
                  {resource.title}
                </div>
                <div className="text-gray-400">{resource.text}</div>
              </div>

              <div className="flex gap-3 items-center mt-auto">
                <img
                  className="h-[32px] w-[32px] rounded-full"
                  src={resource.avatar}
                  alt="avatar"
                />
                <div className="flex flex-col">
                  <span>{resource.name}</span>
                  <span className="text-xs text-gray-400">{resource.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
