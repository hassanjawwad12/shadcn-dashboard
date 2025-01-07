'use client'
const UserItem = () => {
    return (
        <div className="flex items-center justify-between gap-2 border rounded-[8px] p-4">
            <div className="flex items-center justify-center bg-emerald-500 h-10 min-h-10 w-10 rounded-full avatar text-white font-700">
               HJ
            </div>
            <div className="grow">
                <p className="text-[16px] font-bold"> Hassan Jawwad</p>
                <p className="text-[12px] text-neutral-500">hassanjawwad12@gmail.com</p>
            </div>
        </div>
    )
}

export default UserItem