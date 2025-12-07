import SearchIcon from "@/components/icons/SearchIcon"
import { TextInput } from "@/components/ui/Input"
import { cn } from "@/utils/cn"
import { memo, useState } from "react"

interface SearchInputProps {
    placeholder?: string;
    onChange?: (text: string) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    onSeachClick?: () => void
}
const SearchInput = (props: SearchInputProps) => {
    const [isFocus, setIsFocus] = useState(false)
    return (
        <div className={cn("flex gap-[8px] items-center border-[1px] border-[#eee] p-0 rounded-[4px] h-[46px]", isFocus && "border-blue-500")}>
            <TextInput placeholder={props.placeholder} onFocus={() => setIsFocus(true)} onBlur={() => setIsFocus(false)} className="rounded-[0] border-0" />
            <div className={"border-l-[1px] border-[#eee] items-center flex h-[100%] p-2 hover:cursor-pointer"}>
                <SearchIcon color="#555" />
            </div>
        </div>
    )
}

export default memo(SearchInput)