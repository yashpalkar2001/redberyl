const CustomCard = ({
  imgSrc,
  altImg,
  NameHeading,
  cardStatus,
  phoneNo,
  email,
  description,
  ContainerClassName,
  imgClassName,
}) => {
  return (
    <>
      <div
        className={`border border-slate-300 rounded-md ml-3 p-4 ${ContainerClassName}`}
      >
        <div className="flex items-center py-3 border-b border-slate-200">
          <img
            src={imgSrc}
            alt={altImg}
            className={`"w-8 h-9 rounded-full border-2 border-slate-300 ${imgClassName}`}
          />
          <div className="px-4">
            <h1 className="text-sm font-semibold">{NameHeading}</h1>
            <p className="text-xs  text-center w-fit rounded-full bg-green-100 text-green-500">
              {cardStatus}
            </p>
          </div>
        </div>

        <div className="text-sm font-medium text-slate-400 py-1">
          <i className="pi pi-phone text-blue-500 mr-1"></i> {phoneNo}
        </div>
        <div className="text-sm font-medium text-slate-400 py-1">
          <i className="pi pi-envelope text-blue-500 mr-1"></i> {email}
        </div>
        <div className="text-sm font-medium text-slate-400 py-1">
          <i className="pi pi-map-marker text-blue-500 mr-1"></i>
          {description}
        </div>
      </div>
    </>
  );
};

export default CustomCard;
