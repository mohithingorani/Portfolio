import { ToastContentProps } from "react-toastify";

export function CustomToast({ isPaused, closeToast }: ToastContentProps) {
  return (
    <div className="relative bg-[#282829] border border-white/40 text-white sm:px-4 py-3 rounded-lg min-w-60">
      <span className="block mb-2">Sent Message !</span>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 overflow-hidden rounded-b-lg">
        <div
          className="h-full bg-yellow-200"
          style={{
            animation: "toast-progress 4000ms linear forwards",
            animationPlayState: isPaused ? "paused" : "running",
          }}
          onAnimationEnd={()=>closeToast()}
        />
      </div>
    </div>
  );
}
