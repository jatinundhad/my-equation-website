export const GridBackground = ({children}) => {
  return (
    (<div
      className="w-full bg-white bg-grid-black/[0.07] relative flex items-center justify-center">
      <div
        className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
      <p
        className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-100 py-8">
        {children}
      </p>
    </div>)
  );
}
