import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

export function BackgroundGradientAnimationDemo() {
  return (
    <BackgroundGradientAnimation>
      <div className="absolute z-50 inset-0 flex items-center justify-center text-white px-4 h-full ">
        <div className="flex flex-col md:flex-row md:h-[70vh] gap-4 p-4 w-full md:w-3/4">
          {/* Left Section (Profile) */}
          <div className="flex-1 h-64 md:h-auto rounded-[20px] bg-gradient-to-br from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)] p-6 shadow-lg border border-white/20 backdrop-blur-[20px]">
            <div className="p-4 text-white leading-7">
              <div className="flex justify-center pb-4">
                <img className="h-36 w-36 rounded-full" src="" alt="Profile" />
              </div>
              <div>
                <p>Name: Prashanth Chowdary</p>
                <p>Email: PrashanthChowdary007@gmail.com</p>
                <p>Phone: (+91) 9347934061</p>
                <p>Gender: Male</p>
              </div>
            </div>
          </div>

          {/* Right Section (University Info) */}
          <div className="flex flex-col flex-1 gap-4">
            {/* Top Box */}
            <div className="flex-[0.8] rounded-[20px] bg-gradient-to-b from-[rgba(255,255,255,0.2)] to-[rgba(255,255,255,0)] p-6 shadow-lg border border-white/20 backdrop-blur-[20px]">
              <div className="p-4 text-white">
                <p className="text-center pb-4">University Identification</p>
                <p>College: KL University</p>
                <p>College ID: 12345678</p>
                <p>Department: CSE</p>
                <p>Year: 1st</p>
              </div>
            </div>
            {/* Bottom Box */}
            <div className="flex-[1.2] rounded-[20px] bg-gradient-to-b from-[rgba(255,255,255,0.1)] to-[rgba(255,255,255,0)] p-6 shadow-lg border border-white/20 backdrop-blur-[20px]">
              <div className="p-4 text-white">
              <div className="text-center text-lg mb-4">Payment Pending</div>
                <div className="flex justify-between items-center mb-2">
            <span>Samyak Registration Fee</span>
            <span>300</span>
            </div>
                <div className="flex justify-between items-center mb-2">
                <span>Tax</span>
                <span>0.0</span>
                </div>

                <div className="border-t border-gray-500 my-4"></div>

                <div className="flex justify-between items-center font-semibold">
                <span>Total Amount</span>
                <span>Rs.300</span>
                </div>
                <div className="flex justify-center mt-5">
                <button className=" rounded-[20px] bg-gradient-to-b from-[rgba(50,250,50,0.2)] to-[rgba(50,250,50,0)] px-20 py-2 shadow-lg border border-white/20 backdrop-blur-[20px]" >Pay Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}
