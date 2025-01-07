'use client'
const Sidebar = () => {
  return (
    <div className="flex flex-col gap-2 w-[300px] min-w-[300px] border-r min-h-screen p-4">
      <div>User</div>
      <div className="grow bg-red-50">Menu</div>
      <div>Settings</div>
    </div>
  )
}

export default Sidebar