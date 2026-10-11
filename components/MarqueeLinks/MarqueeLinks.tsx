import Marquee from "react-fast-marquee";

export default function MarqueeLinks() {
  return (
    <Marquee className="h-fit overflow-hidden border-b border-border p-2" pauseOnHover>
      I can be a React component, multiple React components, or just some text.
    </Marquee>
  )
}