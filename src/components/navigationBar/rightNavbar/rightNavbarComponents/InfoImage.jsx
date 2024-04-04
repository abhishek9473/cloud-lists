export default function InfoImage() {
  return (
    <div className="w-[225px] h-[325px] bg-[#FFECC7] bg-opacity-50 rounded-md px-4">
      <div className="font-semibold text-base py-3">Upload to Bearish OS</div>
      <div className="font-extralight text-[11px]">
        All items uploaded to Bearish OS are fully secured and private.
      </div>
      <div className="pl-[43px] pt-5">
        <div className="h-[144px] w-[126px] ">
          <img
            src="/images/bear-img.png"
            alt="bear img"
            className="h-full w-full"
          />
        </div>
      </div>
      <div className="text-[13px] text-opacity-50 text-center pt-2">Drag and Drop items here to upload them</div>
    </div>
  );
}
