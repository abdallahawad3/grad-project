const AddToCartDiv = () => {
  return (
    <div className="flex-[.18]">
      <div className="flex flex-col gap-2">
        <div className="flex gap-2  items-center justify-between p-2 border border-[#FCF7AE] h-[40px] rounded-full">
          <button className="bg-[#FCF7AE] size-[30px] block rounded-full">
            +
          </button>
          <span>1</span>
          <button className="bg-[#FCF7AE] size-[30px] block rounded-full ">
            -
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToCartDiv;
