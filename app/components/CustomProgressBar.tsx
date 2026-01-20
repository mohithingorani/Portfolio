type ProgressProps = {
  isPaused?: boolean;
  duration: number;
  onAnimationEnd: () => void;
};

export function MyCustomProgressBar({
  isPaused,
  duration,
  onAnimationEnd,
}: {
  isPaused?: boolean;
  duration: number;
  onAnimationEnd: () => void;
}) {
  return (
    <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10 overflow-hidden rounded-b-lg">
      <div
        className="h-full bg-yellow-400"
        style={{
          animation: `toast-progress ${duration}ms linear forwards`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
        onAnimationEnd={onAnimationEnd}
      />
    </div>
  );
}

