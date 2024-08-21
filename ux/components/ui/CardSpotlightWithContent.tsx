import { CardSpotlight } from "./CardSpotlight";

export function CardSpotlightWithContent({
  date,
  description,
  title,
  iconList,
}: {
  date: string;
  description?: string;
  title: string;
  iconList: string[];
}) {
  return (
    <CardSpotlight>
      <div className="flex flex-col sm:flex-row gap-5 pb-5 justify-between align-top">
        <p className="text-md font-normal pt-0.4 relative text-nowrap text-gray-500">{date}</p>
        <div className="text-neutral-200 flex-grow-1 relative z-20">
          <h2 className="text-xl font-semibold text-white">{title}</h2>
          <p className="text-neutral-300 mt-4 relative z-20 text-sm">{description}</p>
        </div>
      </div>
      <div className="flex items-center absolute bottom-2 right-2">
        {iconList.map((icon, index) => (
          <div
            key={index}
            className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
            style={{
              transform: `translateX(-${5 * index + 2}px)`,
            }}
          >
            <img src={icon} alt="icon5" className="p-2" />
          </div>
        ))}
      </div>
    </CardSpotlight>
  );
}
