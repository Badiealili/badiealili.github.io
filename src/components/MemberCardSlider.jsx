import MemberCard from "./MemberCard";

export default function MemberCardSlider() {
    let list = [1, 2, 3, 4, 5, 6];
    return (
        <ul className="flex gap-6 animate-scroll-and-back w-fit">
            {list.map((member) => {
                return <MemberCard />;
            })}
        </ul>
    );
}
