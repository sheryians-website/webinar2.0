const ComparisonCard = ({ withoutThis, list, }: { withoutThis?: boolean; list: string[]; }) => {
  return (
    <div className={`border-solid rounded-[0.625rem] text-center max-w-md h-[23.125rem] overflow-hidden border-2 ${!withoutThis ? "border-royalblue-200" : "border-tomato"}`}>
      <div className={`text-white leading-[3.75rem] ${!withoutThis ? "bg-royalblue-200" : "bg-tomato"} text-11xl`}>
        {withoutThis ? "Without This Workshop" : "With This Workshop"}
      </div>
      <div className=" text-start px-3 py-6 flex flex-col gap-3 pb-14">
        {list.map((item, index) => (
          <div key={index} className="flex gap-3">
            {withoutThis ?
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-[0.125rem] size-6">
                <path d="M15.0446 8.51061L8.76451 14.7907M8.76451 8.51061L15.0446 14.7907M22.3711 11.6504C22.3711 17.431 17.6849 22.1172 11.9043 22.1172C6.12364 22.1172 1.4375 17.431 1.4375 11.6504C1.4375 5.86974 6.12364 1.18359 11.9043 1.18359C17.6849 1.18359 22.3711 5.86974 22.3711 11.6504Z" stroke="#FF5757" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg> : <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 mt-[0.125rem] size-6">
                <path d="M16.5918 8.27148L10.1465 14.7168L7.2168 11.7871M22.3711 11.4941C22.3711 17.2748 17.6849 21.9609 11.9043 21.9609C6.12364 21.9609 1.4375 17.2748 1.4375 11.4941C1.4375 5.71349 6.12364 1.02734 11.9043 1.02734C17.6849 1.02734 22.3711 5.71349 22.3711 11.4941Z" stroke="#0A6DF0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            }
            <div className="text-lg font-apfel-grotezk-base pe-6 capitalize tracking-wide leading-[1.5rem]">
              {item}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComparisonCard;
