

export default function SkillsTags({ name }: { name: string }) {
    return (
        <div className="flex flex-row gap-2 justify-center items-center">
            <div className="bg-black dark:bg-white h-3 w-3 rounded-full" />
            <span className="font-poppins font-medium text-black dark:text-white">{name}</span>
        </div>
    )
}