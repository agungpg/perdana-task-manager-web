import { cn } from "@/utils/cn"
import { memo } from "react"

function ProgressBar({progress = 0}: {progress: number}) {
    console.log({})
    const progressClass = `w-[${progress}%]`
    return (<div className="w-full h-2 rounded bg-[#E5E7EB] relative">
        <div className={cn("bg-[#1BA4B8] h-full rounded", progressClass)}></div>
    </div>)
}

export default memo(ProgressBar)