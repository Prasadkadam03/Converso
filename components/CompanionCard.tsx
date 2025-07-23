import Image from "next/image";
import Link from "next/link";

interface CompanionCardProps {
    id: string;
    name: string;
    topic: string;
    subject: string;
    duration: number;
    color: string;
}

const CompanionCard = ({ id, name, topic, subject, duration, color }: CompanionCardProps) => {
    return (
        <article className="flex flex-col w-full rounded-4xl border-black border p-4 gap-5 min-lg:max-w-[410px] justify-between" style={{ backgroundColor: color }}>
            <div className="flex items-center justify-between ">
                <div className="px-2 py-1 h-full text-sm text-white rounded-4xl bg-black  capitalize">{subject}</div>
                <div className="h-full px-2 rounded-4xl bg-black flex items-center aspect-square justify-center">
                    <Image
                        src={`/icons/bookmark.svg`}
                        alt="bookmark"
                        width={12.5}
                        height={15}
                    />
                </div>
            </div>
            <div className="text-2xl font-bold">{name}</div>
            <div className="text-sm">{topic}</div>
            <div className="flex items-center gap-2">
                <Image
                    src="/icons/clock.svg"
                    alt="duration"
                    width={13.5}
                    height={13.5}
                />
                <p className="text-sm">{duration} minutes</p>
            </div>
            <button className="w-full rounded-xl bg-black py-2 text-sm text-white">Launch Session</button>
        </article>
    )
}

export default CompanionCard